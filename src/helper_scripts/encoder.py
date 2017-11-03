import json
import csv
import re
#JSON struct
prog = [] #This is the whole json, a list of day objects.
day = {} #Has a "day" name and routine array.
routine = [] #An array of exercise objects
exercise = {} #Exercises have an "exercise" and "tasks"
tasks = [] #An array of task(s)
task = {} #A task has (maybe) effort, sets, and reps in that order.

#REGEXs
week_regex = re.compile("[week]+\s")
day_regex = re.compile("\d\s\w")
new_exercise_regex = re.compile("\d")
set_present_regex = re.compile("\d")

week_no = 1

#CSV Fields: dayname OR Exercise number, exercise name, effort, reps, sets
#For an exercise SETS is always non-zero. field 4 (0-index)

file_to_parse = "Sheiko32.csv" #Change to parse new files, bitch
fp = csv.reader(open(file_to_parse, newline='\n'), delimiter=',', quotechar='"')
for line in fp:
  if(week_regex.match(line[0])):
    week_str = line[0].split()
    week_no = int(week_str[1])
    continue
  if(day_regex.match(line[0])): #new day
    if(day != {}):
      exercise["tasks"] = tasks.copy()
      routine.append(exercise.copy())
      day["routine"] = routine.copy()
      prog.append(day)
      day = {}
    day_name_arr = line[0].split()
    day_of_week = [x for x in day_name_arr[2] if(x != "(" and x != ")")]
    day_of_week = "".join(day_of_week)
    day_name = "Week " + (str(week_no)) + ": " + day_of_week
    day["day"] = day_name
    exercise = {}
    routine = []
    continue
  
  elif(new_exercise_regex.match(line[0])): #A new exercise.
    if(exercise != {}):#append last exercise
      exercise["tasks"] = tasks.copy()
      routine.append(exercise.copy())
    exercise["exercise"] = line[1]
    tasks = []
  
  if(set_present_regex.match(line[4])):
    effort = line[2]
    if(line[2] != ""):
      effort = [x for x in line[2]]
      if(effort[0].isnumeric() and effort[1].isnumeric()):
        task["effort"] = float("." + str(effort[0]) + str(effort[1]))
    if(line[3] != ""):
      task["reps"] = line[3] #Sometimes a list
    task["sets"] = line[4]
    tasks.append(task.copy())
    task = {}
exercise["tasks"] = tasks.copy()
routine.append(exercise.copy())
day["routine"] = routine.copy()
prog.append(day)
print(json.dumps(prog))

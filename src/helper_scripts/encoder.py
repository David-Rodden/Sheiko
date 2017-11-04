#NOTE You need to be inside helper_scripts to run this.
import json
import csv
import re
import os

if("helper_scripts" not in os.getcwd()):
  print("Run this from inside `helper_scripts` for the relative paths to work correctly")
  exit(0)

#JSON struct

#REGEXs
week_regex = re.compile("[week]+\s")
day_regex = re.compile("\d\s\w")
new_exercise_regex = re.compile("\d")
set_present_regex = re.compile("\d")

week_no = 1

#CSV Fields: dayname OR Exercise number, exercise name, effort, reps, sets
#For an exercise SETS is always non-zero. field 4 (0-index)

#XXX For this run, the csv's are in `/home/roden/sheiko_csvs/`, change this to where the csv's are
csv_directory = "/home/roden/sheiko_csvs/"
for file_to_parse in os.listdir(csv_directory):
  prog = [] #This is the whole json, a list of day objects.
  day = {} #Has a "day" name and routine array.
  routine = [] #An array of exercise objects
  exercise = {} #Exercises have an "exercise" and "tasks"
  tasks = [] #An array of task(s)
  task = {} #A task has (maybe) effort, sets, and reps in that order.
  #file_to_parse = "Sheiko32.csv" #Change to parse new files, bitch
  fp = csv.reader(open(csv_directory + file_to_parse, newline='\n'), delimiter=',', quotechar='"')
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
    
    if(set_present_regex.match(line[4])): #line[4] is # of sets, always present for an ex., always a #.
      task["sets"] = int(line[4][0]) #NOTE This assumes 1 digit & not a range
      if(line[2] != ""):
        effort = [x for x in line[2]]
        if(effort[0].isnumeric() and effort[1].isnumeric()):
          task["effort"] = float("." + str(effort[0]) + str(effort[1]))
      else: #Effort is not an entry
        task["effort"] = 0 #for JSON consistency
      rep_list_bool = False
      if(line[3] != ""):
        if(set_present_regex.match(line[3])):
          try:
            task["reps"] = int(line[3])
          except: #Here, reps are a list. Split the reps up and make each rep count a set.
            rep_list_bool = True
            reps_list = [int(x) for x in line[3].split(",")]
            for rep in reps_list: #Note that task["sets"] is always 1 here.
              rep_task = task.copy() #get the info for the effort & # of sets
              rep_task["reps"] = rep
              tasks.append(rep_task.copy())
              rep_task = {}
      if(not rep_list_bool):
        tasks.append(task.copy())
      task = {}
  exercise["tasks"] = tasks.copy()
  routine.append(exercise.copy())
  day["routine"] = routine.copy()
  prog.append(day)
  
  written_filename = "../programs/" + (file_to_parse.split("."))[0] + ".json" #change the extension, run from INSIDE helper_scripts
  file_to_write = open(written_filename, 'w')
  file_to_write.write(json.dumps(prog, indent=1))
  file_to_write.close()

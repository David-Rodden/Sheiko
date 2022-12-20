import React from "react";
import Component from "react";
import * as Survey from 'survey-react';
import questions from "../questionnaire/questions.json"

export default class MySurvey extends React.Component {

    constructor() {
        super();
        Survey.Survey.cssType = 'bootstrap';
        Survey.defaultBootstrapCss.navigationButton = 'btn btn-green';
    }

    render() {
        const model = new Survey.Model(questions);
        model.onComplete.add(function (result) {
            const data = result.data;
            localStorage["experience"] = data["question2"][0];
            localStorage["bench"] = data["What is your 1RM bench press?"];
            localStorage["squat"] = data["What is your 1RM squat?"];
            localStorage["deadlift"] = data["What is your 1RM deadlift?"];
            localStorage["confidence"] = data["How confident are you with your 1RM inputs?"];
            window.location.reload();
        });
        return (
            <div className="Survey">
                <Survey.Survey model={model}/>
            </div>
        );
    }
}

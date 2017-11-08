import React, {Component} from "react";
import * as Survey from 'survey-react';
import questions from "../questionnaire/questions.json"

import 'survey-react/survey.css'

export default class MySurvey extends Component {

    constructor(props) {
        super(props);
        Survey.Survey.cssType = 'bootstrap';
        Survey.defaultBootstrapCss.navigationButton = 'btn btn-green';
    }

    render() {
        const model = new Survey.Model(questions);
        model.onComplete.add(function (result) {
            const data = result.data;
            console.log(data);
            localStorage["experience"] = "intermediate";
            window.location.reload();
        });
        return (
            <div className="Survey">
                <Survey.Survey model={model}/>
            </div>
        );
    }
}

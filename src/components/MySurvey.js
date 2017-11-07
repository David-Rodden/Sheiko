import React, {Component} from "react";
import * as Survey from 'survey-react';
import questions from "../questionnaire/questions.json"

//import 'survey-react/survey.css';

class MySurvey extends Component {
    render() {
        const model = new Survey.Model(questions);
        return (
            <div className="surveyjs">
                <Survey.Survey model={model}/>
            </div>
        );
    }
}

export default MySurvey;

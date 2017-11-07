import React, {Component} from "react";
import * as Survey from 'survey-react';
import questions from "../questionnaire/questions.json"
//import 'survey-react/survey.css';

class MySurvey extends Component {
    json = questions;
    render() {
        var model = new Survey.Model(this.json);
        return (
          <div className="surveyjs">
          <Survey.Survey model={model} />
          </div>
        );
    }
}

export default MySurvey;

import React, {Component} from "react";
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import selection from "../programs/SheikoSelector.json";

export default class ExerciseSelector extends Component {
    render() {
        function logChange(val) {
            sessionStorage["page"] = val.value;
            window.location.reload();
        }

        return (
            <Select name="exercise-selector" value="Current" clearValueText="yes"
                    options={selection} onChange={logChange} autofocus={true} placeholder="Click here to search Sheiko program..."/>

        );
    }
}
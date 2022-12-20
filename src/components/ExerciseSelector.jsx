import React from "react";
import Component from "react";
import Select from 'react-select';
import selection from "../programs/SheikoSelector.json";

export default class ExerciseSelector extends Component {
    render() {
        function logChange(val) {
            if(!val)  return;
            sessionStorage["page"] = val.value;
            window.location.reload();
        }

        return (
            <Select name="exercise-selector" value="Current" clearValueText="yes"
                    options={selection} onChange={logChange} autofocus={true}
                    placeholder="Click here to search Sheiko program..."/>
        );
    }
}
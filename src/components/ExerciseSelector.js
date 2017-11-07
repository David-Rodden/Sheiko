import React, {Component} from "react";
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import selection from "../programs/SheikoSelector.json";

class ExerciseSelector extends Component {
    render() {
        function logChange(val) {
            sessionStorage["page"] = val.value;
            window.location.reload();
        }

        return (
            <Select name="exercise-selector" value="Current" clearValueText="yes"
                    options={selection} onChange={logChange}/>

        );
    }
}

export default ExerciseSelector;
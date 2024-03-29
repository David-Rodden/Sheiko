import React from 'react';
import Component from 'react';
import './App.css';
import Exercises from "./components/ExerciseDay";
import MySurvey from "./components/MySurvey";
import ExerciseSelector from "./components/ExerciseSelector";
import ToggleDisplay from 'react-toggle-display';

export default class App extends React.Component {
    render() {
        const surveyCompleted = localStorage.getItem("experience");
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title" style={{fontFamily: "Comfortaa, cursive", fontSize: 35}}>
                        Sheiko Workout Finder
                    </h1>
                </header>
                <ToggleDisplay show={!surveyCompleted} tag="section">
                    <MySurvey/>
                </ToggleDisplay>
                <ToggleDisplay show={surveyCompleted !== null}>
                    <ExerciseSelector/>
                    <Exercises/>
                </ToggleDisplay>
                <footer style={{fontFamily: "Comfortaa, cursive", fontSize: 20}}>
                    <p>
                        Created by David Rodden -&nbsp;
                        <a href="https://github.com/David-Rodden/Sheiko">GitHub</a>
                    </p>
                </footer>
            </div>
        );
    }
}

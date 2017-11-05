import React, {Component} from 'react';
import sheikoData from './programs/Sheiko31.json';
import './App.css';
import Exercises from "./components/ExerciseDay";
import Questionnaire from 'survey-react';

/**
 * Serves as the base of the Sheiko App.
 * Currently displays the Sheiko37 program info along with a graphic depicting each exercise
 *
 * Will show questionnaire before JSON
 */
class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title" style={{fontFamily: "Comfortaa, cursive", fontSize: 35}}>
                        Sheiko Workout Finder
                    </h1>
                </header>
                <div id="surveyElement"> Elements</div>
                <Exercises exerciseDays={sheikoData}/>
                <footer style={{fontFamily: "Comfortaa, cursive", fontSize: 20}}>
                    <p>
                        Created by David gRodden -&nbsp;
                        <a href="https://github.com/David-Rodden/Sheiko">GitHub</a>
                    </p>
                </footer>
            </div>
        )
            ;
    }
}

export default App;

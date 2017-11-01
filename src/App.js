import React, {Component} from 'react';
import world from './img/globe.png';
import sheikoData from './programs/sheiko37.json';
import './App.css';
import Exercises from "./components/ExerciseDay";

/**
 * Serves as the base of the Sheiko App.
 * Currently displays the Sheiko37 program info along with a graphic depicting each exercise
 */
class App extends Component {

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title" style={{fontFamily: "Comfortaa, cursive", fontSize: 35}}>Sheiko Workout
                        Finder</h1>
                    <img src={world} className="App-world"/>
                </header>
                <Exercises exerciseDays={sheikoData}/>
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

export default App;

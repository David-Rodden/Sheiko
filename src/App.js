import React, {Component} from 'react';
import world from './img/globe.png';
import sheikoData from './programs/sheiko37.json';
import './App.css';
import Exercises from "./components/ExerciseDay";

/**
 * React test with spinning world animation - reserved for Sheiko program
 */
class App extends Component {

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title" style={{fontFamily: "Comfortaa, cursive", fontSize: 35}}>Sheiko Workout Finder</h1>
                    <img src={world} className="App-world"/>
                </header>
                <Exercises exerciseDays={sheikoData}/>
            </div>
        );
    }
}

export default App;

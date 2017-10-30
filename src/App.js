import React, {Component} from 'react';
import world from './img/globe.png';
import sheikoData from './programs/sheiko37.json';
import './App.css';
import Exercises from "./components/Exercises";

/**
 * React test with spinning world animation - reserved for Sheiko program
 */
class App extends Component {

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Sheiko Workout Finder</h1>
                    <img src={world} className="App-world"/>
                </header>
                {/*<Exercises exercises={this.sheikoData}/>*/}
                <Exercises/>
            </div>
        );
    }
}

export default App;

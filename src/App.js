import React, {Component} from 'react';
import world from './img/globe.png';
import sheikoData from './programs/sheiko37.json';
import './App.css';

/**
 * React test with spinning world animation - reserved for Sheiko program
 */
class App extends Component {
    constructor(props) {
        super(props);
        console.log(props);
    }

    getData(){
        return fetch('./programs/sheiko37.json');
    }

    componentDidMount(){
        this.getData();
    }
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Sheiko Workout Finder</h1>
                    <img src={world} className="App-world"/>
                </header>
                <body className="App-body">
                </body>
            </div>
        );
    }
}

export default App;

import React, {Component} from 'react';
import logo from './svg/logo.svg';
import world from './img/globe.png';
import './App.css';

/**
 * React test with spinning world animation - reserved for Sheiko program
 */
class App extends Component {
    constructor(props){
        super(props);
        console.log(props);
    }
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Our Planet</h1>
                </header>
                <body className="App-body">
                <img src={world} className="App-world"/>
                </body>
            </div>
        );
    }
}

export default App;

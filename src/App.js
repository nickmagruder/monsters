import { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      string: 'Hello Nick'
    }
  }

  render() {
    return (

      <div className="App">
        <header className="App-header">

          <img src={logo} className="App-logo" alt="logo" />

          <h1>
            {this.state.string}
          </h1>

          <button onClick={() => this.setState({ string: 'Hello new human' })}>Change Greeting</button>

        </header>
      </div>
    );
  }
}

export default App;

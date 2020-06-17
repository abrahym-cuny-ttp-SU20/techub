import React, {Component} from 'react';
import './App.css';
import RoutesContainer from "../components/routes/RoutesContainer";
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <RoutesContainer/>
        </header>
      </div>
    );
  }  
}

export default App;
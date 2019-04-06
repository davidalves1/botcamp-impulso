import React, { Component } from 'react';
import BtnBotcamp from './components/BtnBotcamp';

import './App.css';

class App extends Component {
  render() {
    return (
      <div style={{backgroundColor: '#333'}}>
        <img src="img/botcamp.png" alt="Botcamp" />
        <BtnBotcamp />
      </div>
    );
  }
}

export default App;

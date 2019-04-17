import React, { Component } from 'react';

import LoginWrapper from './components/LoginWrapper';
import LogoBotcamp from './components/LogoBotcamp';
import BtnBotcamp from './components/BtnBotcamp';
import Chat from './pages/Chat';

import './styles/reset.css';
import './App.css';

class App extends Component {
  render() {
    return (
      // <LoginWrapper>
      //   <LogoBotcamp />
      //   <BtnBotcamp content="Entrar" />
      // </LoginWrapper>
      <>
        <Chat />
      </>
    );
  }
}

export default App;

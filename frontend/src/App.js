import React from 'react';
import logo from './logo.svg';
import './App.css';

import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

import Questions from './questions'


class App extends React.Component {

  render() {
    return (
      <div class="content">
        <div class="intro">
          <h1>Welcome Udemy!</h1>
          <h2>Here's a quiz about me, Nathan Lee</h2>
          <button>Begin Quiz</button>
        </div>
      </div>

    );
  }

}

export default App;

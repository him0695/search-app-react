import React, { Component } from 'react';
import './App.css';
import  SearchForm  from "./components/searchform";
import Counter  from "./components/Counter";
import Menu from "./components/router";

class App extends Component {//es6
  render() {
    return (<div>
        <div>React</div>

        <Menu></Menu>
        <router-outlet></router-outlet>
      </div>
    );
  }
}

export default App;

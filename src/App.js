import React from "react";
import logo from "./logo.svg";
import "./App.css";
// import { render } from '@testing-library/react';
// import Landing from './components/landing-page'
// import { Switch, Route, Redirect } from 'react-router-dom';

import Landing from "./components/landing-page";
import Header from "./components/header";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div>
          <Header> </Header>
        </div>

        <div class="main-body">


        <div>

<div class="landing-render">
            

            <div class="image-portrait">
              <img src="dj.JPeG" alt="" id="myVideo" />
            </div>




            <div class="landing-text">
              <div class="mini-nav"> X </div>

              <p class="window"> This is not a dream. </p>

              <div>
                <button class="button-really">Really?</button>

                <div>
                  <p>It's just a slowed-down web experience.</p>
                </div>

                <Landing></Landing>
              </div>
              
            </div>

            
          </div>

        </div>

          

          <div class="border"></div>

          <div>941229 Rūta Žemčugovaitė Berlin, Germany </div>
          {/* <Route exact path='/landing-page' component={Landing}></Route> */}
        </div>
      </div>
    );
  }
}

export default App;

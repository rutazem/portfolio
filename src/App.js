import React from "react";
// import logo from "./logo.svg";
import "./App.css";
// import { render } from '@testing-library/react';
// import Landing from './components/landing-page'
// import { Switch, Route, Redirect } from 'react-router-dom';

// import AOS from 'aos';
// import 'aos/dist/aos.css'; // You can also use <link> for styles
// // ..
// AOS.init();

import Landing from "./components/landing-page";
import Header from "./components/header";

class App extends React.Component {
  state = {
    dreamWindow: true
  };

  hideDreamWindow = () => {
    this.setState({
      dreamWindow: false
    });
  };

  render() {
    return (
      <div className="App">
        <div>
          <Header> </Header>
        </div>

        <div class="main-body">
          <div>
            <div class="circle">
              <p>IT'S NOT A RACE</p>
            </div>

            <div class="landing-render">




              <div class="landing-text-right">
                <div class="dream-window">
                  <div class="mini-nav">
                    {/* <a href="" onClick={this.dreamWindow}>
                      X{" "}
                    </a> */}
                  </div>

                  <p class="window"> Not a dream. </p>
                </div>

                <div>
                  <button class="button-really">Really?</button>

                </div>


                <div data-aos="fade-up">
                  <div>
                    <p>It's just a slowed-down web experience.</p>
                  </div>

                </div>



                <div class="circle-2">
                  <p>TO THE END OF THE MAZE</p>
                </div>

                <div class="landing-text-right">
                  {" "}
                  I am a web designer and a full stack developer.{" "}
                </div>
                <div class="landing-text-left"> Focused on Humane Tech Principles. </div>

                <div class="landing-text-right">
                  {" "}
                  On a path of building products that are in alignment with
                  human nature.{" "}
                </div>

                <div >

                  <hr />
                  <div class="landing-text-right">
                    Projects:
                </div>

                  <div>
                  <a href="https://depth-rituals.herokuapp.com/" target="_blank">  → Depth Rituals</a>
                  
                </div>
                <div>
                 <a href="https://women-of-tomorrow.herokuapp.com/" target="_blank"> 	
                 → Women Of Tomorrow </a>
                </div>
                <div>

                  <a href="https://rutazem.github.io/sliding-doors-game/" target="_blank">→ Sliding Doors</a>

                </div>
                </div>

                <Landing></Landing>
              </div>
            </div>
          </div>
        </div>

        <div class="landing-render">
          <div>
            941229{" "}
            <a href="https://www.linkedin.com/in/rutazem/" target="_blank">
              {" "}
              → Rūta Žemčugovaitė{" "}
            </a>
            Berlin, Germany{" "}
          </div>
        </div>
      </div>
    );
  }
}

export default App;

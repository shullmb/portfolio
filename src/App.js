import React, { Component } from 'react';
import Terminal from './Terminal';

class App extends Component {
  render() {
    let command = "cat about.me"
    let output = "Web Developer with a demonstrated history of organized problem solving, process improvement, technical training and communication. Skilled in JavaScript and object oriented programming, with a serious crush on Ruby.When I'm not hacking away at my keyboard, you can find me on a bike or roaming the trails with my wife and dog!"
    return (
      <div id="container">
        <nav></nav>
        <main>
          <Terminal command={command} output={output}/>
        </main>
        <footer></footer>
      </div>
    );
  }
}

export default App;

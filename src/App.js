import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Terminal from './Terminal';
import { Nav } from './Nav';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fab)

class App extends Component {
  render() {
    let command = "cat about.me"
    let output = "Web Developer with a demonstrated history of organized problem solving, process improvement, technical training and communication. Skilled in JavaScript and object oriented programming, with a serious crush on Ruby.When I'm not hacking away at my keyboard, you can find me on a bike or roaming the trails with my wife and dog!"
    return (
      <div id="container">
        <nav>
          <Nav menu={this.props.menu}/>
        </nav>
        <main className="content">
          <h1>Michael Shull
          <FontAwesomeIcon icon={['fab', 'linkedin']} size='1x' pull='right' /> 
          <FontAwesomeIcon icon={['fab', 'free-code-camp']} size='1x' pull='right' /> 
          <FontAwesomeIcon icon={['fab', 'github']} size='1x' pull='right' /> </h1>
          <Terminal command={command} output={output}/>
        </main>
        <footer></footer>
      </div>
    );
  }
}

export default App;

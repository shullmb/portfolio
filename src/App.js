import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Terminal from './Terminal';
import Projects from './Projects';
import { Nav } from './Nav';
import { Resume } from './Resume';
import { Skills } from './Skills';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { Header } from './Header';

library.add(fab)

class App extends Component {
  render() {
    let command = "cat about.me"
    let output = "Web Developer with a demonstrated history of organized problem solving, process improvement, technical training and communication. Skilled in JavaScript and object oriented programming, with a serious crush on Ruby. When I'm not hacking away at my keyboard, you can find me on a bike or roaming the trails with my wife and dog!"
    return (
    <Router>
      <div id="container">
        <nav>
          <Nav menu={this.props.menu}/>
        </nav>
        <main className="content">
            <Header />
            <Switch>
              <Route exact path ="/" component={ () => <Terminal command={command} output={output} />} />
              <Route exact path="/projects" component={Projects} />
              <Route exact path="/resume" component={Resume} />
              <Route exact path="/skills" component={Skills} />
            </Switch>
        </main>
        <footer><p>i'm a developer not a designer | &copy; 2018 mbshull </p></footer>
      </div>
    </Router>
    );
  }
}

export default App;

import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Terminal from './Terminal';
import Projects from './Projects';
import { Nav } from './Nav';
import { Resume } from './Resume';
import { Skills } from './Skills';
import { Header } from './Header';
import NotFound from './NotFound';
import { Footer } from './Footer';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      terminal: {
        command: "cat about.me",
        output: "Web Developer with a demonstrated history of organized problem solving, process improvement, technical training and communication. Skilled with JavaScript and object oriented programming, with a serious crush on Ruby. When I'm not hacking away at my keyboard, you can find me on a bike or roaming the trails with my wife and dog!"
      }
    }
  }

  render() {
    return (
    <Router>
      <div id="container">
        <nav>
          <Nav menu={this.props.menu}/>
        </nav>
        <main className="content">
            <Header />
            <Switch>
              <Route exact path="/" component={() => 
                <Terminal command={this.state.terminal.command } 
                          output={this.state.terminal.output} />} 
                        />
              <Route exact path="/projects" component={Projects} />
              <Route exact path="/resume" component={Resume} />
              <Route exact path="/skills" component={Skills} />
              <Route component={(props) => <NotFound {...props} />} /> 
            </Switch>
        </main>
        <Footer />
      </div>
    </Router>
    );
  }
}

export default App;

import React, { Component } from 'react';

class Terminal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cmd: '',
      output: '',
      executed: false
    }
  }

  componentDidMount() {
    let str = this.props.command ? this.props.command : "echo 'some other stuff broke'"
    let output = this.props.output ? this.props.output : "some other stuff broke"
    let arr = str.split('')
    let command = []
    let callback_timeout = str.length*100 + 800;
    arr.forEach( (char, i) => {
      i < 1 ? command.push(char) : command.push( `${command[i-1]}${char}`)
    })

    command.forEach( (word, i) => {
      setTimeout( () => {
        this.setState({
          cmd: word
        })
      }, 500 + i*100)
    })

    setTimeout( () => {
      this.setState({output, executed: true})
    }, callback_timeout)

  }

  render() {
    let cpu = <span><span className="cpu">me@mbshull</span> ~/ $ </span>
    let cursor = <span id="blinking-cursor">|</span>
    let executed = this.state.executed
    return (
      <div className="container">
        <div className="t-window">
          <div className="top">
            <span className="red">&bull; </span>
            <span className="yellow">&bull; </span>
            <span className="green">&bull; </span>
          </div>
          <div className="terminal">
            {cpu}
            <span id="cmd">{this.state.cmd}</span>{ executed ? '' : cursor}<br /><br />
            <span id="output">{this.state.output}</span><br />
            {executed ? cpu : ''}{executed ? cursor : ''}
          </div>
        </div>
      </div>
    )
  }
}

export default Terminal;
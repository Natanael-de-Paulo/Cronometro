import React, { Component } from 'react'
import './app.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      timer: 0,
      handleButtonText: 'Iniciar'
    }
    this.startTimer = null
    this.start = this.start.bind(this)
    this.clear = this.clear.bind(this)
  }
  start() {
    let state = this.state
    if (this.startTimer !== null) {
      clearInterval(this.startTimer)
      this.startTimer = null
      state.handleButtonText = 'Retomar'
    } else {
      let state = this.state
      this.startTimer = setInterval(() => {
        state.timer += 0.1
        this.setState(state)
      }, 100)

      state.handleButtonText = 'Pausar'
    }

    this.setState(state)
  }

  clear() {
    if (this.startTimer !== null) {
      clearInterval(this.startTimer)
      this.startTimer = null
    }
    let state = this.state
    state.timer = 0
    state.handleButtonText = 'Iniciar'
    this.setState(state)
  }

  render() {
    return (
      <>
        <div className="container">
          <div className="contentTimer">
            <img
              src={require('./assets/cronometro.png')}
              alt="cronometro"
              className="img"
            />
            <span className="timer">{this.state.timer.toFixed(1)}</span>
          </div>
          <div className="areaBtn">
            <button className="btn" onClick={this.start}>
              {this.state.handleButtonText}
            </button>
            <button className="btn" onClick={this.clear}>
              Limpar
            </button>
          </div>
        </div>
      </>
    )
  }
}

export default App

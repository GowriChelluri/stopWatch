import './index.css'
import {Component} from 'react'

class StopWatch extends Component {
  state = {timeInSeconds: 0}

  onStart = () => {
    this.timer = setInterval(this.onTick, 1000)
  }

  onTick = () => {
    this.setState(prevState => ({
      timeInSeconds: prevState.timeInSeconds + 1,
    }))
  }

  onStop = () => {
    clearInterval(this.timer)
  }

  onReset = () => {
    this.setState({timeInSeconds: 0})
  }

  renderMinutes = () => {
    const {timeInSeconds} = this.state
    const minutes = Math.floor(timeInSeconds / 60)
    if (minutes < 10) {
      return `0${minutes}`
    }
    return minutes
  }

  renderSeconds = () => {
    const {timeInSeconds} = this.state
    const seconds = Math.floor(timeInSeconds % 60)
    if (seconds < 10) {
      return `0${seconds}`
    }
    return seconds
  }

  componentWillUnmount = () => {
    clearInterval(this.timer)
  }

  render() {
    const displayTime = `${this.renderMinutes()}:${this.renderSeconds()}`
    return (
      <div className="bg-container">
        <h1 className="heading">Stopwatch</h1>
        <div className="watch-box-container">
          <div className="timer-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              alt="stopwatch"
              className="logo"
            />
            <p className="sub-heading">Timer</p>
          </div>
          <h1>{displayTime}</h1>
          <div>
            <button type="button" className="btn start" onClick={this.onStart}>
              Start
            </button>
            <button type="button" className="btn stop" onClick={this.onStop}>
              Stop
            </button>
            <button type="button" className="btn reset" onClick={this.onReset}>
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}
export default StopWatch

import React, { Component } from "react";
import "../App.css";

class Stopwatch extends Component {
  state = {
    timerOn: false,
    timerStart: 0,
    timerTime: 0,
    laps:[]
  };

  startTimer = () => {
    this.setState({
      timerOn: true,
      timerTime: this.state.timerTime,
      timerStart: Date.now() - this.state.timerTime
    });
    this.timeID = setInterval(() => {
      this.setState({
        timerTime: Date.now() - this.state.timerStart
      });
    }, 1);
  };

  stopTimer = () => {
    console.log("bbbbbbb");
    this.setState({ timerOn: false });
    clearInterval(this.timeID);
  };
  lapTimer = () => {
    this.setState(prevState => ({
      laps: [this.state.timerTime,...prevState.laps]
    }))
  } 

  resetTimer = () => {
    this.setState({
      timerStart: 0,
      timerTime: 0,
      laps: []
    });
  };
  getTime = (props) => {
    let seconds = ("0" + (Math.floor(props.time / 1000) % 60)).slice(-2);
    let minutes = ("0" + (Math.floor(props.time / 60000) % 60)).slice(-2);
    let hours = ("0" + Math.floor(props.time / 3600000)).slice(-2);
    return(
      hours+" : "+minutes+" : "+seconds
    )
  }


  render() {

    const  timerTime  = this.state.timerTime;
    let LapNo=1

    let seconds = ("0" + (Math.floor(timerTime / 1000) % 60)).slice(-2);
    let minutes = ("0" + (Math.floor(timerTime / 60000) % 60)).slice(-2);
    let hours = ("0" + Math.floor(timerTime / 3600000)).slice(-2);

    const items = this.state.laps.map((LapTime)=>
    <tr>
      <td className="Table-data">{LapNo++}</td>
      <td className="Table-data">{("0" + Math.floor(LapTime / 3600000)).slice(-2)} : {("0" + (Math.floor(LapTime / 60000) % 60)).slice(-2)} : {("0" + (Math.floor(LapTime / 1000) % 60)).slice(-2)} </td>
      {/* <td className="Table-data">{this.getTime(props.time=LapTime) }</td> need to optimize*/}
    </tr>)
    return (
      <div className="Stopwatch">
        <div className="Stopwatch-header">Stopwatch</div>
        <div className="Stopwatch-display">
      {hours} : {minutes} : {seconds} 
      </div>
        {this.state.timerOn === false && this.state.timerTime === 0 && (
          <button onClick={this.startTimer}>Start</button>
        )}
        {this.state.timerOn === true && (
          <button onClick={this.stopTimer}>Stop</button>
        )}
        {this.state.timerOn === true && (
          <button onClick={this.lapTimer}>Lap</button>
        )}
        {this.state.timerOn === false && this.state.timerTime > 0 && (
          <button onClick={this.startTimer}>Resume</button>
        )}
        {this.state.timerOn === false && this.state.timerTime > 0 && (
          <button onClick={this.resetTimer}>Reset</button>
        )}
        {this.state.laps.length===0?(<div className="Laps1"/>):
        (<div className="Laps">
          <tr>
            <th className="Table-header">Lap No</th>
            <th className="Table-header">Lap Times</th>
          </tr>
          <hr/>
          <div className="Table">{items}</div>
        </div>)}
      </div>
    );
  }
}

export default Stopwatch;
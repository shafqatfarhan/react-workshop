import React from "react";
import {connect} from "react-redux";
import {updateTime} from "./timerActions";

const mapStateToProps = state => ({
  time: new Date(state.timerReducer.time).toLocaleTimeString('en-US'),
});

class Timer extends React.Component {

  componentWillMount(){
    setInterval(()=>{
      this.props.dispatch(updateTime(new Date().getTime()))
    }, 1000)
  }
  render() {
    const {time} = this.props;
    return (
      <p>Time is: {time}</p>
  )}
}

export default connect(mapStateToProps)(Timer)

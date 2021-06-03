import React, { Component } from 'react';

class Habit extends Component {
  state = {
    count: 0,
  }

  handleIncrement = () => {
    // state object안에 있는 해당 멤버변수 count를 찾아 1증가 시킨 뒤 state를 업데이트 한다.
    this.setState({
      count: ++this.state.count,
    })
  };

  handleDecrement = () => {
    const count = --this.state.count;
    this.setState({
      count: count < 0 ? 0 : count,
    })
  }

  render() {
    return (
      <li className="habit">
        <span className="habit-name">Reading</span>
        <span className="habit-count">{this.state.count}</span>
        <button className="habit-button habit-increase" onClick={this.handleIncrement}>
          <i className="fas fa-plus-square"></i>
        </button>
        <button className="habit-button habit-decrease" onClick={this.handleDecrement}>
          <i className="fas fa-minus-square"></i>
        </button>
        <button className="habit-button habit-delete">
          <i className="fas fa-trash"></i>
        </button>
      </li>
    )
  }
}

export default Habit;
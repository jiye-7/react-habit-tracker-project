import React, { Component } from 'react';

class Habit extends Component {
  render() {
    return (
      <>
      <span className="habit-name">Reading</span>
      <span className="habit-count">7</span>
      <button className="habit-button habit-increase">+</button>
      <button className="habit-button habit-decrease">-</button>
      </>
    )
  }
}

export default Habit;
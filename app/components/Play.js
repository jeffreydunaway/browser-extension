import React, { Component } from 'react';
import style from '../components/Play.css';

export default class Play extends Component {

  // TODO: Extract home.js controller from website Angular controller;

  constructor(props) {
    super(props);
    this.state = {
      type: {
        standard: 'Standard',
        live: 'Live960',
        threecheck: '3 Check'
      },
      time: [
        '3 min'
      ]
    };
  }

  handlePlay() {
    return;
  }

  render() {
    const type = this.state.type;
    return (
      <div className={style.play}>
        <ul>
          {Object.keys(type).map(key =>
            <li>{type[key]}</li>
          )}
        </ul>
        <a className={style.btn} onClick={this.handlePlay}>Play</a>
      </div>
    );
  }
}

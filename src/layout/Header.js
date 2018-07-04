import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
      <div className="ui inverted huge borderless fluid menu">
        <a className="header item">gameLOCK</a>
        <div className="right menu">
          <a className="item">+ Add Player</a><a className="item">Players</a>
        </div>
      </div>
    );
  }
}
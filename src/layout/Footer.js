import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
      <div class="row">
        <div class="column">
          <div class="ui divider"></div>
          <footer>
            Made with <i class="heart icon"></i> by CAPSLOCK
          </footer>
        </div>
      </div>
    );
  }
}
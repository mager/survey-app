import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Burger extends Component {
  static propTypes = {
    toggleAction: PropTypes.func,
  };

  render() {
    return (
      <div className="navbar-burger burger" onClick={this.props.toggleActive}>
        <span />
        <span />
        <span />
      </div>
    );
  }
}

export default Burger;

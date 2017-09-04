import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

import Billing from './Billing';
import Burger from './Burger';
import '../css/header.css';

class Header extends Component {
  state = {
    dropdownActive: false,
  };

  toggleActive = () => {
    const dropdownActive = !this.state.dropdownActive;

    this.setState({ dropdownActive });
  };

  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <div className="navbar-end">
            <div className="navbar-item is-hidden-desktop-only">
              <p className="control">
                <a className="button is-primary" href="/auth/google">
                  <span className="icon">
                    <i className="fa fa-google-plus" />
                  </span>
                  <span>Login</span>
                </a>
              </p>
            </div>
          </div>
        );
      default:
        return (
          <div className="navbar-end">
            <div className="navbar-item">
              <Billing />
            </div>
            <div className="navbar-item">
              <span className="bd-emoji">💵</span>
              <span>
                Credits: {this.props.auth.credits}
              </span>
            </div>
            <div className="navbar-item is-hidden-desktop-only">
              <p className="control">
                <a className="button is-white" href="/api/logout">
                  <span>Logout</span>
                </a>
              </p>
            </div>
          </div>
        );
    }
  }

  render() {
    const classer = classNames({
      btn: true,
      'navbar-menu': true,
      'is-active': this.state.dropdownActive,
    });

    return (
      <nav className="navbar">
        <div className="navbar-brand">
          <Link className="navbar-item" to={this.props.user ? '/surveys' : '/'}>
            Surveys
          </Link>
          <Burger toggleActive={this.toggleActive} />
        </div>
        <div className={classer}>
          <div className="navbar-end">
            {this.renderContent()}
          </div>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  return { auth };
};

export default connect(mapStateToProps, null)(Header);

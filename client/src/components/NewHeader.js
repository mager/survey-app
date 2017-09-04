import React, { Component } from 'react';

class NewHeader extends Component {
  render() {
    return (
      <div className="container">
        <nav className="level">
          <div class="level-left">Full Stack React</div>
          <div class="level-right">
            <div className="navbar-item is-hidden-desktop-only">
              <div className="field">
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
          </div>
        </nav>
      </div>
    );
  }
}

export default NewHeader;

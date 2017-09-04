import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Billing extends Component {
  handleToken = token => {
    console.log('handle token');
    console.log(token);
    this.props.handleToken(token);
  };

  render() {
    return (
      <p className="control">
        <StripeCheckout
          name="Mager's Surveys"
          description="for 5 survey credits"
          amount={500}
          token={token => this.handleToken(token)}
          stripeKey={process.env.REACT_APP_STRIPE_KEY}
        >
          <a className="button is-success">
            <span>Add Credits</span>
          </a>
        </StripeCheckout>
      </p>
    );
  }
}

export default connect(null, actions)(Billing);

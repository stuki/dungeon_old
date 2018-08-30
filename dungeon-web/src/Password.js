import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import PinInput from 'react-pin-input';
import './Password.css';

class Password extends PureComponent {
  handleSubmit = (pin) => {
    const { handlePassword } = this.props;
    handlePassword(pin);
  }

  render() {
    return (
      <div id="password">
        <h1 id="title">Insert pin</h1>
        <PinInput
          length={4}
          type="numeric"
          onComplete={value => this.handleSubmit(value)}
        />
      </div>
    );
  }
}

Password.propTypes = {
  handlePassword: PropTypes.func.isRequired,
};

export default Password;

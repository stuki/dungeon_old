import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import PinInput from 'react-pin-input';

class Password extends PureComponent {
  handleSubmit = (pin) => {
    const { handlePassword } = this.props;
    handlePassword(pin);
  }

  render() {
    return (
      <PinInput
        length={4}
        type="numeric"
        style={{ padding: '10px' }}
        inputStyle={{ borderColor: 'red' }}
        inputFocusStyle={{ borderColor: 'blue' }}
        onComplete={value => this.handleSubmit(value)}
      />
    );
  }
}

Password.propTypes = {
  handlePassword: PropTypes.func.isRequired,
};

export default Password;

import React, { PureComponent } from 'react';
import PinInput from 'react-pin-input';

class Password extends PureComponent {
  handleSubmit = (pin) => {
    this.props.handlePassword(pin)
  }

  render() {
    return (
      <PinInput
        length={4}
        onChange={(value, index) => {}}
        type="numeric"
        style={{padding: '10px'}}
        inputStyle={{borderColor: 'red'}}
        inputFocusStyle={{borderColor: 'blue'}}
        onComplete={(value, index) => this.handleSubmit(value)}
      />
    );
  }
}

export default Password;

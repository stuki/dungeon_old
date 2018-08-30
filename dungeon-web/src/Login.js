import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateUser } from './Actions/UserActions';
import Api from './Api';
import {
  FormGroup, FormControl, Form, Col, ControlLabel, HelpBlock, ListGroupItem, ListGroup, Button,
} from 'react-bootstrap';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      register: false,
    };
    this.onUpdateUser = this.onUpdateUser.bind(this);
  }

  onUpdateUser(user) {
    const { onUpdateUser } = this.props;

    onUpdateUser(user);
  }

  nameChanged = (e) => {
    this.setState({ name: e.target.value });
  }

  login = async (e) => {
    e.preventDefault();

    const { name } = this.state;
    const { handleLogin } = this.props;

    if (name) {
      const player = await Api.getPlayer(name);
      if (player !== undefined) {
        this.onUpdateUser(player);
        setTimeout(handleLogin(), 1000);
      } else {
        this.setState({ register: true });
      }
    }
  }


  register = async (e) => {
    e.preventDefault();

    const { name } = this.state;

    if (name) {
      Api.createPlayer(name);
      setTimeout(this.login(e), 1000);
    }
  }

  render() {
    const { register, name } = this.state;
    return (
      <div className="Login">
        {!register
          && (
            <Form horizontal onSubmit={this.login}>
            
          <FormGroup controlId="loginLabel">
              <Col componentClass={ControlLabel} sm={2}>
                  Login
              </Col>
          </FormGroup>
          
          <FormGroup controlId="loginName">
          <Col componentClass={ControlLabel} sm={2}>
              Name:
          </Col>
          <Col sm={4}>
          <FormControl type="text" placeholder="Write your name and log in" value={name} onChange={this.nameChanged} />
          </Col>
          </FormGroup>

          <FormGroup controlId="submit">
            <Col smOffset={2} sm={10}>
                <Button type="submit">Login</Button>
            </Col>
            </FormGroup>

          </Form>
          )
        }
        {register
          && (
          <Form horizontal onSubmit={this.handleSubmit}>
            
          <FormGroup controlId="register">
              <Col componentClass={ControlLabel} sm={2}>
                  Register
              </Col>
          </FormGroup>
          
          <FormGroup controlId="registerName">
          <Col componentClass={ControlLabel} sm={2}>
              Name:
          </Col>
          <Col sm={4}>
          <FormControl type="text" placeholder="Write your name and register" value={name} onChange={this.nameChanged} required />
          </Col>
          </FormGroup>

          <FormGroup controlId="submit">
            <Col smOffset={2} sm={10}>
                <Button type="submit">Register</Button>
            </Col>
            </FormGroup>

          </Form>
          )
        }
      </div>
    );
  }
}

Login.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
  }).isRequired,
  onUpdateUser: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  user: state.user,
});

const mapActionsToProps = {
  onUpdateUser: updateUser,
};

export default connect(mapStateToProps, mapActionsToProps)(Login);

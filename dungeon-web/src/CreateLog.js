import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Api from './Api';


class CreateLog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      label: '',
      text: '',
      sessionId: props.sessionId,
      PlayerId: props.user.id,
    };
  }


    handleSubmit = (e) => {
      const { updateLogs } = this.props;

      e.preventDefault();
      Api.createLog(this.state);
      setTimeout(updateLogs(), 1000);
      this.setState({ label: '', text: '' });
    }

    handleChange(property) {
      return (e) => {
        this.setState({
          [property]: e.target.value,
        });
      };
    }

    render() {
      const { label, text } = this.state;

      return (
        <li>
          <div>Create new log</div>
          <form onSubmit={this.handleSubmit}>
            <table>
              <tbody>
                <tr>
                  <td>Label: </td>
                  <td><input type="text" value={label} onChange={this.handleChange('label')} /></td>
                </tr>
                <tr>
                  <td>Text: </td>
                  <td><input type="text" value={text} onChange={this.handleChange('text')} /></td>
                </tr>

                <tr><td><input type="submit" defaultValue="Add new log" onClick={this.handleSubmit} /></td></tr>
              </tbody>
            </table>

          </form>
        </li>
      );
    }
}


CreateLog.propTypes = {
  sessionId: PropTypes.number.isRequired,
  user: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
  }).isRequired,
  updateLogs: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  user: state.user,
});

// mapStateToProps basically receives the state of the store
export default connect(mapStateToProps)(CreateLog);

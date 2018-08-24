import React, { Component } from 'react';
import { createLog } from './Service';


class CreateLog extends Component {
    constructor(props) {
      super(props);
      this.state = {
        label: "",
        text: "",
        SessionId: 1,
        PlayerId: 1
      }
    }

    handleChange(property) {
        return e => {
          this.setState({
            [property]: e.target.value
          });
        };
      }

    handleSubmit = (e) => {
      e.preventDefault();
      createLog(this.state)
    }

    render() {
      return (
        <div>
            <div>Create new log</div>
          <form>
            <table>
                <tbody>
                    <tr><td>Label: </td><td><input type="text" value={this.state.label} onChange={this.handleChange('label')} /></td></tr>
                    <tr><td>Text: </td><td><input type="text" value={this.state.text} onChange={this.handleChange('text')} /></td></tr>

                    <tr><td><input type="submit" defaultValue="Add new log" onClick={this.handleSubmit}/></td></tr>
                </tbody>
            </table>

          </form>
        </div>
      );
    }
  }



export default CreateLog;

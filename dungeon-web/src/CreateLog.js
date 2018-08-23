import React, { Component } from 'react';
import { createLog } from './Service';


class CreateLog extends Component {
    constructor(props) {
      super(props);
      this.state = {
        label: "",
        text: ""
      }
    }
  
    handleChange = (e) => {
      this.setState({ label: e.target.value })
    }
  
    handleSubmit = (e) => {
      e.preventDefault();
      createLog(this.state.label, 1)
    }
  
    render() {
      return (
        <div>
            <div>Create new log</div>
          <form>
            <table>
                <tbody>
                    <tr><td>Label: </td><td><input type="text" value={this.state.label} onChange={this.handleChange} /></td></tr>
                    <tr><td>Text: </td><td><input type="text" value={this.state.text} onChange={this.handleChange} /></td></tr>
                    
                    <tr><td><input type="submit" defaultValue="Add new log"/></td></tr>
                </tbody>
            </table>

          </form>
        </div>
      );
    }
  }
  


export default CreateLog;
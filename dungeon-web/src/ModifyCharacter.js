import React, { Component } from 'react';
import Api from './Api';

class ModifyCharacter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      character: null
    }
    this.componentDidMount = this.componentDidMount.bind(this);
  }
  
  async componentDidMount() {
    const char = await Api.getCharacter(2, 1);
    this.setState({ character: char })
  }

  render() {

    return (
      <div>
        <div>Modify character qualities</div>
        {/* onSubmit={this.handleSubmit} */}
        <form className="characterModifySheet">
          <table>
            <tbody>
              <tr><td><input type="submit" defaultValue="Modify character"/></td></tr>
            </tbody>
          </table>
        </form>
      </div>
    );
  }
}

export default ModifyCharacter;

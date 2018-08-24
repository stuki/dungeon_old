import React, { Component } from 'react';
import fetchival from 'fetchival';
const baseurl = "https://dungeon.azurewebsites.net";

class ModifyCharacter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      character: null
    }
  }
  componentDidMount() {
    this.getCharacter();
  }

  getCharacter = async () => {
    const api = fetchival(baseurl);
    const session = api("characters/1/2")
    const char = await session.get();
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

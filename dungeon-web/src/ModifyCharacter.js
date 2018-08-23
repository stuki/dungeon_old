import React, { Component } from 'react';
import fetchival from 'fetchival';
const baseurl = "https://dungeon.azurewebsites.net/api/";

class ModifyCharacter extends Component {

    componentDidMount() {
        this.getCharacter();
    }

    getCharacter = async () => {
        var character = fetchival(baseurl + "characters/" + 1 + 3);
        const characterName = await character.get();
        console.log(characterName);
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
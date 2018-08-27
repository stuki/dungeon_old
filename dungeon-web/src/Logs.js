import React, { Component } from 'react';


class Logs extends Component {

    render() {
        return (
            <li className="Logs">
                <b>Log text:</b> {this.props.text}
            </li>
        );
    }
}

export default Logs;

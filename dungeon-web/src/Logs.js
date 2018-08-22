import React, { Component } from 'react';


class Logs extends Component {
   
    render() {
        return (

            <div className="Logs">
                <p>LOGS</p>
                <p className="logName"><b>Log label:</b> {this.props.logs.label}</p>
                <p className="logCreated"><b>Log text:</b> {this.props.logs.text}</p>
            </div>

        );
    }
}


export default Logs;
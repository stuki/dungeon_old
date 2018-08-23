import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import sessionPage from './sessionPage';


class Session extends Component {

    render() {
        return (
            <Router>
                <div>
                    <Route path="/session" component={sessionPage} />
                    <Link to="/session">Session Page</Link>
                    <div className="Session">
                        <p>SESSION</p>
                        <p className="sesName"><b>Session name:</b> {this.props.session.name}</p>
                        <p className="sesCreated"><b>Created at:</b> {new Date(this.props.session.createdAt).toLocaleString()}</p>
                    </div>
                </div>
            </Router>

        );
    }
}

export default Session;
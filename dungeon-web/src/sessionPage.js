import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import { Navbar } from 'react-bootstrap';
import CreateCharacter from './createCharacter';
import CreateSession from './CreateSession';

class sessionPage extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Navigation />
                    <div className="SessionPageNavigation">
                        <Switch>
                            <Route path="/createCharacter" component={CreateCharacter} />
                            <Route path="/createSession" component={CreateSession} />
                        </Switch>
                    </div>
                </div>
            </Router>
        );
    }
}

class Navigation extends Component {

    render() {
        return (
            <Navbar>
                <Link to="/createCharacter">Create Character</Link>
                <Link to="/createSession">Create Session</Link>
            </Navbar>
        );
    }
}


export default sessionPage;
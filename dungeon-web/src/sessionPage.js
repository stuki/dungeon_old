import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import { Navbar } from 'react-bootstrap';
import CreateCharacter from './createCharacter';
import ModifyCharacter from './ModifyCharacter';
import CreateSession from './CreateSession';

class sessionPage extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Navigation/>
                    <div className="SessionPageNavigation">
                        <Switch>
                            <Route path="/createCharacter" component={CreateCharacter} />
                            <Route path="/createSession" component={CreateSession} />
                            <Route path="/ModifyCharacter" component={ModifyCharacter} />
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
                <Navbar.Header className="navi">
                    <Navbar.Brand>
                        <Link to="/createCharacter">Create Character</Link>
                        <Link to="/ModifyCharacter">Modify Character</Link>
                        <Link to="/createSession">Create Session</Link>
                    </Navbar.Brand>
                </Navbar.Header>
            </Navbar>
        );
    }
}


export default sessionPage;
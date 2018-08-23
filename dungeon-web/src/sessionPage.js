import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import { Navbar } from 'react-bootstrap';
import CreateCharacter from './createCharacter';
import ModifyCharacter from './ModifyCharacter';
import CreateSession from './CreateSession';
import LogList from './LogList';

class sessionPage extends Component {
    constructor(props) {
        super(props);
        this.state = { sessionId: props.match.params.sessionId };
    }
    
    render() {
        return (
            <Router>
                <div>
                    <LogList />
                    <Navigation/>
                        <Switch>
                            <Route path="/createCharacter" component={CreateCharacter} />
                            <Route path="/createSession" component={CreateSession} />
                            <Route path="/ModifyCharacter" component={ModifyCharacter} />
                        </Switch>
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
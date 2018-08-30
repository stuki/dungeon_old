import React from 'react';
import PropTypes from 'prop-types';
import { Panel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Session.css';

const Session = (props) => {
  const { session } = props;
  const link = `/session/${session.id}`;

  return (
    <div>
      <div className="session">
        <Link to={link}>
          <Panel key={session.id}>
            <Panel.Heading>
              <Panel.Title>{session.name}</Panel.Title>
            </Panel.Heading>
            <Panel.Body />
            <Panel.Footer>
              {session.createdAt.split('T')[0]}
            </Panel.Footer>
          </Panel>
        </Link>
      </div>
    </div>
  );
};

Session.propTypes = {
  session: PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
  }).isRequired,
};


export default Session;

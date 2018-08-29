import React from 'react';
import PropTypes from 'prop-types';
import { Panel } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Session = (props) => {
  const { session } = props;
  const link = `/session/${session.id}`;
  return (
    <Panel>
      <Panel.Heading>
        <Link to={link}>
          <Panel.Title>{session.name}</Panel.Title>
        </Link>
      </Panel.Heading>
      <Panel.Body>
                Created at: {new Date(session.createdAt).toLocaleString()}
      </Panel.Body>
    </Panel>
  );
};


Session.propTypes = {
  session: PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    createdAt: PropTypes.instanceOf(Date).isRequired,
  }).isRequired,
};


export default Session;

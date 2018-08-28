import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';


const Session = (props) => {
  const { session } = props;
  const link = `/session/${session.id}/journey`;
  return (
    <div>
      <Link to={link}>Session Page</Link>
      <div className="Session">
        <p className="sesName">
          <b>Session name:</b>
          {' '}
          {session.name}
        </p>
        <p className="sesCreated">
          <b>Created at:</b>
          {' '}
          {new Date(session.createdAt).toLocaleString()}
        </p>
      </div>
    </div>
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

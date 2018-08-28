import React from 'react';
import PropTypes from 'prop-types';

const Logs = (props) => {
  const { text } = props;
  return (
    <li className="Logs">
      {text}
    </li>
  );
};

Logs.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Logs;

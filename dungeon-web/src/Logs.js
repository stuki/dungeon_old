import React from 'react';
import { Panel } from 'react-bootstrap';
import PropTypes from 'prop-types';

const Logs = (props) => {
  const { text } = props;
  return (
    <Panel>
      {text}
    </Panel>
  );
};

Logs.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Logs;

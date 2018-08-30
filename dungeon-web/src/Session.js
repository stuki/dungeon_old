import React from 'react';
import PropTypes from 'prop-types';
import { Panel, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Session = (props) => {
  const { session } = props;
  const link = `/session/${session.id}`;
  return (
      <Row>
        <Col xs={6} xsOffset={3}>
          <Panel key={session.id}>
            <Panel.Heading>
              <Link to={link}>
                <Panel.Title>{session.name}</Panel.Title>
              </Link>
            </Panel.Heading>
            <Panel.Body>
              Created at:
        {new Date(session.createdAt).toLocaleString()}
            </Panel.Body>
          </Panel>
        </Col>
      </Row>
  );
};

Session.propTypes = {
  session: PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    createdAt: PropTypes.string.isRequired,
  }).isRequired,
};


export default Session;

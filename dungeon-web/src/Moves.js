import React from 'react';
import {
  Panel, ListGroup, ListGroupItem, Tabs, Tab,
} from 'react-bootstrap';
import Masonry from 'react-masonry-component';
import MovesData from './Moves.json';
import './Moves.css';

const masonryOptions = {
  transitionDuration: 0,
};

const basicMoves = Object.values(MovesData['Basic Moves']).map((m, index) => {
  let [top, list, bottom] = m;
  if (list) {
    list = list.map(item => <ListGroupItem>{item}</ListGroupItem>);
  }

  return (
    <MovesPanel
      heading={Object.keys(MovesData['Basic Moves'])[index]}
      top={top}
      list={list}
      bottom={bottom}
      key={index}
    />
  );
});

const specialMoves = Object.values(MovesData['Special Moves']).map((m, index) => {
  let [top, list, bottom] = m;
  if (list) {
    list = list.map(item => <ListGroupItem>{item}</ListGroupItem>);
  }

  return (
    <MovesPanel
      heading={Object.keys(MovesData['Special Moves'])[index]}
      top={top}
      list={list}
      bottom={bottom}
      key={index}
    />
  );
});

function MovesPanel(props) {
  const {
    heading, top, list, bottom,
  } = props;
  return (
    <Panel>
      <Panel.Heading>{heading}</Panel.Heading>
      <Panel.Body>{top}</Panel.Body>
      {list
         && (
         <ListGroup>
           {list}
         </ListGroup>
         )
      }
      {bottom
         && (
         <Panel.Body>
           {bottom}
         </Panel.Body>
         )
      }
    </Panel>
  );
}

const Moves = () => (
  <div className="moves container">
    <Tabs defaultActiveKey={1}>
      <Tab eventKey={1} title="Basic Moves">
        <Masonry options={masonryOptions}>
          {basicMoves}
        </Masonry>
      </Tab>
      <Tab eventKey={2} title="Special Moves">
        <Masonry options={masonryOptions}>
          {specialMoves}
        </Masonry>
      </Tab>
    </Tabs>
  </div>
);

export default Moves;

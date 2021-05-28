import React from 'react';
import PropTypes from 'prop-types';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './RepertoireAccordian.css'

const RepertoireAccordian = (props) => {

  const renderComposerRow = (val, idx) => {
    return (
      <div key={idx} className="composerRow">
        <strong>{val.composer}</strong>
        {val.pieces.map((piece, idx1) => {
          return (
            <div key={idx1} className="piece">
              {piece}
            </div>
          )
        })}
      </div>
    );
  }

  return (
    <Accordion defaultActiveKey="1"
      className="repertoireAccordian">
      <Card>
        <Card.Header className="repertoireHeader">
          <Accordion.Toggle as={Button} 
            variant="link" 
            eventKey="0"
            className="repertoireToggle">
            {props.title}
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <Card.Body>
            {props.data.map((val, idx) => renderComposerRow(val, idx))}
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
}

RepertoireAccordian.propTypes = {
  title: PropTypes.string,
  data: PropTypes.array
}

export default RepertoireAccordian;
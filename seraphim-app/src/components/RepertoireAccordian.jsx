import React from 'react';
import PropTypes from 'prop-types';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './RepertoireAccordian.css'

const RepertoireAccordian = (props) => {
  return (
    <Accordion defaultActiveKey="1"
      className="repertoireAccordian">
      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} 
            variant="link" 
            eventKey="0"
            className="repertoireToggle">
            {props.title}
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <Card.Body>
            <div>Hello! I'm the body</div>
            <div>Hello! I'm the body</div>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
}

RepertoireAccordian.propTypes = {
  title: PropTypes.string
}

export default RepertoireAccordian;
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Accordion from 'react-bootstrap/Accordion';

import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import Card from 'react-bootstrap/Card';

function CustomToggle({ children, eventKey }) {
    const decoratedOnClick = useAccordionButton(eventKey, () =>
        console.log('totally custom!'),
    );

    return (
        <button
            type="button"
            style={{ backgroundColor: 'none' }}
            onClick={decoratedOnClick}
        >
            {children}
        </button>
    );
}


function Message(props) {

    return (
        <div className=' flex flex-col  rounded-lg border-4 p-2 my-4'>
            <Accordion defaultActiveKey="0">
                <Card>
                    <h2 className=' text-black font-bold text-lg'>Sender: {props.sender}, {props.stime}</h2>
                    <Card.Header>
                        <CustomToggle eventKey={props.id}>Theme: {props.title}</CustomToggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey={props.id}>
                        <Card.Body> Message: {props.content}</Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        </div>
    );
};

export default Message;
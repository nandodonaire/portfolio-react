import React from 'react';
import {ButtonToolbar, Button} from 'react-bootstrap';

const Resume = () => (
    <div className="Resume">
        <h2 className="section-title" style={{color: 'white'}}>Resume</h2>
        <div style={{display: "inline-flex", flexDirection: 'row', justifyContent: 'center'}}>
            <ButtonToolbar>
                <Button bsStyle="info">View Resume</Button>
                <Button bsStyle="info">Download Resume</Button>
            </ButtonToolbar>
        </div>
    </div>
)

export default Resume;
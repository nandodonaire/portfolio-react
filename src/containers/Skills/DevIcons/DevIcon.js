import React from 'react';
import {Col} from 'react-bootstrap';

const DevIcon = (props) => (
    <Col xs={3} md={3} style={{marginBottom: '25px'}}>
        <i className={props.type} style={{fontSize: '100px'}}></i>
    </Col>
)

export default DevIcon;
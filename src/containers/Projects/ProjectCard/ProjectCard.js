import React from 'react';
import {Col} from 'react-bootstrap';

const ProjectCard = (props) => (
    <div>
        <Col xs={6} md={6}>
            <article style={{border: "1px solid #eee"}}>
                <h3>{props.title}</h3>
                <article>
                    <img src={props.image} style={{width: '95%', height: '95%'}} alt="project screenshot"></img>
                    <p style={{fontSize: "12px", width: "95%", textAlign: "left", margin: "7px auto"}}>{props.description}</p>
                </article>
            </article>
        </Col>
    </div>
)

export default ProjectCard;
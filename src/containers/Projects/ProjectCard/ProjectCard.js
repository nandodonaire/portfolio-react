import React from 'react';
import {Col} from 'react-bootstrap';

const ProjectCard = (props) => (
    <div>
        <Col xs={6} md={6}>
            <article style={{border: "1px solid #eee"}}>
                <h3>Project Class</h3>
                <article>
                    <img src="https://i.imgur.com/PbwlGk3.png" style={{width: '95%', height: '95%'}}></img>
                    <p style={{fontSize: "12px", width: "95%", textAlign: "left", margin: "7px auto"}}>This was my first team project at General Assembly which I worked on as part of a 4 developer team. We built a full-stack data storage application (similar to Dropbox) which allows users to store files on an Amazon S3 bucket. Frontend was built using JavaScript, JQuery, Bootstrap, Handlebars, and Ajax. Backend API was built using Express, Node.js, Mongoose, and AWS.
                        <br /><br />
                    This was probably my favorite project that I worked on during my time at GA. While working on this project I learned a great deal about how to work with a team of developers, how to ensure that we are all on the same page, how to keep our focus on our end goal, and how to pair-program.</p>
                </article>
            </article>
        </Col>
    </div>
)

export default ProjectCard;
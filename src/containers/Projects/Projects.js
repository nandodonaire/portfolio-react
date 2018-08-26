import React, {Component} from 'react';
import {Grid, Row} from 'react-bootstrap';
import ProjectCard from './ProjectCard/ProjectCard';

class Projects extends Component {
    render () {
        return (
            <div className="section-title">
                <h2>Projects</h2>
                <Grid>
                    <Row>
                        <ProjectCard />
                    </Row>
                </Grid>
            </div>
        )
    }
}

export default Projects;
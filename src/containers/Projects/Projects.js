import React, {Component} from 'react';
import {Grid, Row} from 'react-bootstrap';
import ProjectCarousel from './ProjectCarousel/ProjectCarousel'
// import ProjectCard from './ProjectCard/ProjectCard';

class Projects extends Component {
    state = {
        projects: [
            {
                title: "BitStash",
                image: "https://i.imgur.com/PbwlGk3.png",
                description: "This was my first team project at General Assembly which I worked on as part of a 4 developer team. We built a full-stack data storage application (similar to Dropbox) which allows users to store files on an Amazon S3 bucket. Frontend was built using JavaScript, JQuery, Bootstrap, Handlebars, and Ajax. Backend API was built using Express, Node.js, Mongoose, and AWS.",
                open: false
            },
            {
                title: "BrewJournal",
                image: "https://i.imgur.com/6emMNnq.png",
                description: "A full-stack web application that allows users to keep track of visits to breweries, the beers sampled at each brewery, as well notes about their visit. I built the frontend client using Ember.js and the API was built using Ruby on Rails.",
                open: false
            },
            {
                title: "Tic Tac Toe",
                image: "https://i.imgur.com/SnTpSoQ.png",
                description: "This was my very first coding project. I built a browser-based Tic Tac Toe game using JavaScript, JQuery, Bootstrap, and Ajax to make requests to a pre-built API. The most challenging parts of this project for me were figuring out the game logic (determining a winner) and how to display data (an X or an O) in the grid after clicking on each square.",
                open: false
            },
            {
                title: "WatchNext",
                image: "https://i.imgur.com/qjFYs8r.png",
                description: "This was my first full-stack application. I built an app for keeping track of TV shows and movies that users are interested in seeing in the future as well as where they can see them. I built the frontend (client) using JavaScript, JQuery, Bootstrap, Handlebars, and Ajax and the backend API was built using Ruby on Rails.",
                open: false
            }
        ]
    }
    render () {
        // let projects = this.state.projects.map((project, index) => {
        //     return <ProjectCard key={index} title={project.title} image={project.image} description={project.description} />
        // })
        return (
            <div>
                <h2 className="section-title">Projects</h2>
                <Grid>
                    <Row>
                        <ProjectCarousel />
                    </Row>
                </Grid>
            </div>
        )
    }
}

export default Projects;
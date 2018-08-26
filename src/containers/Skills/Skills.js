import React, {Component} from 'react';
import {Grid, Row} from "react-bootstrap";
import DevIcon from './DevIcons/DevIcon'

class Skills extends Component {
    state = {
        icons: [
            "devicon-javascript-plain colored",
            "devicon-react-original-wordmark colored",
            "devicon-php-plain colored",
            "devicon-jquery-plain-wordmark colored",
            "devicon-ruby-plain-wordmark colored",
            "devicon-rails-plain-wordmark colored",
            "devicon-angularjs-plain-wordmark colored",
            "devicon-nodejs-plain-wordmark colored",
            "devicon-html5-plain-wordmark colored",
            "devicon-css3-plain-wordmark colored",
            "devicon-mysql-plain-wordmark colored",
            "devicon-postgresql-plain-wordmark colored"
        ]
    }
    render() {
        const devIcons = this.state.icons.map((icon, index) => {
            return <DevIcon key={index} type={icon} />
        })
        return (
            <div style={{height: "630px", backgroundColor: '#202020'}}>
                <h2 style={{fontFamily: "'Ubuntu', sans-serif", color: 'white', margin: '0 auto', paddingTop: '30px', paddingBottom: '15px'}}>Skills</h2>
                <Grid>
                    <Row>
                        {devIcons}
                    </Row>
                </Grid>
            </div>
        )
    }
}

export default Skills;
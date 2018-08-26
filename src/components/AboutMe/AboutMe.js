import React from 'react';

const AboutMe = () => (
    <div id='about-me' style={{height: '400px', backgroundColor: '#e0e0e0'}}>
        <h2 style={{fontFamily: "'Ubuntu', sans-serif", margin: '0 auto', paddingTop: '30px', paddingBottom: '20px'}}>About Me</h2>
        <div style={{width: '600px', display: 'inline-flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
            <p style={{paddingRight: '30px', textAlign: 'left'}}>
                Hello there! My name is Fernando Donaire and I'm a Full-Stack Software Developer currently working at Boston Children's Hospital's Innovation and Digital Health Accelerator. 
                <br /> <br />
                Prior to working at Children's Hospital, I did a 12 week full time Web Development Immersive course at General Assembly Boston.
                <br /><br />
                 I love coding because it's the perfect combination of creativity and problem solving. To me, there are few things more exciting than working hard on a project and seeing it come together.
            </p>
            <img src='https://i.imgur.com/dlJwMkl.jpg' alt="Nando" style={{width: '40%', height: '40%', borderRadius: '200px'}}/>
        </div>
    </div>
)

export default AboutMe;
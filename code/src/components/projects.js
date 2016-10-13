import React, { Component } from 'react';
import Card from './common/card'
import Grid from './common/grid'

/*
focused on Urban Mobility and Geographical Information Systems
*/

const projects = [{
    title: 'One Stop Transport',
    link: 'https://ost.pt',
    image: '/img/ost-logo.png',
    content: <p>
      For four years I worked on the OST (a GIS platform focused on urban mobility and open data) as the lead <span className="skill">Python</span>/<span className="skill">Django</span> developer, along with a friendly hard working team, with exciting technologies (<span className="skill">PostgreSQL</span>, <span className="skill">Redis</span>, <span className="skill">RabbitMQ</span>) which helped me improve my skills further. During this time, I got acquainted with both Scrum and Kanban software development methodologies.
    </p>
  },{
    title: 'Science Matters',
    link: 'https://sciencematters.io',
    image: '/img/matters-logo.png',
    content: <p>
      In 2016 I embraced a new challenge at Science Matters, a startup that aims to create a collaborative science publishing platform and disrupt the academic publication industry via nano-publication and open access. During this time, I got acquainted with several Javascript frameworks and <span className="skill">MongoDB</span>.
    </p>
  }
]


class Projects extends Component {
  render() {
    return (
      <div id="projects">
        <Grid columns='s12 m4'>
          {
            projects.map((each, index) => {
              return <Card key={index} image={each.image} title={each.title} link={each.link}>
                {each.content}
              </Card>
            })
          }
        </Grid>
      </div>
    );
  }
}

export default Projects;

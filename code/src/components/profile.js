import React, { Component } from 'react';
import Avatar from './common/avatar';
import Icon from './common/icon';
import MiniLogo from './common/minilogo';

class Profile extends Component {
  render() {
    return (
      <div id='profile'>
        <Avatar gravatar="diogo.laginha.machado@gmail.com"/>
        <div id='contacts'>
          <a href="http://twitter.diogolaginha.com">
            <MiniLogo image="/img/twitter-logo.png" style={{marginBottom: '10px'}}/>
          </a>
          <a href="https://github.com/laginha">
            <MiniLogo image="/img/github-logo.png"/>
          </a>
          <a href="mailto:diogo.laginha.machado@gmail.com">
            <MiniLogo image="/img/gmail-logo.png" style={{marginBottom: '10px'}} />
          </a>
        </div>
        <h4 id='name'> Diogo Laginha </h4>
        <div>
          <Icon name='place' text='Coimbra, Portugal'/>
          <Icon name='work' text='Fullstack developer'/>
        </div>
      </div>
    );
  }
}

export default Profile;

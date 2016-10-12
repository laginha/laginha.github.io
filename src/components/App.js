import React, { Component } from 'react';
import Profile from './profile'
import About from './about'
import Projects from './projects'
import Tags from './tags'
import Footer from './footer'

class App extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <Profile/>
          <About/>
          <Tags/>
          <Projects/>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default App;

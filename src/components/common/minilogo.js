import React, { Component } from 'react';

class MiniLogo extends Component {
  render() {
    return (
      <img height='42' width='42' className='mini-logo' style={this.props.style} src={this.props.image}/>
    );
  }
}

export default MiniLogo;

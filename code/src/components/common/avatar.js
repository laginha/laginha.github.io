import React, { Component } from 'react';
import Gravatar from 'react-gravatar';

class Avatar extends Component {
  render() {
    return (
      <Gravatar className="responsive-img circle gravatar" size={175} email={this.props.gravatar} />
    );
  }
}

export default Avatar;

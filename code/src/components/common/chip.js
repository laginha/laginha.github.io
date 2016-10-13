import React, { Component } from 'react';

class Chip extends Component {
  render() {
    return (
      <div className="chip"> {this.props.label} </div>
    );
  }
}

export default Chip;

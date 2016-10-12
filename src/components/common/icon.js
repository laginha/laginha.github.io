import React, { Component } from 'react';

class Icon extends Component {
  render() {
    return (
      <span style={{padding: '0.5rem'}}>
        <i className="material-icons tiny"> {this.props.name} </i> {this.props.text}
      </span>
    );
  }
}

export default Icon;

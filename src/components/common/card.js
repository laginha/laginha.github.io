import React, { Component } from 'react';

class Card extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-image waves-effect waves-block waves-light">
          <img className="activator" src={this.props.image}/>
        </div>
        <div className="card-content">
          <span className="card-title activator grey-text text-darken-4">
            {this.props.title} <i className="material-icons right">more_vert</i>
          </span>
          <p>
            <a href={this.props.link}> Link to this project </a>
          </p>
        </div>
        <div className="card-reveal">
          <span className="card-title grey-text text-darken-4">
            {this.props.title} <i className="material-icons right">close</i>
          </span>
          <p> {this.props.children} </p>
        </div>
      </div>
    );
  }
}

export default Card;

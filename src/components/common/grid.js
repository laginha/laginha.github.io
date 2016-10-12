import React, { Component } from 'react';

class Grid extends Component {
  render() {
    let classname = "col "+this.props.columns;
    return (
      <div className="row">
        {
          this.props.children.map((each)=>{
            return <div className={classname}>
              {each}
            </div>
          })
        }
        
      </div>
    );
  }
}

export default Grid;

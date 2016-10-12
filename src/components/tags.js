import React, { Component } from 'react';
import Chip from './common/chip';

const tags = [
  'Python', 'Django', 'React',
  'PosgreSQL', 'MongoDB', 'Redis'
]

class Tags extends Component {
  render() {
    return (
      <p>
        {
          tags.map((each, index) => {
            return <Chip key={index} label={each}/>
          })
        }
      </p>
    );
  }
}

export default Tags;

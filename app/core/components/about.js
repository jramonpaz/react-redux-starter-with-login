import React, { PropTypes } from 'react';

class About extends React.Component {
  render() {
    return (
      <div>
       Description
      </div>
    );
  }
}

About.propTypes = {
  children: PropTypes.element
};

export default About;

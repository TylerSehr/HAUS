import React, { Component } from 'react';
import { connect } from 'react-redux';

import Nav from '../../components/Nav/Nav';



const mapStateToProps = state => ({
  user: state.user,
});

class InfoSheet extends Component {
  componentDidMount() {
  }

  componentDidUpdate() {

  }



  render() {

    content = (
        
    )


    return (
      <div>
        <Nav />
        { content }
      </div>
    );
  }
}

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(UserPage);


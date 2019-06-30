import React, { Component } from 'react';
import { connect } from 'react-redux';




const mapStateToProps = state => ({
  user: state.user,
});

class InfoSheet extends Component {
  componentDidMount() {
  }

  componentDidUpdate() {

  }



  render() {



    return (
      <div className="infosheet">
        {this.props.card}
      </div>
    );
  }
}

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(InfoSheet);


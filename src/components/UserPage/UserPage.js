import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios'

import Nav from '../../components/Nav/Nav';
import NavDrawer from '../Nav/NavDrawer'
import SwipeDeck from './SwipeDeck'

const mapStateToProps = state => ({
  listings: state.listings || '',
  settings: state.settings,
  user: state.user
});

class UserPage extends Component {
  constructor(props) {
    super(props)

  }

  componentDidMount = () => {
    console.log('hi');

    axios.post('/api/settings/get', this.props.user)
      .then((response) => {
        console.log('got settings', response);
        this.props.dispatch({ type: 'GET_SETTINGS', payload: response.data })
      })
      .catch(error => {
        console.log(error);
      })
  }

  componentDidUpdate = () => {
    if (!this.props.user.isLoading && this.props.user.userName === null) {
      this.props.history.push('home');
    }
    if (this.props.listings == 1) {
      this.props.dispatch({ type: 'GET_LISTINGS', payload: this.props.settings });
    }

  }



  render() {
    let content = null;

    if (this.props.user.userName) {
      content = (
        <div>
          <SwipeDeck />
        </div>
      );
    }

    return (
      <div>
        <Nav />
        {/* <NavDrawer /> */}
        {content}
      </div>
    );
  }
}

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(UserPage);


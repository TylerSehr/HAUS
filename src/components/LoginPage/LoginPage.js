import React, { Component } from 'react';
import FacebookLoginButton from '../LoginButton/FacebookLoginButton';
import { connect } from 'react-redux';
import axios from 'axios'

const mapStateToProps = state => ({
  user: state.user,
});

class LoginPage extends Component {

  state = {
    username: '',
    id: ''
  };

  onFacebookLogin = (loginStatus, resultObject) => {
    if (loginStatus === true) {
      this.setState({
        username: resultObject.user.name,
        id: resultObject.user.id
      })
      const body = {
        username: resultObject.user.name,
        password: resultObject.user.id
      };
      axios.post('/api/user/register/', body)
    } else {
      alert('Facebook login error');
    }
  }

  render() {
    const { username } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">React Social Media Login</h1>
        </header>

        <div className="App-intro">
          { !username &&
            <div>
              <p>Click on one of any button below to login</p>
              <FacebookLoginButton onLogin={this.onFacebookLogin}>
                <button>Facebook</button>
              </FacebookLoginButton>
            </div>
          }
          {username &&
            <p>Welcome back, {username}</p>
          }
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(LoginPage);
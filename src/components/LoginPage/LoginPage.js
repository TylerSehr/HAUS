import React, { Component } from 'react';
import FacebookLoginButton from '../LoginButton/FacebookLoginButton';
import { USER_ACTIONS } from '../../redux/actions/userActions';
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
    console.log(resultObject);
    
    if (loginStatus === true) {
      this.setState({
        username: resultObject.user.name,
        id: resultObject.user.id
      })
      const body = {
        username: resultObject.user.name,
        password: resultObject.user.id
      };
      this.props.dispatch({ type: 'SET_USER', payload: this.state});
      axios.post('/api/user/register/', body)
      .then((response)=>{
        console.log(response);
        window.location.href = '/#/user'
      })
    } else {
      console.log('there was a login error');
      
    }
  }


  componentDidUpdate(){
    if(this.state.username){
      window.location.href = '/#/user'
    }
  }

  render() {
    const { username } = this.state;
    console.log(this.props.user);
    
    return (
      <div className="App" >

        <div className="App-intro">
          { !username &&
            <div>
              <FacebookLoginButton onLogin={this.onFacebookLogin}>
                <button>Login With Facebook</button>
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
import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios'

import Nav from '../../components/Nav/Nav';


const mapStateToProps = state => ({
    listings: state.listings || '',
    settings: state.settings,
    user: state.user
});

class UserPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            region: '',
            roommating: true,
            max_price: '',
            email_message: ''
        }
    }

    componentDidMount = () => {
        const s = this.props.settings
        this.setState({
            region: s.region,
            max_price: s.max_price,
            email_message: s.email_message
        })
    }

    handleInputFor = (event) => {
        event.preventDefault();
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    submitSettings = (event) => {
        event.preventDefault();
        const data = {
            ...this.state,
            id: this.props.user.id
        }
        axios.post('/api/settings/update', data)
            .then(response => {
                alert('settings saved!')
            })
            .catch(error=>{
                console.log(error);
            })
    }


    render() {

        return (
            <div>
                <Nav />
                <form className="settings">
                    <input name="region"
                        type="text"
                        value={this.state.region}
                        placeholder="region"
                        onChange={this.handleInputFor} />
                    <input name="max_price"
                        type="number"
                        value={this.state.max_price}
                        placeholder="max_price"
                        onChange={this.handleInputFor} />
                    <input name="email_message"
                        type="text"
                        value={this.state.email_message}
                        placeholder="email_message"
                        onChange={this.handleInputFor} />
                    <input name="submit"
                        type="submit"
                        onClick={this.submitSettings} />
                </form>
            </div>
        );
    }
}

export default connect(mapStateToProps)(UserPage);


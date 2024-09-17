import axios from 'axios';
import React, { Component } from 'react'

export default class Login extends Component {
    state = {
        credentials: {
            username: "Lambda School",
            password: 'i<3Lambd4'
        }
    };

    handleChange = e => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.value]: e.target.value
            }
        });
    };

    login = e => {
        e.preventDefault();
        axios.post('http://localhost:5000/api/login', this.state.credentials)
            .then(res => {
                localStorage.setItem("token", res.data.payload);
                this.props.history.push('/friends')
            })
            .catch(err => {
                console.log(err);
            });
    };
    render() {
        return (
            <div>
                <form onSubmit={this.login}>
                    <label htmlFor="username">Username</label>
                    <input
                        id="username"
                        type="text"
                        name="username"
                        value={this.state.credentials.username}
                        onChange={this.handleChange}
                        placeholder="Enter Username"
                    />
                    
                    <label>Password</label>
                    <input
                        type="password"
                        name="password"
                        value={this.state.credentials.password}
                        onChange={this.handleChange}
                        placeholder="Enter Password"
                    />
                    <button>Log in</button>
                </form>
            </div>
        )
    }
}

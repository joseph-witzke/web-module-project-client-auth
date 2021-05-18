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
                //Add push to URL
            })
            .catch(err => {
                console.log(err);
            });
    };
    render() {
        return (
            <div>
                <form onSubmit={this.login}>
                    <label>
                        <input
                            type="text"
                            name="username"
                            value={this.state.credentials.username}
                            onChange={this.handleChange}
                            placeholder="Enter Username"
                        />
                    </label>
                    <label>
                        <input
                            type="password"
                            name="password"
                            value={this.state.credentials.password}
                            onChange={this.handleChange}
                            placeholder="Enter Password"
                        />
                    </label>
                    <button>Log in</button>
                </form>
            </div>
        )
    }
}

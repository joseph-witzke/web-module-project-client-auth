import axios from 'axios';
import React, { Component } from 'react'
import Friend from './Friend';

export default class FriendsList extends Component {
    state = {
        friendsList: []
    };

    componentDidMount() {
        this.getFriends();
    }

    getFriends = () => {
        axios.get('http://localhost:5000/api/friends', {
            headers: {
                authorization: localStorage.getItem('token')
            }
        })
            .then(res => {
                console.log(res)
                this.setState({
                    ...this.state,
                    friendsList: res.data
                })
            })
            .catch(err => {
                console.log(err)
            });
    };
    render() {
        return (
            <div>
                <h3>Friends List</h3>
                <p>{this.state.friendsList.name}</p>
            </div>
        )
    }
}

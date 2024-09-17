import React, { useState } from 'react'
import { useHistory } from 'react-router'
import { axiosWithAuth } from '../utils/axiosWithAuth'

const initialValues = {
    name: '',
    age: '',
    email: '',
}

function AddFriendForm() {
    const [formValues, setFormValues] = useState(initialValues)
    const { push } = useHistory();
    
    const handleChange = (e) => {
        setFormValues({...formValues, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axiosWithAuth()
            .post('/api/friends', formValues)
            .then((res) => {
                push('/friends');
            })
            .catch((err) => console.log(err));
    };
    return (
        <div>
            <h3>Add New Friend</h3>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" value={formValues.name} onChange={handleChange}/>

                <label htmlFor="age">Age</label>
                <input type="text" name="age" id="age" value={formValues.age} onChange={handleChange}/>

                <label htmlFor="email">Email</label>
                <input type="text" name="email" id="email" value={formValues.email} onChange={handleChange}/>
                <button>Add</button>
            </form>
        </div>
    )
}

export default AddFriendForm

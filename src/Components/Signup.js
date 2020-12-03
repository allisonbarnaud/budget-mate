import React, { Component } from 'react'
const axios = require('axios')

class Signup extends Component {
    state = {
        email: '',
        password: '',
        username: ''
    }

    handleInputChange = (event) => {
        const { value, name } = event.target;
        this.setState({
            [name]: value
        });
        console.log(value)
    }

    onSubmit = (event) => {
        event.preventDefault();
        axios.post('/new_user', {
            body: this.state
        })
        .then(res => {
          if (res.status === 200) {
            console.log(res)
          }
        })
        .catch(err => {
          console.error(err);
          alert('Error adding new transaction');
        });
    }


    render () {
        return (
            <div>
                <h1>Budget-Mate</h1>
                <form onSubmit = {this.onSubmit}>
                    <input 
                        type="email"
                        name="email" 
                        onChange={this.handleInputChange} 
                        value={this.state.email}
                        placeholder="e-mail" 
                        required
                    />
                    <input 
                        type="password"
                        name="password"
                        onChange={this.handleInputChange}
                        value={this.state.password} 
                        placeholder="password" 
                        required
                    />
                    <input 
                        type="text"
                        name="username"
                        onChange={this.handleInputChange}
                        value={this.state.username}
                        placeholder="username" 
                        required
                    />
                    <input 
                        type="submit" 
                        value="Sign-up"
                    />
                </form>
            </div>
        )
    }

}

export default Signup
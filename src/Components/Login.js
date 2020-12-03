import React, { Component } from 'react'

class Login extends Component {
    state = {
        email: '',
        password: ''
    }

    handleInputChange = (event) => {
        const { value } = event.target;
        this.setState({
            email: value[value],
            password: value[value]
        });
        console.log(value)
    }

    onSubmit = () => {
        
    }


    render () {
        return (
            <div>
                <h1>Budget-Mate</h1>
                <form onSubmit = {this.onSubmit}>
                    <input 
                        type="email" 
                        onChange={this.handleInputChange} 
                        value={this.state.email}
                        placeholder="e-mail" 
                        required
                        
                    />
                    <input 
                        type="password" 
                        placeholder="password" 
                        required
                    />
                    <input 
                        type="submit" 
                        value="Login"
                    />
                </form>
            </div>
        )
    }

}

export default Login
import React, { Component } from 'react'

class Profile extends Component {
    state = {

    }



    render () {

        return (
            <div>
                <h1>My user Profile</h1>
                
                <h2>username: </h2>
                <button>Change username</button>
                <h2>email: </h2>
                <button>Change email</button>
                <h2>password: </h2>
                <button>Change password</button>
            </div>





        )
    }

}

export default Profile
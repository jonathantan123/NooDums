
import React from 'react';

class Login extends React.Component {


   input =  React.createRef()

    state = { 
        username: "", 
        password: ""
    }

    changeHandler = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    
    }

    // on submit fetch and find/set the id of the current user 

    submitHandler=(e) => {
        e.preventDefault() 
        fetch(`http://localhost:3000/login`, {
            method: "POST", 
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                    email_address: this.state.username, 
                    password: this.state.password
                })
        })
            .then(resp => resp.json())
            .then(data => {

                if(data.errors) {
                    alert("Incorrect Username/password")
                } else {
                    // this.props.setUserId(data.id)
                }
               
            })
         
    }

    render() {
        return (
               <div className="form-div">
                <form onSubmit={this.submitHandler} class="ui medium form">
                                <div class="ui stacked segment">
                                        <div class="field">
                                            <label>Email Address</label>
                                            <input type="text" onChange={this.changeHandler} placeholder="Email Address" name="username"></input>
                                        </div>
                                        <div class="field">
                                            <label>Password</label>
                                            <input type="password" onChange={this.changeHandler} placeholder="password" name="password"></input>
                                        </div>
                                        <button class="ui fluid large grey submit button" type="submit"> Login</button>
                            
                                </div>
                    </form>
                    </div>
        )
    }
}

export default Login


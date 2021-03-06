
import React from 'react';
import { Form, Input, Select, Divider, Grid, Image} from 'semantic-ui-react'
import {connect} from "react-redux"
import { Redirect} from 'react-router-dom'



class SignUp extends React.Component {

    state = { 
        first_name: "", 
        last_name:  "", 
        phone_number: "",
        email_address: "", 
        confirm_email_address: "",
        confirm_password: "",
        password: "", 
        phone_number: ""
    }

     emailIsValid (email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
      }

      phoneIsValid(number) {
          return /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(number)
      }

      
    changeHandler = (e) => {
        this.setState({
            [e.target.id] : e.target.value
        }) 
    }
  

    submitHandler=(e) => {
        e.preventDefault()
        debugger

    if (this.state.email_address === this.state.confirm_email_address 
        && this.state.password === this.state.confirm_password 
        && this.emailIsValid(this.state.email_address) 
        && this.phoneIsValid(this.state.phone_number))
     {
        fetch(`http://localhost:3000/api/v1/users`, {
            method: "POST", 
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                    email_address: this.state.email_address, 
                    password: this.state.password,
                    first_name: this.state.first_name,
                    last_name: this.state.last_name, 
                    password: this.state.password,
                    phone_number: this.state.phone_number
                })
        })
        .then(resp => resp.json())
        .then((data) => {
            debugger 
            if(data.errors) {
                alert(data.errors[0])
            } else {
                this.props.login(data.id)
            }
        })

    } else { 
        alert( "Please enter a valid email address or phone number/ ensure passwords and email adresses match ")
    }

          
    }

    render() {
        return (

            <div className="image_container">

                <Image style={{position: "absolute"}} src="https://images.unsplash.com/photo-1563245372-f21724e3856d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1429&q=80" fluid />

                <div className="form_container ">
                <Form onSubmit={this.submitHandler}>
                <Form.Group widths='equal'>
                
                <Form.Field
                    id="first_name"
                    control={Input}
                    onChange={this.changeHandler}
                    label='First Name'
                    placeholder='First name'
                />
                <Form.Field
                    id='last_name'
                    control={Input}
                    onChange={this.changeHandler}
                    label='Last Name'
                    placeholder='Last Name'
                />
                </Form.Group>

                    <Form.Field
                    id='phone_number'
                    control={Input}
                    label='Phone Number'
                    placeholder='Phone Number'
                    onChange={this.changeHandler}

                />

                    <Form.Field
                    id='email_address'
                    control={Input}
                    onChange={this.changeHandler}
                    label='Email Address'
                    
                    placeholder='Email Address'
                />

                <Form.Field
                    id='confirm_email_address'
                    control={Input}
                    onChange={this.changeHandler}
                    label='Confirm Email Address'
                    placeholder='Confirm Email Address'
                />

                    <Form.Field
                    id='password'
                    control={Input}
                    onChange={this.changeHandler}
                    label='Password'
                    type='password'
                    placeholder='Password'
                />

                <Form.Field
                    id='confirm_password'
                    control={Input}
                    type='password'
                    onChange={this.changeHandler}
                    label='Confirm Password'
                    placeholder='Confirm Password '
                />
                <Divider/>
                <Divider/>
                
                <Form.Group widths='equal'>
                
                </Form.Group>
                <Grid>
                    <Grid.Row centered>
                    <Form.Button >Sign Me Up </Form.Button>
                    </Grid.Row>
                </Grid>
                </Form>

                {this.props.user_id !== 1 ?
                    <React.Fragment>
                        <Redirect to="/profile"/>
                    </React.Fragment>
                    :
                    null 
                    }

                </div>

          </div>

 
        )
    }
}


function mapStateToProps(state) {
    return { 
        user_id: state.user_id
    }
}

function mapDispatchToProps(dispatch) {  
    return { login: (id)=> {
        dispatch({type: "LOGIN", payload: id })
     }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
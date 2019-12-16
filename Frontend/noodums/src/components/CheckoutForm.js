import React from 'react';
import { connect } from 'react-redux'
import { Form, Input, Select } from 'semantic-ui-react'
import PaymentForm from './CreditCardForm';






class CheckoutForm extends React.Component{
    

    submitHandler= () => {
        
        console.log("working")
         fetch(`http://localhost:3000/api/v1/order_items`, {
            method: "POST", 
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user_id: this.props.user_id,
                array: this.props.cart
            })
                
        })
    }

    render() {
        return(
            <Form onSubmit={this.submitHandler}>
            <Form.Group widths='equal'>
            
              <Form.Field
                id="order name"
                control={Input}
                label='First name'
                placeholder='First name'
              />
              <Form.Field
                id='email_address'
                control={Input}
                label='Email address'
                placeholder='Email address'
              />
                <Form.Field
                id='phone number'
                control={Input}
                label='Phone number'
                placeholder='Phone number'
              />
            </Form.Group>

            <Form.Group widths='equal'>
            
              <Form.Field
                id="order name"
                control={Input}
                label='First name'
                placeholder='First name'
              />
              <Form.Field
                id='form-input-control-last-name'
                control={Input}
                label='Last name'
                placeholder='Last name'
              />
            </Form.Group>

            <Form.Group widths='equal'>
            
              <Form.Field
                id="order name"
                control={Input}
                label='First name'
                placeholder='First name'
              />
              <Form.Field
                id='form-input-control-last-name'
                control={Input}
                label='Last name'
                placeholder='Last name'
              />
            </Form.Group>

            <Form.Group widths='equal'>
                <PaymentForm/>
            </Form.Group>
            <Form.Button>Go</Form.Button>
            </Form>
        )
    }

    




}


function msp(state) {
    return (
        {
            cart: state.cart, 
            user_id: state.user_id
        }
    )
}


export default connect(msp)(CheckoutForm)
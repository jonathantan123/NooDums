import React from 'react';
import { connect } from 'react-redux'
import { Form, Input, Select, Divider, Grid } from 'semantic-ui-react'
import PaymentForm from './PaymentForm';


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
          <div className="form_container">
            <Form onSubmit={this.submitHandler}>
            <Form.Group widths='equal'>
            
              <Form.Field
                id="first name"
                control={Input}
                label='First Name'
                placeholder='First name'
              />
              <Form.Field
                id='last name'
                control={Input}
                label='Last Name'
                placeholder='Last Name'
              />
              </Form.Group>

                <Form.Field
                id='phone number'
                control={Input}
                label='Phone Number'
                placeholder='Phone Number'
              />

                <Form.Field
                id='email address'
                control={Input}
                label='Email Address'
                placeholder='Email Address'
              />
              <Divider/>
              <h2>Payment</h2>
              <Divider/>

            <Form.Group widths='equal'>
                <PaymentForm />
            </Form.Group>
              <Grid>
                <Grid.Row centered>
                <Form.Button >Make me Dumplings</Form.Button>
                </Grid.Row>
              </Grid>
            </Form>
          </div>
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
import React from 'react';
import { connect } from 'react-redux'
import { Form, Input,Divider, Grid, Header } from 'semantic-ui-react'
import { compose } from 'redux'
import  {injectStripe} from 'react-stripe-elements';


class CheckoutForm extends React.Component{

  handleInputFocus = (e) => {
    this.setState({ focus: e.target.name });
  }
  
  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }


    submitHandler= () => {

      let stripe = window.Stripe("pk_test_nN7xRtMVqkrqGYbZkpHkttjB00xj4HmkBz")
  
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

        
         fetch(`http://localhost:3000/charges`, {
            method: "POST", 
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              total: this.props.total
            })      
        })
        .then(resp => resp.json())
        .then((data) => {

          stripe.redirectToCheckout({
            sessionId: data.id
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
              <Header as='h3' textAlign='center'> Payment </Header>
              <Divider/>
             
              <Grid>
                <Grid.Row centered>
                <Form.Button >Proceed to Payment</Form.Button>
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
            user_id: state.user_id, 
            total: state.total
        }
    )
}


export default compose(
  connect(msp),
  injectStripe)(CheckoutForm)
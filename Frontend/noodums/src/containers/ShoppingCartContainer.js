import React from 'react';
import { connect } from "react-redux"
import { Item, Button } from 'semantic-ui-react'
import Order from '../components/Order';
import CheckoutForm from '../components/CheckoutForm';
import  { Link } from "react-router-dom"
import Dinero from 'dinero.js'


class ShoppingCartContainer extends React.Component {


    


    subTotal= () => {

        let subtotal = Dinero({amount: this.props.cart.reduce((sum, obj) => {
            return  sum + obj.price*(obj.quantity) 
         }, 0)  }) 


        return subtotal
      
    }

    tax =() => {
       return this.subTotal().multiply(.0875)
      }

    total = () => {
     return  this.subTotal().add((this.tax()))
    }


    renderShoppingCart =  () => {
        return(
            this.props.cart.map((order) => {
            return <Order order={order} key={order.id}/>
        })
        ) 
    } 

    componentDidUpdate(){

    }

    render() { 
 
        return (
            <div>
            <h1>Order Summary:</h1>
            <Item.Group>
                {this.renderShoppingCart()}
            </Item.Group>
        <h2>SubTotal {this.subTotal().toFormat('$0.00')}</h2>
        <h2>Tax {this.tax().toFormat('$0.00')} </h2>
        <h2>Total:{this.total().toFormat('$0.00')} </h2>
            <Button 
            as={ Link } name='checkout' to='/checkout'
            > Checkout</Button>
            </div>
        )
    }
}

function msp(state) {
    return (
        {
            cart: state.cart
        }
    )
}

export default connect(msp) (ShoppingCartContainer)
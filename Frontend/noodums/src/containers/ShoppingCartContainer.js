import React from 'react';
import { connect } from "react-redux"
import { Item, Button } from 'semantic-ui-react'
import Order from '../components/Order';
import CheckoutForm from '../components/CheckoutForm';


class ShoppingCartContainer extends React.Component {

    

    renderShoppingCart =  () => {
        return this.props.cart.map((order) => {
            return <Order order={order} key={order.id}/>
        })
    } 

    render() { 
        return (
            <div>
            <h1>Order Summary:</h1>
            <Item.Group>
                {this.renderShoppingCart()}
            </Item.Group>
            <h2>Order Total</h2>
            <h2>Tax</h2>
            <Button onClick={this.renderCheckout}> Checkout</Button>
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
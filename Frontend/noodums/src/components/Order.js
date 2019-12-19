import React from 'react';
import { Item, Image, Button } from 'semantic-ui-react'
import { connect } from 'react-redux'

class  Order  extends React.Component {

  state = {
    removed: true 
  }

   deleteFromCart = () => {
        this.props.removeFromCart(this.props.order.id)
        this.setState({
          removed: !this.state.removed
        })
   }   

   render (){
     
     return (
     
     <Item.Group>
        <Item>
          <Item.Image size='medium' src={`${this.props.order.image}`} />
          <Item.Content>
         <Item.Header> {this.props.order.name}</Item.Header>
     <Item.Meta></Item.Meta>
            <Item.Description>
              Quantity X {this.props.order.quantity}
              <br></br>
              Price ${this.props.order.price}.00
            </Item.Description>
            <Item.Extra>this</Item.Extra>
          </Item.Content>
        </Item>
        <Button onClick={this.deleteFromCart}> Remove</Button>
        </Item.Group>
        
     )  
   }
   

}



function mapDispatchToProps(dispatch) {
    return {
        removeFromCart: (id) => {
            dispatch({type: "REMOVE_FROM_CART", payload: id })
        }
    }
}



  export default connect(null, mapDispatchToProps)(Order) 
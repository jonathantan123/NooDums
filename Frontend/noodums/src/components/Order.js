import React from 'react';
import { Item, Image, Button } from 'semantic-ui-react'
import { connect } from 'react-redux'

function Order (props) {

   let deleteFromCart = () => {

        props.removeFromCart(props.order)
        
       
   }    

    return (
    
    <Item.Group>
       <Item>
         <Item.Image size='medium' src={`${props.order.image}`} />
         <Item.Content>
        <Item.Header> {props.order.name}</Item.Header>
    <Item.Meta></Item.Meta>
           <Item.Description>
             <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
           </Item.Description>
           <Item.Extra>this</Item.Extra>
         </Item.Content>
       </Item>
       <Button onClick={deleteFromCart}> Remove</Button>
       </Item.Group>
       
    )  
}



function mapDispatchToProps(dispatch) {
    return {
        removeFromCart: (item) => {
            dispatch({type: "REMOVE_FROM_CART", payload: item })
        }
    }
}



  export default connect(null, mapDispatchToProps)(Order) 
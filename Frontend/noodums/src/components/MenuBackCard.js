import React from 'react';
import { Card, Icon, Image, Button, Menu } from 'semantic-ui-react'
import { connect } from "react-redux"
import Dinero from 'dinero.js'




class  MenuBackCard extends React.Component {
    
    
    addToCart = () => {
        
        this.props.addToCart(this.props.item.id)
        this.props.clickHandler()
        
    }
    
    formatPrice = () => {
        let price = Dinero({amount: this.props.item.price})
        return price.toFormat(`$0.00`) 
    }
      
render () {

    return (
        <Card>
            <Card.Content onClick={this.props.clickHandler}>
            <Card.Header textAlign='center'>Description</Card.Header>
                <Card.Description >
                    {this.props.item.description}
                </Card.Description>
                </Card.Content>
                <Card.Content extra>
                      <Menu secondary icon>
                        <Menu.Item 
                        name='Price'
                        >
                        {this.formatPrice()}
                        </Menu.Item>

                        <Menu.Item 
                        name='shopping cart'
                        position='right'
                        >
                        < Icon onClick={this.addToCart} name='cart plus' />
                        </Menu.Item>
                      </Menu>

                 </Card.Content>
        </Card>
        )
}
  
    }

    function mapDispatchToProps(dispatch) {  
        return { 
            addToCart: (id)=> {
                dispatch({type: "ADD_TO_CART", payload: id })
            }
        }
    }

  
    

  export default connect(null,mapDispatchToProps) (MenuBackCard) 
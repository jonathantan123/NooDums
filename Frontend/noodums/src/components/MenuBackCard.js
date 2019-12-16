import React from 'react';
import { Card, Icon, Image, Button, Menu } from 'semantic-ui-react'
import { connect } from "react-redux"

class  MenuBackCard extends React.Component {


    addToCart = () => {
       this.props.addToCart(this.props.item)
       this.props.clickHandler()
       
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
                        < Icon name='dollar sign' />
                        {this.props.item.price}
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
            addToCart: (item)=> {
                dispatch({type: "ADD_TO_CART", payload: item })
            }
        }
    }

  
    

  export default connect(null,mapDispatchToProps) (MenuBackCard) 
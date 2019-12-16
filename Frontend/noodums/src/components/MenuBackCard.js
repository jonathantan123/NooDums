import React from 'react';
import { Card, Icon, Image, Button, Menu } from 'semantic-ui-react'

function MenuBackCard(props) {

    let item = props.item 

    debugger 

    let addToCart = (item) => {
        console.log(item)
        
    }

        return (
            <Card>
                <Card.Content>
                <Card.Header textAlign='center'>Description</Card.Header>
                    <Card.Description >
                        {props.item.description}
                    </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                          <Menu secondary icon>
                            <Menu.Item
                            name='shopping cart'
                            >
                            <Icon name='cart plus' />
                            </Menu.Item>
                          </Menu>
                     </Card.Content>
            </Card>

            //     <div class="content">
            //         <div class="center aligned header">Description</div>
            //         <div onClick={props.clickHandler} class="description">
            //             <p>{props.item.description}</p>
            //          </div>
            //          <button onClick={addToCart} class="center aligned ui button"> Add to Cart </button>
            //     </div>
            // </div>
           
        )

    }




  export default MenuBackCard 
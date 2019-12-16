import React from 'react';
import IndexContainer from './IndexContainer';
import Login from "../components/Login"
import SignUp from "../components/SignUp"
import Navbar from "../components/NavBar"
import MenuCardFront from '../components/MenuCardFront';
import MenuContainer from './MenuContainer';
import { connect } from 'react-redux'
import ShoppingCartContainerJS from './ShoppingCartContainer';
import Order from '../components/Order';
import CheckoutForm from '../components/CheckoutForm';




class MainContainer extends React.Component {

    state = {
        menuArray: []
    }

    componentDidMount() {
        fetch("http://localhost:3000/api/v1/items")
        .then(resp => resp.json()) 
        .then((data) => {
            this.setState({
                menuArray: data
            })
        })
    } 




    render() {
        return (
            <div className="main-container">
                {/* <MenuCardFront menu={this.state.menu}/> */} */}
                <MenuContainer items={this.state.menuArray}/>
                <ShoppingCartContainerJS/>
                <CheckoutForm/>
            
                {/* <Order/>
                {/* <SignUp/> */}
                {/* <Login/>
                <IndexContainer/> */}
            </div>
        )
    }









}


// function mapDispatchToProps(dispatch) {
//     return {
//         setMenuArray: (data) => {
//             dispatch({type: "SET_MENU_ARRAY", payload: data })
//         }
//     }
// }

// function mapStateToProps(state) {
//     return { 
        
//     }
// }

export default (MainContainer)
import React from 'react';
import IndexContainer from './IndexContainer';
import Login from "../components/Login"
import SignUp from "../components/SignUp"
import Navbar from "../components/NavBar"
import MenuCardFront from '../components/MenuCardFront';
import MenuContainer from './MenuContainer';
import ShoppingCartContainerJS from './ShoppingCartContainer';
import Order from '../components/Order';
import CheckoutForm from '../components/CheckoutForm';
import ProfileContainer from './ProfileContainer';
import { Route, Switch } from 'react-router-dom'

class MainContainer extends React.Component {

    state = {
        menuArray: [], 
        isLoading: true 
    }

    componentDidMount() {
        fetch("http://localhost:3000/api/v1/items")
        .then(resp => resp.json()) 
        .then((data) => {
            this.setState({
                menuArray: data,
                isLoading: !this.state.isLoading
            })
        })
    } 

///------------Functions for components To Render Per Route ------------------------///
renderLanding = () => {
    return (
        <React.Fragment>
            <MenuContainer items={this.state.menuArray}/>
       </React.Fragment>
    )
}

renderLogin = () => {
    return (
        <React.Fragment>
            <Login/>
       </React.Fragment>
    )
}

renderSignup = () => {
    return (
        <React.Fragment>
            <SignUp/>
       </React.Fragment>
    )
}

renderCart = () => {
    return (
        <React.Fragment>
            <ShoppingCartContainerJS/>
       </React.Fragment>
    )
}

renderProfile = () => {
    return (
        <React.Fragment>
            <ProfileContainer/>
       </React.Fragment>
    )
}



///-----------------------Routes--------------------------------------///
    render() {
        return (
            this.state.isLoading? 
            <div> Website is loading......</div>
            : 
            <div className="main-container">
                <Switch>
                 <Route  path="/login" render={this.renderLogin}/>
                 <Route  path="/signup" render={this.renderSignup}/>
                 <Route  path="/cart" render={this.renderCart}/>
                 <Route  path="/profile" render={this.renderProfile}/>
              
                 <Route  exact path="/" render={this.renderLanding}/>
                </Switch>

                {/* <MenuCardFront menu={this.state.menu}/> */} 
                {/* <MenuContainer items={this.state.menuArray}/>
                <ShoppingCartContainerJS/>
                <CheckoutForm/> */}
                {/* <ProfileContainer/> */}
            
                {/* <Order/>
                {/* <SignUp/> */}
                {/* <Login/> */}
                {/* <IndexContainer/> */}
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
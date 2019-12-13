import React from 'react';
import IndexContainer from './IndexContainer';
import Login from "../components/Login"
import SignUp from "../components/SignUp"
import Navbar from "../components/NavBar"
import MenuCardFront from '../components/MenuCardFront';


class MainContainer extends React.Component {




    render() {
        return (
            <div>
                <Navbar/>
                <MenuCardFront/>
                {/* <SignUp/> */}
                {/* <Login/> */}
                <IndexContainer/>
            </div>
        )
    }






}

export default MainContainer
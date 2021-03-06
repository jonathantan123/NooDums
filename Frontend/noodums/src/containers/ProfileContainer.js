import React from 'react';
import ProfleSideBar from '../components/ProfileSideBar';
import FavoritesPage from '../components/FavoritesPage';
import ProfilePage from '../components/ProfilePage';
import {connect} from "react-redux"
import PastOrder from '../components/PastOrder';


class ProfileContainer extends React.Component {

    state = { 
        activeItem: '' 
    }

    setActive = (e,menuItem) => {
        this.setState( {activeItem: menuItem.name})
        console.log(this.state)
    }

    renderPastOrders = () => {
        return( 
            this.props.user_info.orders.map((order) => {
                return (
                    <PastOrder order={order}/>
          )}))

    }

    render() { 

        switch (this.state.activeItem) {

            case "Favorite":
                return(

                    <React.Fragment>
                                <ProfleSideBar setActive={this.setActive}/>
                                <FavoritesPage/> 
                    </React.Fragment>
                )

            case "View/Edit Profile":
                return(
                    <React.Fragment>
                        <ProfleSideBar setActive={this.setActive}/>
                        <ProfilePage/>
                    </React.Fragment>
                )
                

            case "Past Orders":
                    
                return(
                    
                    <React.Fragment>
                        <ProfleSideBar setActive={this.setActive}/>
                        {this.renderPastOrders()}
                      
                    </React.Fragment>
                )
                
            default:
                return(
                    <ProfleSideBar setActive={this.setActive}/>
                )
                
        }
    }

}


function msp(state) {
    return {
        user_info: state.user_info
    }
}

export default connect(msp)(ProfileContainer)
import React from 'react';
import ProfleSideBar from '../components/ProfileSideBar';
import FavoritesPage from '../components/FavoritesPage';




class ProfileContainer extends React.Component {

    state = { 
        activeItem: '' 
    }

    setActive = (e,menuItem) => {
        this.setState( {activeItem: menuItem.name})
        console.log(this.state)
    }


    render() { 

        // switch (this.state.activeItem) {

        //     case value:
                
        //         break;
        
        //     default:
        //         break;
        // }

        
        return (
        // <ProfleSideBar active={this.state.activeItem} setActive={this.setActive}/>
            <FavoritesPage/>

            )
    }

   
}





export default (ProfileContainer)
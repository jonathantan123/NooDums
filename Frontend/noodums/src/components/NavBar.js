import React from 'react';

class Navbar extends React.Component {

    // logout= ()=> {
    //     this.props.setUserId(0)
    // }

    // redirectSignup = () => {
    //         this.props.routerprops.push(`/signup`);
    //     }
    // redirectLogin = () => {
    //         this.props.routerprops.push(`/login`);
    //     }
    // redirecthome = () => {
    //         this.props.routerprops.push(`/`);
    //     }

    // redirectPortfolios = () => {
    //         this.props.routerprops.push(`/portfolios`);
    //     }



    render() {

      return (
       
            <div class="ui  menu">
                <a class="item ">
                    Sign Up  
                </a>
                <a class="item">
                    Menu 
                    
                </a>

                <div class="right menu">
                    <div class="item"> My Bag </div>
                    </div>
            </div>
            
      )
    }
  }



  export default Navbar;

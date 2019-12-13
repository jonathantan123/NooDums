import React from 'react';
import logo from './logo.svg';
import './App.css';
import MainContainer from './containers/Main_Container';
import {withRouter} from 'react-router-dom'

class App extends React.Component{

    render() {
      return( 
        
        <div className="Main-container">
          <MainContainer/>
        </div>
      )
    }
}


export default App;

import React from "react"
import { connect } from "react-redux"
import Order from "./Order"


function renderFaves(props) {
debugger

if (props.favorites) {
        return(  props.favorites.map((fave) => {
              return (<Order order={fave}/>)
          })
        )
    } else {return (
        <h1>You have no favorites yet! </h1>    
    )}
}

 function FavoritesPage (props) {

    return (
    <div>asdsad{renderFaves()}</div>
    )

}


let mapStateToProps = (state) => {
    return {favorites: state.favorites}

}

export default connect(mapStateToProps)(FavoritesPage) 
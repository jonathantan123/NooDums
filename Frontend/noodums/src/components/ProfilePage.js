
import React from 'react';
import { connect } from "react-redux"
import { Table } from 'semantic-ui-react'






function ProfilePage (props) {

return(
    <React.Fragment>  

        {props.user_info.first_name}  
        <Table celled>
            <Table.Header>
            <Table.Row>
                <Table.HeaderCell colSpan='3'> </Table.HeaderCell>
            </Table.Row>
            </Table.Header>
        <h2>Name: </h2>
        </Table>

    </React.Fragment>
     
    
    )
    


}
function msp(state) {
    return (
        {
            user_info: state.user_info
        }
    )
}


export default connect(msp)( ProfilePage) 
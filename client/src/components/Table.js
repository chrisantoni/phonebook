import React, { Component } from 'react'
import ListData from './ListData'
import { connect } from 'react-redux'
import { fetchPhonebook } from '../actions/actionCreators'

class Table extends Component {
  render(){
    return (
    <table id="data-table" className="table table-striped">
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Phone</th>
          <th>Actions</th>
        </tr>
       </thead>
         {
           this.props.phonebooks
            .map((data,idx) => {
              idx += 1
              return  <ListData key={idx} index={idx} {...data} handleEditData = {this.props.handleEditData} handlerEditChange = {this.props.handlerEditChange} handleDeleteData = {this.props.handleDeleteData} handleEditButton = {this.props.handleEditButton}/>
            })
          }
     </table>
    )
  }
}

function mapStateToProps(state){
  return {
    phonebooks : state.phonebook
  }
}

export default connect(mapStateToProps,{ fetchPhonebook })(Table)

import React, { Component } from 'react'
import EditForm from './EditForm'

class ListData extends Component {
  render(){
    return (
      <tbody>
          {
            this.props.isUpdating ?
            <EditForm
                index = {this.props.index}
                name = {this.props.name}
                phone = {this.props.phone}
                id={this.props.id}
                handlerEditChange = {this.props.handlerEditChange}
                handleEditData = {this.props.handleEditData} />
            :
            <tr>
            <td>{this.props.index}</td>
            <td>{this.props.name}</td>
            <td>{this.props.phone}</td>
            <td>
              <button className="btn btn-success btn-edit" onClick = {() => this.props.handleEditButton(this.props.id)} ><i className="fa fa-pencil" aria-hidden="true"></i> Edit</button>&nbsp;
              <button className="btn btn-danger btn-delete" onClick = {() => this.props.handleDeleteData(this.props.id)}><i className="fa fa-trash-o" aria-hidden="true"></i> Delete</button>
            </td>
            </tr>
          }

      </tbody>

    )
  }
}

export default ListData

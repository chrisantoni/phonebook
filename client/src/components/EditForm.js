import React,{ Component } from 'react'

class EditForm extends Component {
  render(){
    return (
      <tr>
      <td style={{width:"50px"}}>{this.props.index}</td>
      <td style={{width:"250px"}}>
          <input type="text" className="form-control" name="name" ref = {(input) => this.name = input} defaultValue = { this.props.name } placeholder="name" />
      </td>
      <td style={{width:"250px"}}>
          <input type="text" className="form-control col-xs-3" name="phone" ref = {(input) => this.phone = input} defaultValue = { this.props.phone } placeholder="phone" />
      </td>
      <td>
          <button type="submit"className="btn btn-primary" onClick = {() => this.props.handleEditData({id:this.props.id,name:this.name.value,phone:this.phone.value})}>save</button>
      </td>
    </tr>
    )
  }
}

export default EditForm

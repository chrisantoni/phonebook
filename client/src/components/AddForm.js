import React, { Component } from 'react'


class AddForm extends Component {
  render(){
    return(
      <div className="panel panel-default">
        <div className="panel-heading">Adding Form</div>
        <div className="panel-body">
          <form className="form-inline" onSubmit = {this.props.handleSubmit}>
            <label className="form-control-label">Name</label>&nbsp;&nbsp;
            <input type="text" className="form-control mb-2 mr-sm-2 mb-sm-0" name="name"onChange = {this.props.handlerChange} placeholder="name" />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <label className="form-control-label">Phone</label>&nbsp;&nbsp;
          <div className="input-group mb-2 mr-sm-2 mb-sm-0">
            <input type="text" className="form-control" name="phone" onChange = {this.props.handlerChange} placeholder="phone" />
          </div>
          &nbsp;&nbsp;
          <button type="submit" className="btn btn-success"><i className="fa fa-check-circle-o" aria-hidden="true"></i> save</button>&nbsp;
          <button className="btn btn-warning" onClick={this.props.handleAddForm}><i className="fa fa-ban" aria-hidden="true"></i> cancel</button>
        </form>
      </div>
      </div>
    )
  }
}


export default AddForm

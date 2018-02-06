import React from 'react'


export const AddButton = (props) => (
  <button className="btn btn-primary" onClick = {props.handleOnclickAddButton}><i className="fa fa-plus" aria-hidden="true"></i> Add</button>
)

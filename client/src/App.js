import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchPhonebooks, savePhonebook, deletePhonebook,fetchPhonebook,updatePhonebook} from './actions/actionCreators'
import Header from './components/Header'
import Table from './components/Table'
import AddForm from './components/AddForm'
import { AddButton } from './components/AddButton'


class App extends Component {

  state = {
    name : '',
    phone:'',
    isAdd : false
  }

  componentDidMount(){
    this.handleFilter()
  }

  handlerChange = (e) => {
    this.setState({[e.target.name] : e.target.value})
  }

  handleFilter = (e) => {
    this.props.fetchPhonebooks(this.name.value,this.phone.value)
  }

  handleOnclickAddButton = (e) => {
    this.setState({isAdd:true})
  }

  handleAddForm = (e) => {
    e.preventDefault()
    this.setState({isAdd:false})
    this.state.name = ""
    this.state.phone = ""
  }

  handleEditButton = (id) => {
    this.props.fetchPhonebook(id)
  }

  handlerEditChange = (e,id) => {
    this.setState({[e.target.name] : e.target.value})
  }

  handleDeleteData = (id) => {
    this.props.deletePhonebook(id)
    // .then(res => {
    //   this.handleFilter()
    // })
  }

  handleEditData = ({id,name,phone}) => {
    console.log(id,name,phone)
    this.props.updatePhonebook({id,name,phone})
  }


  handleSubmit = (e) => {
    e.preventDefault()
    let id = Date.now().toString()
    let {name,phone} = this.state
    this.props.savePhonebook({id,name,phone})
    // .then(res => {
    //   this.handleFilter()
    // })
    this.setState({isAdd:false})
  }

  render() {
    return (
      <div className="container">
        <Header />
          {
              this.state.isAdd ?
              <AddForm
                  handleAddForm = {this.handleAddForm}
                  handleSubmit = {this.handleSubmit}
                  handlerChange = {this.handlerChange}/> :
              <AddButton handleOnclickAddButton = {this.handleOnclickAddButton}/>
          }
<hr />
        <div className="panel panel-default">
          <div className="panel-heading">Search Form</div>
            <div className="panel-body">
              <form className="form-inline search-form">
                <label className="form-control-label">Name</label>&nbsp;&nbsp;
                <input type="text" className="form-control mb-2 mr-sm-2 mb-sm-0" name="name" placeholder="name" ref = {input => this.name = input} onInput={this.handleFilter}/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <label className="form-control-label">Phone</label>&nbsp;&nbsp;
                <div className="input-group mb-2 mr-sm-2 mb-sm-0">
                   <input type="text" className="form-control" name="phone" placeholder="phone" ref={input => this.phone = input} onInput={this.handleFilter}/>
                </div>
               </form>
            </div>
        </div>
        <Table phonebooks = {this.props.phonebooks}
               handleDeleteData = { this.handleDeleteData }
               handleEditButton = {this.handleEditButton }
               handlerEditChange = {this.handlerEditChange}
               handleEditData = {this.handleEditData}/>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    phonebooks : state.phonebook
  }
}

export default connect(mapStateToProps,{fetchPhonebooks,savePhonebook,deletePhonebook,fetchPhonebook,updatePhonebook})(App);

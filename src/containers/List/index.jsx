import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {deleteTodoAction, updateCheckboxAction, deleteSelectedAction} from "../../redux/actions/todoAction"


function mapStateToProps (state) {
  return {todos: state}    
}

function mapDispatchToProps(dispatch){
  return {
    delete: (data)=> {dispatch(deleteTodoAction(data))},
    updateCheckbox: (data)=> {dispatch(updateCheckboxAction(data))},
    delectSelected: (data)=> {dispatch(deleteSelectedAction())},
  }
}

class List extends Component {

  deleteTodo = (id)=>{
    this.props.delete(id)
    
  }

  handleCheck = (id) =>{
    this.props.updateCheckbox(id)
  }

  deleteSelected = ()=>{
    this.props.delectSelected()
  }

  rowClick =(id)=>{

  }

  render() {
    console.log("this is List:", this.props.todos)
    return (
      <div className="container">
        <button onClick={this.deleteSelected}>Delete selected</button>
        <br/>      
        <br/>     
        <table className="table table-hover">
          <thead>
            <tr>
              <th></th>
              <th>Description</th>
              <th>Category</th>
              <th>Operate</th>
            </tr>
          </thead>
          <tbody>
            {
              this.props.todos.map((i)=>{
                return (
                <tr key={i.id}>
                  <td><input type="checkbox" onChange={()=>this.handleCheck(i.id)}/></td>
                  <td><Link to={`/todo/${i.id}`}>{i.description}</Link></td>
                  <td>{i.category}</td>
                  <td><button onClick={(event)=>{this.deleteTodo(i.id); event.stopPropagation();}}>Delete</button></td></tr>)
              })
            }
          </tbody>
        </table>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(List)

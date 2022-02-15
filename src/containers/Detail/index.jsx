import React, { Component } from 'react'
import {connect} from 'react-redux'
import {nanoid} from 'nanoid'
import {addTodoAction} from "../../redux/actions/todoAction"


function mapStateToProps (state) {
  return {todos: state}    
}

function mapDispatchToProps(dispatch){
  return {jia: (data)=> {
    dispatch(addTodoAction(data))
  }}
}

class Detail extends Component {

  handleSubmit = (event)=>{
    event.preventDefault();
    const {description, category, content} = this;
    this.props.jia({id: nanoid(), description: description.value, category: category.value, content: content.value, delete:false})
    this.description.value = ""
    this.content.value = ""
  }

  render() {

    console.log("this is detail:", this.props)
    return (
      <div>
          <form className="form-horizontal" onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label className="col-sm-4">Description:</label>
              <div className="col-sm-7">
                <input ref={el=>this.description = el} type="text" className="form-control" id="description" placeholder="Enter description" name="description"/>
              </div>
            </div>
            <div className="form-group">
              <label className="col-sm-4">Category:</label>
              <div className="col-sm-7">          
                <select ref={el=>this.category = el} name="categories" id="categories">
                  <option value="css">css</option>
                  <option value="js">js</option>
                </select>
              </div>
            </div>
            <div className="form-group">
              <label className="col-sm-4">Content:</label>
              <div className="col-sm-7">
                <input ref={el=>this.content = el} type="text" className="form-control" id="content" placeholder="Enter content" name="content"/>
              </div>
            </div>
            <div className="form-group">        
              <div className="col-sm-10">
                <button type="submit" className="btn btn-default">Submit</button>
              </div>
            </div>
          </form>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Detail)

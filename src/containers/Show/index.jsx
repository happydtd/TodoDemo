import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import {
    useLocation,
    useNavigate,
    useParams
} from "react-router-dom";

function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
        <Component
            {...props}
            router={{ location, navigate, params }}
        />
    );
}

return ComponentWithRouterProp;
}


function mapStateToProps (state) {
  return {todos: state}    
}


class Show extends Component {

  render() {

    console.log("this is detail:", this.props)
    const {id} = this.props.router.params
    const findResult = this.props.todos.find((todoObj)=>{
        return todoObj.id === id
    })
    return (
      <div  className="col-xs-4 col-xs-offset-2">
          <form className="form-horizontal" onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label className="col-sm-6">Description: {findResult.description}</label>
            </div>
            <div className="form-group">
              <label className="col-sm-6">Category: {findResult.category}</label>
            </div>
            <div className="form-group">
              <label className="col-sm-6">Content: {findResult.content}</label>
            </div>
            <div className="form-group">        
              <div className="col-sm-10">
                <Link className="list-group-item" to="/todo">Back</Link>
              </div>
            </div>
          </form>
      </div>
    )
  }
}

export default withRouter(connect(mapStateToProps)(Show))
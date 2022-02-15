import React, { Component } from 'react'
import Detail from '../../containers/Detail'
import List from '../../containers/List'


export default class Todo extends Component {
  render() {
    return (
      <div>
          <div className="col-xs-2 col-xs-offset-2">
                <Detail/>
           </div>
           <div className="col-xs-6">
              <div className="panel">
                <div className="panel-body">
                  <List/>
                </div>
              </div>
            </div>
      </div>
    )
  }
}

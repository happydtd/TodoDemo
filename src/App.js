import React, { Component } from 'react'
import {Route, Routes, Navigate } from 'react-router-dom'
import Header from './components/Header'
import Todo from './components/Todo'
import About from './components/About'
import Show from './containers/Show'

export default class App extends Component {
  render() {
    return (
      <div>
        	<div className="row">
					  <div className="col-xs-offset-2 col-xs-8">
              <div className="page-header">
                <Header/>
              </div>
					  </div>
				  </div>
          <div className="row">
            <div className="panel">
							<div className="panel-body">
                <Routes>
                  <Route path="/about" element={<About/>}/>
                  <Route path="/todo" element={<Todo/>}/>
                  <Route path="/todo/:id" element={<Show/>}/>
                  <Route path="/" element={<Navigate replace to="/todo" />} />
                </Routes>
							</div>
						</div>
				</div>
      </div>
    )
  }
}





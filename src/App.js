import React, { Component } from 'react'
import Header from './components/layouts/Header'
import Landing from './components/layouts/Landing'
import Footer from './components/layouts/Footer'
import { BrowserRouter as Router, Route} from 'react-router-dom'

import { Provider } from 'react-redux'
import store from '../src/redux/store/store'


import './App.css'
import Login from './components/auth/Login'
import Register from './components/auth/Register'

export default class App extends Component {
  constructor () {
    super();
    this.state = {
      name:"athena"
    };
  }
  render() {
    return (
      <Provider store={store}>
      <Router>
      <div>      
        <Header name={this.state.name}/>
          <Route exact path="/" component={Landing} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
        <Footer/>
      </div>
      </Router>
      </Provider>
    )
  }
}

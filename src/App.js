import React,{Fragment, useState} from 'react';
import './App.css';
// import { func } from 'prop-types';
// import axios from 'axios'
import Navbar from './components/layout/Navbar'
import Users from "./components/users/Users"
import Search from "./components/users/Search"
import Alert from "./components/layout/Alert"
import {BrowserRouter as Router , Switch, Route} from 'react-router-dom'
import About from './components/pages/About'
import User from './components/users/User'
import GithubState from './components/context/github/GithubState';
import AlertState from './components/context/alert/AlertState'
import NotFound from './components/pages/NotFound';

//CLASS-BASED COMPONENT

const App = () =>{
  
    return(
      <GithubState>
        <AlertState>
      <Router>
      <div className="main">
        <Navbar />
        <Alert/>
        <Switch>
          <Route exact path='/' render={() =>(
            <Fragment>
              <Search
              />
              <div className="container">
              <Users/>
              </div>
            </Fragment>
          )}/>
          <Route exact path='/about' component={About}/>
          <Route exact path='/user/:login' render={props =>(
            <User {...props} />
          )} />
          <Route component={NotFound} />
        </Switch>
      </div>
        </Router>
        </AlertState>
        </GithubState>
    )
}


export default App;




// async componentDidMount(){

  //   this.setState({loading:true})
  //   const response=await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
  //   this.setState({ users:response.data, loading:false})
  // }
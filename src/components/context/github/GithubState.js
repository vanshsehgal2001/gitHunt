import React, { useReducer } from 'react'
import GithubContext from './GithubContext'
import GithubReducer from './GithubReducers'
import axios from 'axios'
import {
    SEARCH_USERS,
    GET_USER,
    GET_REPOS,
    SET_LOADING,
    CLEAR_USERS
} from '../types'

let githubClientId;
let githubClientSecret;

if(process.env.NODE_ENV !=='production'){
    githubClientId=process.env.REACT_APP_GITHUB_CLIENT_ID;
    githubClientSecret=process.env.REACT_APP_GITHUB_CLIENT_SECRET;
}else{
    githubClientId=process.env.GITHUB_CLIENT_ID
    githubClientSecret=process.env.GITHUB_CLIENT_SECRET
}

const GithubState = props =>{
    const initialState={
        users:[],
        user:{},
        loading:false,
        repos:[]
    }

    const [state,dispatch]=useReducer(GithubReducer,initialState)

    const searchUsers= async text =>{
        setLoading()
        const response=await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${githubClientId}&client_secret=${githubClientSecret}`)
        console.log(response.data.items)
        dispatch({
            type:SEARCH_USERS,
            payload:response.data.items
        })
    }

    const clearUsers = e=>{
        dispatch({ type:CLEAR_USERS })
    }

    const getUser = async username =>{
        setLoading()
        const response=await axios.get(`https://api.github.com/users/${username}?client_id=${githubClientId}&client_secret=${githubClientSecret}`)
        // console.log(response.data)
        dispatch({ type:GET_USER,payload:response.data })
    }

    const getUserRepos= async username =>{
        setLoading()
        const response=await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${githubClientId}&client_secret=${githubClientSecret}`)
        dispatch({ type:GET_REPOS,payload:response.data })
      }
    
    

    const setLoading = () =>{
        dispatch({ type:SET_LOADING })
    }


    return <GithubContext.Provider value={{
        users:state.users,
        user:state.user,
        repos:state.repos,
        loading:state.loading,
        searchUsers,
        clearUsers,
        getUser,
        getUserRepos
    }}>
        {props.children}
    </GithubContext.Provider>
}

export default GithubState
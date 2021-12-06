import React, { useState, useContext } from 'react'
import GithubContext from '../context/github/GithubContext'
import AlertContext from '../context/alert/AlertContext'

const Search = ({showClear,showAlert,clearUsers})=> {
    
    const githubContext=useContext(GithubContext)
    const alertContext=useContext(AlertContext)

    const [text, setText] = useState('')
    

    const onChange= e => {
        console.log(e.target.value)
        setText(e.target.value)
    }

    
    const onSubmit = e=>{
        e.preventDefault()
        if(text){
            githubContext.searchUsers(text);
            setText('')
        }else{
            alertContext.showAlert('Please enter Something!','light')
        }
    }

        return (
            <div>
                <form onSubmit={onSubmit} className="form">
                    <input 
                    type="text" 
                    placeholder="Search User..." 
                    name="text" 
                    value={text}
                    onChange={onChange}
                     />
                    <input type="submit"
                    value="Search"
                    className="btn btn-dark btn-block" />
                </form>     
                {githubContext.users.length>0 && (<button className="btn btn-light btn-block" onClick={githubContext.clearUsers}>
                        Clear Results...
                </button>
                )}           
            </div>
        )
}

export default Search

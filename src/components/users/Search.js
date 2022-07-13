import React, { useState, useContext } from 'react'
import GithubContext from '../context/github/GithubContext'
import AlertContext from '../context/alert/AlertContext'

const Search = ({ showClear, showAlert, clearUsers }) => {

    const githubContext = useContext(GithubContext)
    const alertContext = useContext(AlertContext)

    const [text, setText] = useState('')


    const onChange = e => {
        console.log(e.target.value)
        setText(e.target.value)
    }


    const onSubmit = e => {
        e.preventDefault()
        if (text) {
            githubContext.searchUsers(text);
            setText('')
        } else {
            alertContext.showAlert('Please enter Something!', 'light')
        }
    }

    return (
        <div>
            <form style={{ margin: "auto", width: "80%" }} onSubmit={onSubmit} className="form">
                <input
                    type="text"
                    placeholder="Search User..."
                    name="text"
                    value={text}
                    onChange={onChange}
                />
                <input style={{ margin: "auto", width: "20%" }} type="submit"
                    value="Search"
                    className="btn btn-dark btn-block" />
            </form>
            {githubContext.users.length > 0 && (<button style={{ margin: "auto", width: "16%", marginTop: "20px" }} className="btn btn-dark btn-block" onClick={githubContext.clearUsers}>
                Clear Results...
            </button>
            )}
        </div>
    )
}

export default Search

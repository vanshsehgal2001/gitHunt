import React, {  Fragment,useEffect, useContext } from 'react'
import Spinner from '../layout/spinner'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import Repos from '../repos/Repos'
import GithubContext from '../context/github/GithubContext'

const User= ({match}) => {

    const githubContext = useContext(GithubContext)

    useEffect(()=>{
        githubContext.getUser(match.params.login)
        githubContext.getUserRepos(match.params.login)
        //eslint-disable-next-line
    },[]) //THIS EMPTY BRACKET IS NECESSARY SO AS TO AVOID INFINITE CALLS AS USE EFFECT HOOK WORKS 
            //DIFFERENTLY FROM COMPONENTDIDMOUNT. IT GETS RE-INVOKED AS SOON AS ANY STATE INSIDE IT CHANGES

        const {
            name,
            avatar_url,
            location,
            bio,
            company,
            blog,
            login,
            html_url,
            followers,
            following,
            public_repos,
            public_gists,
            hireable

        }=githubContext.user

        if(githubContext.loading) return <Spinner />

        return (
            <Fragment>
                <Link to="/" className="btn btn-light">Go Back...</Link>

                Hireable: {' '}
                {hireable ? (<i className="fa fa-check text-success" />) : (<i className="fa fa-times-circle text-danger" />)}
            <div className="card grid-2">
                <div className="all-center">
                    <img 
                        src={avatar_url}
                        className="round-img"
                        alt=''
                        style={{width:'150px'}}
                    />
                    <h1>{name}</h1>
                    <h4>{location}</h4>
                </div>
                <div>
                    {bio && <Fragment>
                        <h2>Bio</h2>
                        <h4>{bio}</h4>
                        </Fragment>}
                    <a href={html_url} className="btn btn-dark my-1">
                        Visit Profile..
                    </a>
                    <ul>
                        <li>
                            {login && <Fragment>
                                <b>Username: </b>{login}
                                </Fragment>}
                        </li>
                        <li>
                            {company && <Fragment>
                                <b>Company: </b>{company}
                                </Fragment>}
                        </li>
                        <li>
                            {blog && <Fragment>
                                <b>Website: </b>{blog}
                                </Fragment>}
                        </li>
                    </ul>

                </div>
            </div>
            <div className="card text-center">
                    <div className="badge badge-success">Followers: {followers}</div>
                    <div className="badge badge-light">Following: {following}</div>
                    <div className="badge badge-dark">Public Repos: {public_repos}</div>
                    <div className="badge badge-danger">Public Gists: {public_gists}</div>
            </div>
            <h1 style={{textAlign:'center'}}>Top Repos...</h1>
            <Repos repos={githubContext.repos}/>
            </Fragment>
        )
    }

// User.propTypes={
//         // loading: PropTypes.bool.isRequired,
//         // getUser: PropTypes.func.isRequired,
//         // user: PropTypes.object.isRequired,
//         // getUserRepos: PropTypes.func.isRequired,
//     }

export default User

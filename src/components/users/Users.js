import React, { useContext } from 'react'
import UserItem from './UserItem'
import Spinner from '../layout/spinner'
import GithubContext from '../context/github/GithubContext'

const Users= () => {

    const githubContext = useContext(GithubContext)

    if(githubContext.loading){
        return <Spinner /> 
    }
    else{
        return (
            <div style={UserStyle}>
                {githubContext.users.map(user =>(
                    <UserItem key={user.id} user={user} />
                ))}
            </div>
        )
    }
        
}
const UserStyle={
    display: 'grid',
    gridTemplateColumns: 'repeat(3,1fr)',
    gridGap: '1rem'
}

export default Users

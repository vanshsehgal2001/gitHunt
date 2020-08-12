import React from 'react'
import {Link} from 'react-router-dom'

const UserItem = ({user: {login,avatar_url,html_url}})=> {

    // constructor(){
    //     super()
    //     this.state={
    //         id:'id',
    //         login:'mojombo',
    //         avatar_url:'https://avatars0.githubusercontent.com/u/1?v=4',
    //         html_url:'https://github.com/mojombo'
    //     }
    // }

        //INSTEAD OF USING this.state everywhere,just do destructuring

        console.log('lol')
        return (
            <div className="card text-center">
                <img 
                // src={this.state.avatar_url}
                src={avatar_url}
                alt="" 
                className="round-img"
                style={{ width: '60px' }}
                 />
                
                {/* <h3>{this.state.login}</h3> */}
                <h3>{login}</h3>

                {/* <a href={this.state.html_url} className="btn btn-dark btn-sm my-1">More...</a> */}
                <Link to={`/user/${login}`} className="btn btn-dark btn-sm my-1">More...</Link>
            </div>
        )
}



export default UserItem

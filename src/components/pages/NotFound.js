import React from 'react'
import notFoundImg from './NotFound.gif'

const NotFound = () => {
    return (
        <div>
            <img src={notFoundImg} alt="notFound" style={{ width: '100%',height:'550px',marginTop:'0px', margin: 'auto', display:"block"}} />
        </div>
    )
}

export default NotFound

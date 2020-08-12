import React, { useContext } from 'react'
import AlertContext from '../context/alert/AlertContext'

const Alert = () => {

    const alertContext=useContext(AlertContext)

    return (
        alertContext.alert!==null && (
            <div className={`alert alert-${alertContext.alert.type}`}>
                <i className="fa fa-info-circle"></i>{alertContext.alert.msg}
            </div>
        )
    )
}

export default Alert 

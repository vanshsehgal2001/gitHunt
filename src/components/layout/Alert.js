import React, { useContext } from 'react'
import AlertContext from '../context/alert/AlertContext'

const Alert = () => {

    const alertContext = useContext(AlertContext)

    return (
        alertContext.alert !== null && (
            <div style={{ fontWeight: "bold", margin: "auto", width: "30%", textAlign: "center", color: "black", padding: "5px" }} className={`alert alert-${alertContext.alert.type}`}>
                <i className="fa fa-info-circle"></i><span style={{ marginLeft: "10px" }} >{alertContext.alert.msg}</span>
            </div>
        )
    )
}

export default Alert 

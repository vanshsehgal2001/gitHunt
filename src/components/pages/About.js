import React, { Fragment } from 'react'

const About = () => {
    return (
        <Fragment>
            <div style={{ textAlign: "center", width: "65%", height: "100%", margin: "auto", marginTop: "200px" }} >
                <h3 style={{ marginBottom: "50px" }} >Website made using ReactJs where users can search github users using their
                    usernames and can view their profile which I made separately where we can
                    see important information of user's github profile.
                </h3>
                <h2>Made with <span style={{ color: "red", fontSize: "40px" }} >&hearts;</span> by Vansh Sehgal</h2>
            </div>
        </Fragment >
    )
}

export default About

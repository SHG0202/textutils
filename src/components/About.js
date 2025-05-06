import React from 'react'
import { Link } from "react-router-dom";

export default function About(props) {

    return (
        <div className="card centered-content" style={{width: "18rem"}}>
            <div className="card-body" style={{backgroundColor: (props.mode.blueState === 'dark' || props.mode.greenState === 'dark')?'grey':'white',
                    color: (props.mode.blueState==='dark' || props.mode.greenState==='dark')?'white':'black'}}>
                <h2 className="card-title">About us</h2>
                <h6 className="card-subtitle mb-2 text-body-secondary">Authon: SHG</h6>
                <p className="card-text">This is my first Web App, which is built using Reactjs. This App / unility is created to 
                    assist uses with text manupulations.</p>
                <Link to="https://www.linkedin.com/in/saket-gupta-8a5974b8/" className="card-link">LinkedIn</Link>
            </div>
        </div>
    )
}

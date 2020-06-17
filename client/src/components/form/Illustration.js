import React from 'react'
import { Link } from 'react-router-dom'

function Illustration(props) {

    return (
        <div className="col-sm-8 Form-Left col-md-6">
            <img src={"img/" + props.status + ".svg"} alt={props.status + " Illustration"} className="illustration" />
            <p><Link to="/" > {"<-- "}Main Page</Link></p>
            <p><Link to="/dashboard">Dashboard{" -->"}</Link></p>
        </div>
    )
}

export default Illustration
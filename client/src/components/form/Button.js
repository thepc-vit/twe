import React from 'react'
import _ from 'lodash'

function Button(props) {

    function handleClick(event) {
        props.handleClick(event);
    }

    return (
        <button className={"btn btn-lg btn-block " + props.classAdd} onClick={handleClick} name={_.kebabCase(_.lowerCase(props.name + " - btn"))}>{props.name}</button>
    )
}

export default Button
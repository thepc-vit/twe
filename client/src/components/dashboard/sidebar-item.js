import React from 'react'

function Item(props) {

    function handleClick(event) {
        props.redirect(event)
    }

    return (
        <li className="nav-item" onClick={handleClick}>
            <a className={"nav-link " + props.addClass} href={"/" + props.name}>
                <span data-feather="home"></span>{props.name}
            </a>
        </li>
    )
}

export default Item

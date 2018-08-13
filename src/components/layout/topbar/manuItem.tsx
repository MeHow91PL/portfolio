import * as React from 'react'

interface IMenuItemProps {
    link: string
}

function MenuItem(props:IMenuItemProps) {
    return (
        <li >
           {props.link}
        </li>
    )
}

export default MenuItem

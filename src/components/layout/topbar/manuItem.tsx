import * as React from 'react'
import Nav from '../../nav';

interface IMenuItemProps {
    children: JSX.Element,
    link: string
}

function MenuItem(props:IMenuItemProps) {
    const click = () => Nav.scrollTo(props.link);
    return (
        <li onClick={click}>
           {props.children}
        </li>
    )
}

export default MenuItem

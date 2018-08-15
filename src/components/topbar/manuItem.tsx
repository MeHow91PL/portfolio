import * as React from 'react'
import Nav from '../nav';
import { TopbarContext } from './topbar';

interface IMenuItemProps {
    children: JSX.Element,
    link: string
}

function MenuItem(props: IMenuItemProps) {

    return (
        <TopbarContext.Consumer>
            {
                (topbarHeight:any) => {
                    console.log('topbarHeight',topbarHeight);
                    const click = () => Nav.scrollTo(props.link, topbarHeight);
                    return (
                        <li
                            onClick={
                                click
                            }
                        >
                            {props.children}
                        </li>
                    )
                }
            }
        </TopbarContext.Consumer>
    )
}

export default MenuItem

import * as React from 'react'
import MenuItem from './manuItem';
import './topbar.css';

interface ITopbarProps {
    txt?: string
}

export default class Topbar extends React.Component<ITopbarProps> {
    public static MenuItem = MenuItem;

    public render() {
        return (
            <section className={`topbar`}>
                <div className="wrapper">
                    {/* <section className={`topbar__logo`}>
                        LOGO
                </section> */}
                    <nav>
                        <ul>
                            {this.props.children}
                        </ul>
                    </nav>
                </div>
            </section>
        )
    }
}
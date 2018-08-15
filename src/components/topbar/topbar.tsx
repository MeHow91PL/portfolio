import * as React from 'react'
import MenuItem from './manuItem';
import './topbar.css';

interface ITopbarProps {
    height: number
}


export const TopbarContext = React.createContext(50);

export default class Topbar extends React.Component<ITopbarProps> {
    public static MenuItem = MenuItem;

    public render() {
        return (
            <TopbarContext.Provider value={this.props.height}>
                <section className={`topbar`} style={{
                    height: this.props.height
                }}>
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
            </TopbarContext.Provider>
        )
    }
}
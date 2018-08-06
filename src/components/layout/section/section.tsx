import * as React from 'react';
import Background from './background';

interface ISectionProps {
    text?: string,
    style?: {
        height?: string,
        width?: string,
        background?: string
    },
    children?: any
}

// export enum HeaderLayout {
//     photoRight, photoLeft
// }

class Section extends React.Component<ISectionProps>{
    public static Background = Background;

    public render() {
        return (
            <div style={this.props.style}>
                {this.props.children}
                {typeof this.props.children}
            </div >
        );
    }
};


export default Section;
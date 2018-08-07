import * as React from 'react';

export enum Skew {
    none,
    right,
    left
}

export interface IBackgroundProps {
    img?: string,
    style?: {
        background?: string,
        height: string,
        width?: string
    }
}



function Background(props: IBackgroundProps) {
    return (
        <div className={'test'}
        // style={
        //     {
        //         ...props.style,
        //         height: '100%',
        //         position: 'absolute',
        //         width: '100%',
        //         zIndex: -1
        //     }
        // }
        >
            {props.img}
        </div>
    )
}

export default Background

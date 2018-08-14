import * as React from 'react';
import SVG from 'react-inlinesvg'
import asp from '../../../assets/img/asp.svg';
import csharp from '../../../assets/img/csharp.svg';
import css from '../../../assets/img/css.svg';
import git from '../../../assets/img/git.svg';
import html from '../../../assets/img/html.svg';
import js from '../../../assets/img/js.svg';
import react from '../../../assets/img/react.svg';
import rwd from '../../../assets/img/rwd.svg';
import sass from '../../../assets/img/sass.svg';
import Background from './background';

import './section.css'

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
            <>
                <SVG src={asp} />
                <SVG src={csharp} />
                <SVG src={css} />
                <SVG src={git} />
                <SVG src={html} />
                <SVG src={js} />
                <SVG src={sass} />
                <SVG src={react} />
                <SVG src={rwd} />
            </>
        );
    }
};

export default Section;
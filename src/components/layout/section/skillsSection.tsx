import * as _ from 'lodash';
import * as React from 'react';
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
import Skill from './skill';

import './amazingItem.css'
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

interface ISectionState {
    txt?: string
}

// export enum HeaderLayout {
//     photoRight, photoLeft
// }
class Section extends React.Component<ISectionProps, ISectionState>{
    public static Background = Background;
    constructor(props: ISectionProps) {
        super(props);
    }

    public render() {
        return (
            <>
                <div className="skills">
                    <Skill title='ASP.NET MVC' img={asp} />
                    <Skill title='C#' img={csharp} />
                    <Skill title='HTML5' img={html} />
                    <Skill title='CSS3' img={css} />
                    <Skill title='Git' img={git} />
                    <Skill title='JavaScript/ES6' img={js} />
                    <Skill title='Sass' img={sass} />
                    <Skill title='ReactJS' img={react} />
                    <Skill title='Responsive' img={rwd} />
                </div>

            </>
        );
    }
};

export default Section;
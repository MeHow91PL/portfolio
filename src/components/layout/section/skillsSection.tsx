import * as _ from 'lodash';
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
    private skills: any;
    constructor(props: ISectionProps) {
        super(props);
    }




    public componentDidMount() {
        this.skills = document.querySelectorAll('.skill');
        _.map(this.skills,
            (skill: any) => {
                skill.addEventListener('mouseenter', this.mouseEneterHandler)
            }
        )
    }

    public componentWillUnmount() {
        _.map(this.skills,
            (skill: any) => {
                skill.removeEventListener('mouseenter', this.mouseEneterHandler)
            }
        )
    }

    public render() {
        return (
            <>
                <div className="skills">
                    <div className="skill">
                        <SVG src={asp} />
                        <div className="title">Title</div>
                    </div>
                    <div className="skill">
                        <SVG src={csharp} />
                        <div className="title">Title</div>
                    </div>
                    <div className="skill">
                        <SVG src={css} />
                        <div className="title">Title</div>
                    </div>
                    <div className="skill">
                        <SVG src={html} />
                        <div className="title">Title</div>
                    </div>
                    <div className="skill">
                        <SVG src={git} />
                        <div className="title">Title</div>
                    </div>
                    <div className="skill">
                        <SVG src={js} />
                        <div className="title">Title</div>
                    </div>
                    <div className="skill">
                        <SVG src={sass} />
                        <div className="title">Title</div>
                    </div>
                    <div className="skill">
                        <SVG src={react} />
                        <div className="title">Title</div>
                    </div>
                    <div className="skill">
                        <SVG src={rwd} />
                        <div className="title">Title</div>
                    </div>
                </div>

            </>
        );
    }
    private mouseEneterHandler = () => {
        console.log('enter');

    }
};

export default Section;
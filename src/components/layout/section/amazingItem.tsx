import * as React from 'react';
import SVG from 'react-inlinesvg'
import Background from './background';
import { SkillModel } from './SkillModel';

import './section.css'

interface IProps {
    img: SVGAElement,
    title: string
}

interface ISectionState {
    txt?: string
}

// export enum HeaderLayout {
//     photoRight, photoLeft
// }
class Section extends React.Component<IProps, ISectionState>{
    public static Background = Background;
    private skillRef: React.RefObject<HTMLDivElement>;
    constructor(props: IProps) {
        super(props);
        this.skillRef = React.createRef();
    }
    public render() {
        const { img, title } = this.props
        return (
            <div className="skill"
                ref={this.skillRef}
                onMouseEnter={this.mouseEnterHandler}
            >
                <SVG src={img} />
                <div className="title">{title}</div>
            </div>
        );
    }
    private mouseEnterHandler = (e: React.MouseEvent<HTMLDivElement>) => {
        const skill = this.skillRef.current;
        if (skill !== null) {
            const skillModel = new SkillModel(
                skill.clientHeight,
                skill.clientWidth,
                skill.offsetLeft,
                skill.offsetTop
            );

            const relativeMousePosition: IMousePosition = {
                X: e.pageX - skillModel.position.X,
                Y: e.pageY - skillModel.position.Y
            }

            const horizontalDirection = relativeMousePosition.X - skillModel.size.width / 2;
            console.log(horizontalDirection);

            if (horizontalDirection <= 0) {
                console.log('left');
            }
            else {
                console.log('right');
            }
        }
    }
};

interface IMousePosition {
    X: number,
    Y: number
}

export default Section;
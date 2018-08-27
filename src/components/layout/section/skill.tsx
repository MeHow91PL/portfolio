import * as React from 'react';
import SVG from 'react-inlinesvg'
import AmazingItem from './amazingItem';


interface ISkillProps {
    img: SVGAElement,
    title: string
}

interface ISectionState {
    txt?: string
}

// export enum HeaderLayout {
//     photoRight, photoLeft
// }
class Section extends React.Component<ISkillProps, ISectionState>{
    constructor(props: ISkillProps) {
        super(props);
    }
    public render() {
        const { img, title } = this.props;
        return (
            <div className={`skill`}>
                <SVG src={img} />
                <div className="title">{title}</div>
                <AmazingItem>
                    <div className="info">
                        <a href="#">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae autem, vero voluptatibus a dolor natus ut modi doloribus maxime ducimus?
                            </a>
                            <button onClick={alert} >Ello</button>
                    </div>
                </AmazingItem>
            </div>
        );
    }
};

export default Section;
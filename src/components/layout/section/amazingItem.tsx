import * as React from 'react';
import SVG from 'react-inlinesvg'
import Background from './background';

interface IProps {
    img: SVGAElement,
    title: string
}

interface ISectionState {
    className?: string,
    txt?: string,
    test?: string
}

// export enum HeaderLayout {
//     photoRight, photoLeft
// }
class Section extends React.Component<IProps, ISectionState>{
    public static Background = Background;
    private skillRef: React.RefObject<HTMLDivElement>;
    private isEntered = false;
    constructor(props: IProps) {
        super(props);
        this.skillRef = React.createRef();
        this.state = {
            className: ''
        }
    }

    public teest(e: any) {
        console.log("Clicked: Related: ", e.relatedTarget, " || Target: ", e.target);
    }

    public componentDidMount() {
        window.addEventListener("click", this.teest)
    }

    public render() {
        const { img, title } = this.props
        return (
            <div className={`skill ${this.state.className}`}
                ref={this.skillRef}
                onMouseLeave={this.mouseLeaveHandler}
                onMouseEnter={this.mouseEnterHandler}
            >
                <SVG src={img} />
                <div className="title">{title}</div>

                <div className="info--container">
                    <div className="dir-detect">
                        <div className="dir top" data-dir='top' />
                        <div className="dir right" data-dir='right' />
                        <div className="dir bottom" data-dir='bottom' />
                        <div className="dir left" data-dir='left' />
                    </div>
                    <div className="info" />
                        <div className="info--content">
                            <a href="#">
                                   Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae autem, vero voluptatibus a dolor natus ut modi doloribus maxime ducimus?
                            </a>
                        </div>

                </div>

                <div>Test: {this.state.className}</div>
            </div>
        );
    }
    // private getDirectionKey = (e: React.MouseEvent<HTMLDivElement>, div: HTMLDivElement) => {
    //     const { width, height, top, left } = div.getBoundingClientRect()
    //     const l = e.pageX - (left + window.pageXOffset);
    //     const t = e.pageY - (top + window.pageYOffset);
    //     console.log(width, height);

    //     const x = (l - (width / 2) * (width > height ? (height / width) : 1));
    //     const y = (t - (height / 2) * (height > width ? (width / height) : 1));
    //     return Math.round(Math.atan2(y, x) / 1.57079633333 + 5) % 4;
    // }

    private mouseEnterHandler = (e: React.MouseEvent<HTMLDivElement>) => {
        const skill = this.skillRef.current;
        if (skill !== null && !this.isEntered) {
            const div: any = e.target;
            this.setState({
                className: 'in-' + div.dataset.dir
            })
            this.isEntered = true;
        }
    }

    private mouseLeaveHandler = (e: React.MouseEvent<HTMLDivElement>) => {
        const skill = this.skillRef.current;
        if (skill !== null) {
            this.isEntered = false;
            console.log(e.currentTarget);
            console.log(e.bubbles);
            console.log(e.target);
            console.log(e.type);
            const div: any = e.target;

            this.setState({
                className: 'out-' + div.dataset.dir
            })
        }
    }
};

// enum Directions {
//     top, right, bottom, left
// }

export default Section;
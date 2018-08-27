import * as React from 'react';
// import SVG from 'react-inlinesvg'

interface IProps {
    children: object,
    img?: SVGAElement,
    title?: string
}

interface ISectionState {
    className?: string,
    txt?: string,
    test?: string
}

// export enum HeaderLayout {
//     photoRight, photoLeft
// }

interface IDetectDirectionProps {
    onClick?: any;
    mouseOverHandler: any,
    mouseLeaveHandler: any
}

const DetectDirection = (props: IDetectDirectionProps) => {
    const { mouseOverHandler, mouseLeaveHandler, onClick } = props
    return (
        <div className="dir-detect"
            onAnimationEnd={mouseOverHandler}
            onAbort={mouseLeaveHandler}
            onMouseDown={onClick}
        >
            <div className="dir top" data-dir='top' />
            <div className="dir right" data-dir='right' />
            <div className="dir bottom" data-dir='bottom' />
            <div className="dir left" data-dir='left' />
        </div>
    )
}

class Section extends React.Component<IProps, ISectionState>{
    private itemRef: React.RefObject<HTMLDivElement>;
    private isEntered = false;
    constructor(props: IProps) {
        super(props);
        this.itemRef = React.createRef();
        this.state = {
            className: ''
        }
    }

    public teest = (e: any) => {
        const div: any = this.itemRef.current;
        console.log('e.target', e.target);
        console.log('this.itemRef', div);
        console.log('e.currentTarget', e.currentTarget);
    }

    public componentDidMount() {
        const div: any = this.itemRef.current;
        if (div !== null && div.parentNode.style.position === '') {
            console.log('Parent node position cant be empty');

            div.parentNode.style.position = 'relative'
        }
    }

    public render() {

        return (
            <div className={`amazing-item ${this.state.className}`}
                ref={this.itemRef}
                onMouseEnter={this.mouseOverHandler}
                onMouseLeave={this.mouseLeaveHandler}
            >
                <DetectDirection mouseOverHandler={this.mouseOverHandler} mouseLeaveHandler={this.mouseLeaveHandler} />
                <div className='hover-content--container' >
                    <div className='hover-content' >
                        {React.Children.only(this.props.children)}
                    </div>
                    <DetectDirection mouseOverHandler={this.mouseOverHandler} onClick={this.teest}  mouseLeaveHandler={this.mouseLeaveHandler} />
                </div>
                <div>Test: {this.state.className}</div>
            </div>
        );
    }
    private mouseOverHandler = (e: React.MouseEvent<HTMLDivElement>) => {
        const skill = this.itemRef.current;
        if (skill !== null && !this.isEntered) {
            // console.log('enter', e.target);

            const div: any = e.target;
            this.setState({
                className: 'in-' + div.dataset.dir
            })
            this.isEntered = true;
        }
    }
    private mouseLeaveHandler = (e: React.MouseEvent<HTMLDivElement>) => {
        const skill = this.itemRef.current;
        if (skill !== null) {
            // console.log('leave', e.target);

            this.isEntered = false;
            const div: any = e.target;

            this.setState({
                className: 'out-' + div.dataset.dir
            })
        }
    }
};

export default Section;
import * as React from 'react';
// import SVG from 'react-inlinesvg'

interface ISectionState {
    className?: string,
    isEntered: boolean
}

class Section extends React.Component<any, ISectionState>{
    private itemRef: React.RefObject<HTMLDivElement>;
    constructor(props: any) {
        super(props);
        this.itemRef = React.createRef();
        this.state = {
            className: '',
            isEntered: false
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
                onMouseOver={this.mouseOverHandler}
                onMouseLeave={this.mouseLeaveHandler}
            >
                <div className='hover-content--container' >
                    <div className='hover-content' >
                        {
                            React.Children.map(this.props.children, (child: any) => {
                                React.cloneElement(child, this.props);
                            })
                        }
                    </div>
                </div>
                <div>Test: {this.state.className}</div>
            </div>
        );
    }

    private getDir = (div: HTMLDivElement, e: React.MouseEvent<HTMLDivElement>) => {
        const elem = div.getBoundingClientRect();
        const w = elem.width;
        const h = elem.height;
        const coordinates = { x: e.clientX, y: e.clientY }

        // calculate the x and y to get an angle to the center of the div from that x and y.
        // gets the x value relative to the center of the DIV and "normalize" it
        const x = (coordinates.x - elem.left - (w / 2)) * (w > h ? (h / w) : 1);
        const y = (coordinates.y - elem.top - (h / 2)) * (h > w ? (w / h) : 1);

        // the angle and the direction from where the mouse came in/went out clockwise (TRBL=0123);
        // first calculate the angle of the point,
        // add 180 deg to get rid of the negative values
        // divide by 90 to get the quadrant
        // add 3 and do a modulo by 4 to shift the quadrants to a proper clockwise TRBL (top/right/bottom/left) **/
        // const direction = Math.round((((Math.atan2(y, x) * (180 / Math.PI)) + 180) / 90) + 3) % 4;
        const direction = Math.round(Math.atan2(y, x) / 1.57079633 + 5) % 4;
        return direction;
    }
    private mouseOverHandler = (e: React.MouseEvent<HTMLDivElement>) => {
        const skill = this.itemRef.current;
        if (skill !== null && !this.state.isEntered) {
            const dirResult = this.getDir(skill, e);
            this.setState({
                className: 'in-' + Directions[dirResult],
                isEntered: true
            })
        }
    }
    private mouseLeaveHandler = (e: React.MouseEvent<HTMLDivElement>) => {
        const skill = this.itemRef.current;
        if (skill !== null) {
            const dirResult = this.getDir(skill, e);
            this.setState({
                className: 'out-' + Directions[dirResult],
                isEntered: false
            })
        }
    }
};

enum Directions {
    top, right, bottom, left
}

export default Section;
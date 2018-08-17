import * as React from 'react'
import './timeline.css'
import TimelineItem from './timelineItem';

interface ITimelineProps {
    children: any
}

interface ITimelineState {
    // items: [{ id: number, test: string }] | object[],
    items: Array<{ height: number, id: number }>,
    timelineMode: string
}

export default class Timeline extends React.Component<ITimelineProps, ITimelineState> {
    public static TimelineItem = TimelineItem;

    private pos = 0;
    private leftSideLastItemHeight = 0;
    private rightSideLastItemHeight = 0;
    private pinHeight = 30;

    constructor(props: ITimelineProps) {
        super(props);
        this.state = {
            items: [],
            timelineMode: 'onLeft'
        }
    }



    public componentDidMount() {
        window.addEventListener('resize', this.onWindowResizeHandler);
        this.setTimelineMode(document.body.clientWidth);

    }

    public componentWillUnmount() {
        window.removeEventListener('resize', this.onWindowResizeHandler);
    }

    public render() {
        return (
            <div className={`timeline ${this.state.timelineMode}`}>
                <div className="timeline__line" />
                {/* {this.props.children} */}
                {

                    React.Children.map(this.props.children, (Child: any, i: number) => {
                        let lastItemMargin = 0;
                        if (this.state.items.length > 0) {
                            if (i % 2 === 0) {
                                this.pos = this.leftSideLastItemHeight;
                                // pozycja dymku powinna być przesunięta o wysokość poprzedniego elementu
                                // po tej samej stronie - wysykość 2 pinów przed nim - margines
                                this.leftSideLastItemHeight = this.state.items[i].height - (2 * this.pinHeight);
                                this.leftSideLastItemHeight -= Math.min(this.leftSideLastItemHeight, this.rightSideLastItemHeight);
                            }
                            else {
                                this.pos = this.rightSideLastItemHeight;
                                this.rightSideLastItemHeight = this.state.items[i].height - (2 * this.pinHeight);
                                this.rightSideLastItemHeight -= Math.min(this.leftSideLastItemHeight, this.rightSideLastItemHeight);
                            }
                            if (i + 1 === this.props.children.length) {
                                lastItemMargin = this.state.items[i].height - (2 * this.pinHeight);
                            }
                        }

                        return React.cloneElement(Child, { getSize: this.getInfoSize, pos: this.pos, id: i, lastItemMargin });
                    })
                }
            </div>
        )
    }
    protected getInfoSize = (item: { height: number, id: number }) => {
        //     const newItems = this.state.items.slice();
        //     newItems.push(item);

        //     this.setState({
        //         items: newItems
        //     })
        // }
        this.state.items.push(item);
    }

    private onWindowResizeHandler = () => {
        this.setTimelineMode(document.body.clientWidth);
    }

    private setTimelineMode = (width: number) => {
        if (width >= 480) {
            this.setState({
                timelineMode: 'onBoth'
            })
        }
        else {
            this.setState({
                timelineMode: 'onLeft'
            })
        }
    }

}




// export default class Timeline extends React.Component<ITimelineProps> {
//     public static TimelineItem = TimelineItem;
//     private containerRef: any;
//     private children: object[];

//     constructor(props: ITimelineProps) {
//         super(props);
//         this.containerRef = React.createRef();
//         this.children = [];
//     }

//     public componentDidMount() {
//         const width = this.containerRef.current.clientWidth;
//         let lPos = 0;
//         let rPos = (width + this.props.children[1].props.desc.length) / 2;
//         let pos = 0;
//         this.children = React.Children.map(this.props.children, (ch: any,i:number) => {
//             if(i%2 === 0)
//             {
//                 pos = lPos;
//                 lPos += (width + ch.props.desc.length) / 2;
//             }
//             else{
//                 pos = rPos;
//                 rPos += (width + ch.props.desc.length) / 2;
//             }
//             return React.cloneElement(ch,{pos})
//         });
//         console.log(this.children);

//         this.forceUpdate();
//     }

//     public render() {
//         return (
//             <div className={`timeline`} ref={this.containerRef} >
//                 <div className="timeline__line" />
//                 {this.children}
//             </div>
//         )
//     }
// }
// 



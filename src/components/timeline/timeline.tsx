import * as React from 'react'
import './timeline.css'
import TimelineItem from './timelineItem';

interface ITimelineProps {
    children: any
}

export default class Timeline extends React.Component<ITimelineProps> {
    public static TimelineItem = TimelineItem;

    constructor(props: ITimelineProps) {
        super(props);
    }

    public render() {
        return (
            <div className={`timeline`}>
                <div className="timeline__line" />
               {this.props.children}
            </div>
        )
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



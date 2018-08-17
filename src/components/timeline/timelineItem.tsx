import * as React from 'react'

interface ITimelineProps {
    desc: string,
    id?:number,
    lastItemMargin?:number,
    pin?: any,
    pos?: number,
    getSize?: (item:  { height: number, id: number }) => void
}

class TimelineItem extends React.Component<ITimelineProps>
{
    // const getSize = (item:{id: number, test: string}) => {
    //     if (props.getSize !== undefined) {
    //         props.getSize({
    //             id: item.id,
    //             test: item.test
    //         })
    //     }

    // }
    public node: any;

    public componentDidMount() {
        
        if (this.props.getSize !== undefined &&  this.props.id !== undefined) {
            this.props.getSize({
                height: this.node.clientHeight,
                id: this.props.id
            })
        }
    }

    public render() {
        
        return (
            <>
                <div className="timeline__text" 
                style={{
                    marginBottom: `${this.props.lastItemMargin}px`,
                    marginTop: `${this.props.pos}px`
                }}
                >
                    <div className="pin">
                        {this.props.pin}
                    </div>
                    <div className="txt" ref={node => this.node = node}
                       
                    >
                        {this.props.desc}
                    </div>
                </div>
            </>
        )
    }
}

export default TimelineItem;
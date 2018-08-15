import * as React from 'react'

interface ITimelineProps {
    desc: string,
    pin?: any,
    pos?:number
}

const TimelineItem = (props: ITimelineProps) => {
    return (
        <>
            <div className="timeline__text" 
            // style={{
            //     transform: `translateY(${props.pos}px)`
            // }}
            >
                <div className="pin">
                    {props.pin}
                </div>
                <div className="txt">
                    {props.desc}
                </div>
            </div>
        </>
    )
}

export default TimelineItem;
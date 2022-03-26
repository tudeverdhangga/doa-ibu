import React from 'react';
import CountUp from "react-countup";
import VisibilitySensor from 'react-visibility-sensor';

const Item = props => {
    const {label, total} = props.data

    return (
        <>
            <CountUp end={total} redraw={true}>
                {({ countUpRef, start }) => (
                    <VisibilitySensor onChange={start} delayedCall>
                        <div className="textwidget">
                            <h3 className="text-xl font-bold">
                                <span ref={countUpRef} />
                            </h3>
                            <h4 className="text-xl">{label}</h4>
                        </div>
                    </VisibilitySensor>
                )}                
            </CountUp>
        </>
    )
}

export default Item
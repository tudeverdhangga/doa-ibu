import React, { useEffect, useState } from 'react';

const Item = props => {
    const {label, total, duration} = props.data
    const [count, setCount] = useState("0")

    useEffect(() => {
        let start = 0;
        const end = parseInt(total.substring(0,3))
        if (start === end) return;

        let totalMilSecDur = parseInt(duration);
        let incrementTime = (totalMilSecDur / end) * 1000;

        let timer = setInterval(() => {
            start += 1;
            setCount(String(start) + total.substring(3))
            if (start === end) clearInterval(timer)
        }, incrementTime);
    }, [total, duration]);

    return (
        <div className="textwidget">
            <h3 className="text-xl font-bold">{count}</h3>
            <h4 className="text-xl">{label}</h4>
        </div>
    )
}

export default Item
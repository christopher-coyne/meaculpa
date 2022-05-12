import React from 'react';

const AxisBottom = ({xScale, tickFormat, tickOffset = 3}) => {
    return (<>
    {xScale.ticks().map(tickValue => (
        <g className="tick" key={tickValue} transform={`translate(${xScale(tickValue)},0)`} >
            <line y2={400} />
            <text style={{ textAnchor: 'middle'}} dy=".71em" y={400 + tickOffset}>
                {tickFormat(tickValue)}
            </text>
        </g>
    ))}
    </>)
};

export default AxisBottom;

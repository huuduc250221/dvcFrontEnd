import React from 'react';
import './LayoutChart.css'

const LayoutChart = ( props) => {
    return (
        <div className='layout-chart'>
            <h2>{props.title}</h2>
            <hr/>
            {props.children}
        </div>
    );
};

export default LayoutChart;
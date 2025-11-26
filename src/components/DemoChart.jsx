// @ts-ignore
import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {Area, AreaChart, CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis} from "recharts";
import {demoArr} from "../constants/demoChartArr.js";




const DemoChart = () => {

    return (
        <LineChart width={400} height={400} data={demoArr}>
            <Tooltip/>
            <Legend  />
            <CartesianGrid strokeDasharray="3 5"/>
            <YAxis startOffset={1000}/>
            <XAxis dataKey="date" />
            <Line strokeWidth={3}  type='monotone' dataKey="limit" fill='#2CF2C7' stroke='#F22C2C' />
            <Line type='monotone' dataKey="recievedCalories" fill='#F22C2C' stroke='#2CF2C7'/>
        </LineChart>
    );
};

export default DemoChart;
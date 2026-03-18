// @ts-ignore
import React, {useCallback, useContext, useEffect, useMemo, useState} from 'react';
import {Area, AreaChart, CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis} from "recharts";
import {demoArr, demoArr2} from "../constants/demoChartArr.js";
import {UserDataContext} from "../App.jsx";
import {drawGraphics} from "../AppWrite/database.js";
import {tablesDB} from "../AppWrite/client.js";
import {Query} from "appwrite";

const DemoChart = ({session, userData}) => {


    const [userDataChartInfo, setUserDataChartInfo] = useState();

    const showChartData = async () => {

        if (session) {
            const data = await tablesDB.listRows({
                databaseId: "69b352200012700ad121",
                tableId: "2356245624572456",
                queries: [
                    Query.equal('$id', session.userId),
                ]
            })

            const test = JSON.parse(data.rows[0].dailyCalorieLimit).splice(1);
            console.log(test)
            setUserDataChartInfo(test);
        }
    }

    useEffect(() => {
        showChartData()
    }, [session, userData])

    return (
        userDataChartInfo && (
            <>
                <LineChart width={800} height={400} data={demoArr2}>
                    <Tooltip/>
                    <Legend  />
                    <CartesianGrid strokeDasharray="3 5"/>
                    <YAxis startOffset={1000}/>
                    <XAxis dataKey="date" />
                    <Line strokeWidth={3}  type='monotone' dataKey="currentLimit" fill='#2CF2C7' stroke='#F22C2C' />
                    <Line type='monotone' dataKey="eatenCalories" fill='#F22C2C' stroke='#2CF2C7'/>
                </LineChart>

                <LineChart width={800} height={400} data={userDataChartInfo}>
                    <Tooltip/>
                    <Legend  />
                    <CartesianGrid strokeDasharray="3 5"/>
                    <YAxis startOffset={1000}/>
                    <XAxis dataKey="date" />
                    <Line strokeWidth={3}  type='monotone' dataKey="currentLimit" fill='#2CF2C7' stroke='#F22C2C' />
                    <Line type='monotone' dataKey="eatenCalories" fill='#F22C2C' stroke='#2CF2C7'/>
                </LineChart>
            </>
        )
    );
};

export default DemoChart;
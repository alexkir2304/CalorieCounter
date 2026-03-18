import React, {useEffect} from 'react';

import DemoChart from "./DemoChart.jsx";

const Graphics = ({userData, session}) => {

    // console.log(userData);
    //
    // const testFunction = () => {
    //     console.log(userData.dailyCalorieLimit)
    //     const userHistory = JSON.parse(userData.dailyCalorieLimit)
    //     console.log(userHistory);
    // }
    //
    // useEffect(() => {
    //     testFunction()
    // },[])

    return (
        <>
            <DemoChart userData={userData} session={session}/>

        </>
    );
};

export default Graphics;
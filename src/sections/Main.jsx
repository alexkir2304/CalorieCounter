import React, {useEffect, useState} from 'react';
import Graphics from "../components/Graphics.jsx";
import FoodCalculator from "../components/FoodCalculator.jsx";
import HumanCalculator from "../components/HumanCalculator.jsx";
import {recordCalorieLimit} from "../AppWrite/database.js";

const Main = ({session, setUserData, userData}) => {

    const [dailyLimit, setDailyLimit] = useState(0);
    const [eatenCaloriesGlobal, setEatenCaloriesGlobal] = useState(0);

    // const handleLimit = (parametersResult) => {
    //     setDailyLimit(+parametersResult.toFixed(0))
    // }

    const handleCalories = (eatenCalories) => {
        setEatenCaloriesGlobal(eatenCalories)
    }

    // useEffect(() => {
    //     recordCalorieLimit(session, dailyLimit, setUserData);
    // },[dailyLimit]);

    return (
        <main className="main">
            {dailyLimit}
            {eatenCaloriesGlobal}

            <Graphics userData={userData} session={session}/>
            <FoodCalculator liftCalories={handleCalories} session={session} setUserData={setUserData}/>
            <HumanCalculator session={session} setUserData={setUserData} dailyLimit={dailyLimit} setDailyLimit={setDailyLimit} userData={userData}/>
        </main>
    );
};

export default Main;
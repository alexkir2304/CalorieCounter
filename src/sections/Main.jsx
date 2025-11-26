import React, {useState} from 'react';
import Graphics from "../components/Graphics.jsx";
import FoodCalculator from "../components/FoodCalculator.jsx";
import HumanCalculator from "../components/HumanCalculator.jsx";

const Main = () => {

    const [dailyLimit, setDailyLimit] = useState(0);
    const [eatenCaloriesGlobal, setEatenCaloriesGlobal] = useState(0);

    const handleLimit = (parametersResult) => {
        setDailyLimit(+parametersResult.toFixed(0))
    }

    const handleCalories = (eatenCalories) => {

        setEatenCaloriesGlobal(eatenCalories)
    }

    return (
        <main className="main">
            {dailyLimit}
            {eatenCaloriesGlobal}

            <Graphics/>
            <FoodCalculator liftCalories={handleCalories}/>
            <HumanCalculator liftLimit={handleLimit} />
        </main>
    );
};

export default Main;
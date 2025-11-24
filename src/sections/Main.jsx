import React from 'react';
import Graphics from "../components/Graphics.jsx";
import FoodCalculator from "../components/FoodCalculator.jsx";
import HumanCalculator from "../components/HumanCalculator.jsx";

const Main = () => {
    return (
        <main className="main">
            <Graphics/>
            <FoodCalculator/>
            <HumanCalculator/>
        </main>
    );
};

export default Main;
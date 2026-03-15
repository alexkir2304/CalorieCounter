import {Databases, ID, Operator, Query} from "appwrite";
import {client, database, storage, tablesDB} from "./client.js";

export const createNewUserRow = async (session, setUserData) => {

    const isUserRowAlreadyExists = await tablesDB.listRows({
        databaseId: "69b352200012700ad121",
        tableId: "2356245624572456",
        queries: [
            Query.equal('$id', session.userId),
        ]
    })

    setUserData(isUserRowAlreadyExists.rows[0])

    if (isUserRowAlreadyExists.total === 0) {                            //if the user row exists, do nothing, otherwise create a new row for this user

        const test = []

        try {
            const arr = await tablesDB.createRow({
                databaseId: "69b352200012700ad121",
                tableId: "2356245624572456",
                // rowId: "69b35f5e000819c7dad4",
                rowId: session.userId,
                data: {
                    userCalorieHistory: '[{"date":0,"calories":0}]',
                }
            });
            test.push(arr);
            console.log(test);
        }   catch (error) {
            console.log(error);
        } finally {
            setUserData(test[0])
            // console.log(test[0].rows[0])
            console.log("a new user row has been created");
        }
    }
}

export const recordCalorieLimit = async (session, parametersResult, setUserData, counter, setDailyLimit, userData) => {

    const result = +parametersResult * counter;
    console.log(result.toFixed(0));

    const userHistory = JSON.parse(userData.dailyCalorieLimit)
    console.log(userHistory);

    const date = new Date().toLocaleDateString();
    console.log(date);

    const newInfo = []

    if (userHistory[userHistory.length-1].date === date) {              //if tomorrow's info has been already filled by any function we leave this info and add a new record calorie limit
        const newHistoryElement = {
            date: date,
            eatenCalories: userHistory[userHistory.length-1].eatenCalories,
            currentLimit: +result.toFixed(0),
        }
        newInfo.push(newHistoryElement)
    } else {                                                            // if not, create a new element
        const newHistoryElement = {
            date: date,
            eatenCalories: '',
            currentLimit: +result.toFixed(0),
        }
        newInfo.push(newHistoryElement)
    }


    if (userHistory.findIndex(item => item.date == date) === -1) {
        userHistory.push(newInfo[0])
    } else {
        userHistory.pop()
        userHistory.push(newInfo[0])
    }

    const jsonedUserHistory = JSON.stringify(userHistory);

    const updatedData = await tablesDB.updateRow({
        databaseId: "69b352200012700ad121",
        tableId: "2356245624572456",
        rowId: session.userId,
        data: {
            dailyCalorieLimit: jsonedUserHistory,
        }
    })
    setUserData(updatedData)
    setDailyLimit(+result.toFixed(0))
}

export const updateCalorieHistory2 = async (session, eatenCalories) => {
    console.log("update calorie history2");
}

export const updateCalorieHistory = async (session, eatenCalories, userData, setUserData) => {

    const userHistory = JSON.parse(userData.dailyCalorieLimit)
    console.log(userHistory);

    const date = new Date().toLocaleDateString();
    console.log(date);


    const newInfo = []

    if (userHistory[userHistory.length-1].date === date) {              //if tomorrow's info has been already filled by any function we leave this info and add a new record calorie limit
        const newHistoryElement = {
            date: date,
            eatenCalories: eatenCalories,
            currentLimit: userHistory[userHistory.length-1].currentLimit,
        }
        newInfo.push(newHistoryElement)
    } else {                                                            // if not, create a new element
        const newHistoryElement = {
            date: date,
            eatenCalories: eatenCalories,
            currentLimit: "",
        }
        newInfo.push(newHistoryElement)
    }

    if (userHistory.findIndex(item => item.date == date) === -1) {
        userHistory.push(newInfo[0])
    } else {
        userHistory.pop()
        userHistory.push(newInfo[0])
    }

    console.log(userHistory)

    const jsonedUserHistory = JSON.stringify(userHistory);

    const updatedData = await tablesDB.updateRow({
        databaseId: "69b352200012700ad121",
        tableId: "2356245624572456",
        rowId: session.userId,
        data: {
            dailyCalorieLimit: jsonedUserHistory,
        }
    })

    setUserData(updatedData)
}
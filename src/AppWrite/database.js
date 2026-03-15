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

    if (isUserRowAlreadyExists.total === 0) {                            //if the user exists, do nothing, otherwise create a new row for this user

        const test = []

        try {
            const arr = await tablesDB.createRow({
                databaseId: "69b352200012700ad121",
                tableId: "2356245624572456",
                // rowId: "69b35f5e000819c7dad4",
                rowId: session.userId,
                data: {
                    dailyCalorieLimit: 0,
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

export const recordCalorieLimit = async (session, parametersResult, setUserData, counter, setDailyLimit) => {

    const result = +parametersResult * counter;

    console.log(result.toFixed(0));

    const updatedData = await tablesDB.updateRow({
        databaseId: "69b352200012700ad121",
        tableId: "2356245624572456",
        rowId: session.userId,
        data: {
            dailyCalorieLimit: +result.toFixed(0),
        }
    })
    setUserData(updatedData)
    setDailyLimit(+result.toFixed(0))
}

export const updateCalorieHistory2 = async (session, eatenCalories) => {
    console.log("update calorie history2");
}

export const updateCalorieHistory = async (session, eatenCalories, userData) => {

    const userHistory = JSON.parse(userData.userCalorieHistory)
    console.log(userHistory);

    const date = new Date().toLocaleDateString();
    console.log(date);

    const newHistoryElement = {
        date: date,
        calories: eatenCalories,
    }

    if (userHistory.findIndex(item => item.date == date) === -1) {
        userHistory.push(newHistoryElement)
    } else {
        userHistory.pop()
        userHistory.push(newHistoryElement)
    }

    console.log(userHistory)

    const jsonedUserHistory = JSON.stringify(userHistory);

    await tablesDB.updateRow({
        databaseId: "69b352200012700ad121",
        tableId: "2356245624572456",
        rowId: session.userId,
        data: {
            userCalorieHistory: jsonedUserHistory,
        }
    })
}
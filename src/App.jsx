import Nav from "./sections/Nav.jsx";
import Main from "./sections/Main.jsx";
import {createContext, useContext, useEffect, useState} from "react";
import {account} from "./AppWrite/client.js";
import {createNewUserRow} from "./AppWrite/database.js";

export const UserDataInContext = createContext({});
export const SessionDataContext = createContext({});

function App() {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [session, setSession] = useState(null);
    const [accountData, setAccountData] = useState(null);
    const [userData, setUserData] = useState(null);

    const handleLogIn = async () => {

        try {
            const login = await account.getSession("current");
            login.current && setIsLoggedIn(true);
            setSession(login);

            const accountData = await account.get();
            setAccountData(accountData);

        }   catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        handleLogIn();
    }, []);

    useEffect(() => {
        session && createNewUserRow(session, setUserData);
    },[session, isLoggedIn]);



    return (
        <SessionDataContext value={session}>
            <UserDataInContext value={userData}>
                <Nav setIsLoggedIn={setIsLoggedIn} setSession={setSession} setAccountData={setAccountData}/>
                <Main session={session} userData={userData} setUserData={setUserData}/>
            </UserDataInContext>
        </SessionDataContext>
    );
}

export default App

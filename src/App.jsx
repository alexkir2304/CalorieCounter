import Nav from "./sections/Nav.jsx";
import Main from "./sections/Main.jsx";
import {createContext, useContext, useEffect, useState} from "react";
import {account} from "./AppWrite/client.js";

export const IsLoggedInWrapper = createContext({});

function App() {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [session, setSession] = useState(null);
    const [accountData, setAccountData] = useState(null);

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

    return (
        <IsLoggedInWrapper value={isLoggedIn}>
            <Nav setIsLoggedIn={setIsLoggedIn} setSession={setSession} setAccountData={setAccountData}/>
            <Main/>
        </IsLoggedInWrapper>
    );
}

export default App

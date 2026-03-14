import React, {useContext} from 'react';
import { SessionDataContext} from "../App.jsx";
import {logInWithGoogle, logOut} from "../AppWrite/auth.js";
import {createNewUserRow, recordCalorieLimit, updateCalorieHistory} from "../AppWrite/database.js";
const Nav = ({setIsLoggedIn, setSession, setAccountData}) => {

    // const isLoggedIn = useContext(IsLoggedInContext)
    const session = useContext(SessionDataContext)

    const handleLogOut = () => logOut(setIsLoggedIn, setSession, setAccountData);
    const handleLogin = () => logInWithGoogle(setIsLoggedIn)


    return (
        <nav className="nav">

            {/*{isLoggedIn ? (*/}
            {/*    <button onClick={handleLogOut}>LogOut</button>*/}
            {/*) : (*/}
            {/*    <button onClick={handleLogin}>LogIn</button>*/}
            {/*)}*/}

            <button onClick={handleLogOut}>LogOut</button>
            <button onClick={handleLogin}>LogIn</button>
            <button onClick={() => {
                setIsLoggedIn(false)
                setSession(null);
            }}>test
            </button>
            <button onClick={() => {
                updateCalorieHistory(session)
            }}>updateCalorieHistory
            </button>

        </nav>
    );
};

export default Nav;
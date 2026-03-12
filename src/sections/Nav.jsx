import React, {useContext} from 'react';
import {IsLoggedInWrapper} from "../App.jsx";
import {logInWithGoogle, logOut} from "../AppWrite/auth.js";
const Nav = ({setIsLoggedIn, setSession, setAccountData}) => {

    const isLoggedIn = useContext(IsLoggedInWrapper)

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
            }}>test</button>
        </nav>
    );
};

export default Nav;
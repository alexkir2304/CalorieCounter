import {account} from "./client.js";
import {OAuthProvider} from "appwrite";

export const  logInWithGoogle = async (setIsLoggedIn) => {
    try {
        await account.createOAuth2Session(
            OAuthProvider.Google,
            `${window.location.origin}/`,
            `${window.location.origin}/404`
        )

           } catch (error) {
        console.error("Error during OAuth2 session creation:", error);
        } finally {
        setIsLoggedIn(true);
    }

}

export const  logOut = async (setIsLoggedIn, setSession, setAccountData) => {
    try {
        await account.deleteSession("current");
    } catch (error) {
        console.error("Error during logging out", error);
    } finally {
        setIsLoggedIn(false);
        setSession(null);
        setAccountData(null);
    }

}
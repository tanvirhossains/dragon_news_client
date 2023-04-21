import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useState } from 'react';
import app from '../../Firebase';


export const AuthContext = createContext({ displayName: "tanvir" });
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState()



    const googleSignIn = (provider) => {
        return signInWithPopup(auth, provider)
    }

    // const currentUser = () => {

    // }

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)

    }

    const signInUser = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                // ...
                console.log(user)
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });
    }

    const logOut = () => {
        return signOut(auth)

    }

    onAuthStateChanged(auth, (newsUser) => {
        if (newsUser) {
            const uid = newsUser.uid;
            setUser(newsUser)
            console.log(newsUser)
        } else {

        }
    });
    console.log(user)


    const authInfo = { user, googleSignIn, logOut, createUser,signInUser }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
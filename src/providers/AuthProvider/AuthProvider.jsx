import React, { createContext, useEffect, useState } from 'react';

import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from '../../firebase.config';

export const AuthContext = createContext(null)

const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [latestNews, setLatestNews] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/categories/1')
            .then(res => res.json())
            .then(data => setLatestNews(data))
            .catch(err => console.error(err))
    }, []);

    
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }





    const authInfo = {
        latestNews,
        createUser,
        signIn,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
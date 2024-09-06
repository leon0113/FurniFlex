import React, { useContext, useState, useEffect, createContext } from "react";
import { auth } from "../firebase/firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

// Define the context
const AuthContext = createContext<any>(
    {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        agree: false,
    });

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [currentUser, setCurrentUser] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    const provider = new GoogleAuthProvider();

    // Sign in user with Google
    async function loginWithGoogle() {
        return signInWithPopup(auth, provider);
    }


    // Monitor authentication state and update accordingly
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user);
            setLoading(false);
        });

        return unsubscribe;
    }, []);

    // Sign up user with email and password
    async function signup(email: string, password: string) {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // Sign in user with email and password
    async function login(email: string, password: string) {
        return signInWithEmailAndPassword(auth, email, password);
    }

    // Logout the user
    function logout() {
        return signOut(auth);
    }

    const value = {
        currentUser,
        signup,
        login,
        logout,
        loginWithGoogle,
    };

    return (
        <AuthContext.Provider value={value} >
            {children}
        </AuthContext.Provider>
    );
}

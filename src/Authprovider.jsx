import React, { createContext, useEffect, useState } from 'react';
import { app } from './Firebase.confid';
import { 
    getAuth, 
    onAuthStateChanged, 
    signInWithEmailAndPassword, 
    signOut, 
    createUserWithEmailAndPassword, 
    GoogleAuthProvider, 
    signInWithPopup 
} from 'firebase/auth';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [cart, setCart] = useState([]);

    const provider = new GoogleAuthProvider();

    // Create a new user
    const createUser = async (email, password) => {
        setLoading(true);
        try {
            return await createUserWithEmailAndPassword(auth, email, password);
        } finally {
            setLoading(false);
        }
    };

    // Sign in with Google
    const signInWithGoogle = async () => {
        setLoading(true);
        try {
            return await signInWithPopup(auth, provider);
        } finally {
            setLoading(false);
        }
    };

    // Log in an existing user
    const loginUser = async (email, password) => {
        setLoading(true);
        try {
            return await signInWithEmailAndPassword(auth, email, password);
        } finally {
            setLoading(false);
        }
    };

    // Log out the user
    const logout = async () => {
        setLoading(true);
        try {
            return await signOut(auth);
        } finally {
            setLoading(false);
        }
    };

    // Fetch cart data if user is logged in
    useEffect(() => {
        if (user?.email) {
            fetch(`http://localhost:5000/Cart?email=${user.email}`)
                .then(res => res.json())
                .then(data => setCart(data))
                .catch(error => console.error('Error fetching cart data:', error));
        }
    }, [user]);

    // Track user authentication state
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    const authInfo = {
        user,
        loading,
        cart,
        createUser,
        loginUser,
        signInWithGoogle,
        logout
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

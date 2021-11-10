import { useEffect, useState } from 'react';
import initializationFirebase from "../Firebase/firebase.init";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged, signInWithPopup, GoogleAuthProvider, updateProfile, signOut } from "firebase/auth";

initializationFirebase()

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');
    // const [isAdmin, setIsAdmin] = useState(false);


    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    // handler to register
    const handlerRegisterToEmailPass = (email, password, name, history) => {
        setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const newUser = { email: email, displayName: name }
                setUser(newUser);
                updateProfile(auth.currentUser, {
                    displayName: name,
                }).then(() => {
                }).catch((error) => {
                });
                setAuthError('')
                history.push('/')
            })
            .catch((error) => {
                setAuthError(error.message)
            })
            .finally(() => setIsLoading(false));
    }

    // handler to login with email
    const handlerLoginWithEmailPass = (email, password, location, history) => {
        setIsLoading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const destination = location?.state?.from || "/";
                history.replace(destination);
                setAuthError('');
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));
    }
    // google sign in
    const handlerToGoogleLogin = (location, history) => {
        setIsLoading(true)
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                const destination = location?.state?.from || "/";
                history.replace(destination);
                setAuthError('');
            }).catch((error) => {
                setAuthError(error.message);
            }).finally(() => setIsLoading(false));
    }

    // Logout for email pass
    const logout = () => {
        setIsLoading(true)
        signOut(auth).then(() => {
            setAuthError('')
        }).catch((error) => {
            setAuthError(error.message)
        })
            .finally(() => setIsLoading(false));
    }



    // // is Admin
    // useEffect(() => {
    //     fetch(`https://whispering-garden-01955.herokuapp.com/users/${user.email}`)
    //         .then(res => res.json())
    //         .then(data => {
    //             setIsAdmin(data.admin)
    //         })
    // }, [user.email])

    // onAuthStateChanged
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
            else {
                setUser({})
            }
            setIsLoading(false)
        });
        return () => unsubscribed;
    }, [auth]);

    return {
        user,
        handlerRegisterToEmailPass,
        handlerLoginWithEmailPass,
        handlerToGoogleLogin,
        logout,
        // isAdmin,
        authError,
        isLoading,
    }
};

export default useFirebase;
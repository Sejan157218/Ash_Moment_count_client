import { useEffect, useState } from 'react';
import initializationFirebase from "../Firebase/firebase.init";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged, signInWithPopup, GoogleAuthProvider, updateProfile, signOut } from "firebase/auth";

initializationFirebase()

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');
    const [isAdmin, setIsAdmin] = useState(false)



    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    // handler to register
    const handlerRegisterToEmailPass = (email, password, name, history) => {
        setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const newUser = { email: email, displayName: name }
                setUser(newUser);
                saveUser(email, name, "POST")
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

    // handler to login with email and pass
    const handlerLoginWithEmailPass = (email, password, history, location) => {
        console.log(email, password, location, history);
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
    const handlerToGoogleLogin = (history, location) => {
        setIsLoading(true)
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                saveUser(user.email, user.displayName, "PUT")
                const destination = location?.state?.from || "/";
                history.replace(destination);
                setAuthError('');
            }).catch((error) => {
                setAuthError(error.message);
            }).finally(() => setIsLoading(false));
    }

    // Logout for email pass
    const SignOut = () => {
        setIsLoading(true)
        signOut(auth).then(() => {
            setAuthError('')
        }).catch((error) => {
            setAuthError(error.message)
        })
            .finally(() => setIsLoading(false));
    }


    // user save in mongoDb
    const saveUser = (email, displayName, method) => {
        const users = { email, displayName }
        fetch('http://localhost:9000/users', {
            method: method,
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(users)
        }).then(res => res.json())
            .then(data => console.log(data))
    }


    // find admin 
    useEffect(() => {

        fetch(`http://localhost:9000/user/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setIsAdmin(data.admin)
            })
    }, [user.email])
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
    console.log(isAdmin);
    return {
        user,
        handlerRegisterToEmailPass,
        handlerLoginWithEmailPass,
        handlerToGoogleLogin,
        SignOut,
        isAdmin,
        authError,
        isLoading,
    }
};

export default useFirebase;
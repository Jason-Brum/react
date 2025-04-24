import {
    createUserWithEmailAndPassword,
    updateProfile,
    signInWithEmailAndPassword,
    signOut,
} from 'firebase/auth';

import { auth } from "../firebase/config"; 
import { useState, useEffect } from 'react';


export const useAuthentication = () => {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(null); 
    const [cancelled, setCancelled] = useState(false);


    function checkIfIsCancelled() {
        if (cancelled) {
            return;
        }
    }

    const createUser = async (data) => {
        checkIfIsCancelled();

        setLoading(true);
        setError(null);

        try {
            const { user } = await createUserWithEmailAndPassword(
                auth,
                data.email,
                data.password
            );

            await updateProfile(user, {
                displayName: data.displayName,
            });

            setLoading(false);

            return user;

        } catch (error) {
            console.log(error.message);
            setLoading(false);
            setError(error.message);
        }
    }

    useEffect(() => {
        return () => setCancelled(true);
    }, []);

    return { 
        auth, 
        createUser, 
        error, 
        loading 
    };

};
import React from 'react'
import Login from './Login'
import Browse from './Browse'
import { useDispatch } from 'react-redux'
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { addUser, removeUser } from '../utils/userSlice';
import { useEffect } from 'react';

const Body = () => {
    const dispatch = useDispatch()
    const appRouter =  createBrowserRouter([
        {
            path: "/",
            element: <Login />
        },
        {
            path: "/browse",
            element: <Browse />
        }
    ])

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                
                const {uid, email, displayName, photoUrl} = user;
                dispatch(addUser({uid:uid, email:email, displayName:displayName, photoUrl: photoUrl}))
            } else {
                dispatch(removeUser());
            }
        })
    },[])
    return <div>
            <RouterProvider router={ appRouter }/>
        </div>
}
export default Body;


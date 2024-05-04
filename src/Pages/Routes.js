import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './Auth/Login'
import Register from './Auth/Register'
import Home from './Home/Home'
import NoPage from './NoPage'
import User from './User/User'


export default function Index() {
    return (
        <>
            <Routes>
                <Route path='/auth/'>
                    <Route path='login' element={<Login />} />
                    <Route path='register' element={<Register />} />
                </Route>
                <Route path='/' element={<Home />} />
                <Route path='/user' element={<User />} />
                <Route path='/*' element={<NoPage />} />
            </Routes>
        </>
    )
}

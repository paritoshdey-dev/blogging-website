import React from 'react'
import { useDispatch } from 'react-redux'
import authService from '../../appwrite/auth'
import { logout } from '../../store/authSlice'

function LogoutBtn() {
    const dispatch = useDispatch()

    const logoutHandler = () => {
        authService.logout().then(() => {
            dispatch(logout())
        })
    }

    return (
        <button
            className="inline-block px-5 py-2 rounded-full border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white transition-colors duration-300 shadow-sm"
            onClick={logoutHandler}
        >
            Logout
        </button>
    )
}

export default LogoutBtn

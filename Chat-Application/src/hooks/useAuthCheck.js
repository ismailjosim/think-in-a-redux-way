import { useEffect, useState } from 'react'
import { userLoggedIn } from '../redux/features/auth/authSlice'
import { useDispatch } from 'react-redux'

const useAuthCheck = () => {
    const dispatch = useDispatch()
    const [authChecked, setAuthChecked] = useState(false)

    useEffect(() => {
        const localAuth = localStorage.getItem('auth')
        if (localAuth) {
            const auth = JSON.parse(localAuth)
            if (auth?.accessToken && auth?.user) {
                dispatch(
                    userLoggedIn({
                        accessToken: auth?.accessToken,
                        user: auth?.user,
                    }),
                )
            }
        }
        setAuthChecked(true)
    }, [dispatch, setAuthChecked]);

    return authChecked;
}

export default useAuthCheck

import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loginAuthenticated } from '../redux/reducers/LoginReducer'

const useAuth = () => {
    const dispatch = useDispatch()
    const { success } = useSelector(state => state.user)

    useEffect(() => {
        if (!success && localStorage.getItem('isLogin')=='true') {
            dispatch(loginAuthenticated)
        }
    },[])
    return success
}

export default useAuth
import axios from 'axios'

const initialState = {
    user:{username:'',
    fullname:'',
    avatar:'',
    email:'',
    telephone:'',},
    fetchSuccess:false,
    err:'',
    

}
const fetchUserAction = user => ( {
    type: 'FETCH_USER',
    payload: user
})

const fetchUserFailure = err => ({
    type:'FETCH_USER_FAILure',
    err:err,
})

export const fetchUser = ()=>  dispatch => {
    axios.get('/api/v1/auth/me')
        .then(res => dispatch(fetchUserAction(res)))
        .catch(err => dispatch(fetchUserFailure(err)))
}

const usersReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'FETCH_USER':
            return {
                ...state,
                user:{...action.payload},
                fetchSuccess:true,            
            }
        case 'FETCH_USER_FAILURE':
            return {
                ...state,
                fetchSuccess:false,
                err:action.payload,
            }
        default : return state
    }   
}

export default usersReducer
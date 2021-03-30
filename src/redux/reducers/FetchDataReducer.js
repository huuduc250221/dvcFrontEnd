import axios from 'axios'
import qs from 'query-string'

import {FETCH_FAILURE,FETCH_REQUEST,FETCH_SUCCESS} from '../constant/Action.type'

const initState = {
    loading:false,
    data:[],
    err:''
}

const fetchReques = () => ({
    type:FETCH_REQUEST
})

const fetchSuccess = (data) => ({
    type:FETCH_SUCCESS,
    payload:data
})

const fetchFailure = (error) => ({
    type:FETCH_FAILURE,
    payload:error
})

export const fetchData = (dataFilter) => async (dispatch) => {
    dispatch(fetchReques())
    let url = 'https://api.mocki.io/v1/59f94f8b/'
    // url+=dataFilter.name + qs.stringify({filter:qs.stringify(dataFilter.filter),page:qs.stringify(dataFilter.page)})
    url += dataFilter
    console.log(url)
    await axios.get(url)
            .then(res => dispatch(fetchSuccess(res.data)))
            .catch(err => dispatch(fetchFailure(err.message)))
}

export const loadDataReducer = (state=initState, action) => {
    switch(action.type) {
        case FETCH_REQUEST:
            return {...state,
            loading:true,
            data:[],
            err:''
        }
        case FETCH_SUCCESS :
            return {
                ...state,
                loading:false,
                data:action.payload,
                err:''
            }
        case FETCH_FAILURE :
            return {
                ...state,
                loading:false,
                data:[],
                err:action.payload
            }
        default :
        return state
    }
}
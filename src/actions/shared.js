import { getInitialData } from '../utils/api'
import {receiveQuestion} from './questions'
import {receiveUser} from './users'
import { showLoading, hideLoading } from 'react-redux-loading-bar'


export function handleInitialData () {
    return (dispatch) => {
        dispatch (showLoading())
        return getInitialData()
        .then (({questions, users})=>{
            dispatch(receiveQuestion(questions))
            dispatch(receiveUser(users))
            dispatch(hideLoading())
        })
    }
}
import { saveQuestion, saveQuestionAnswer} from '../utils/api'
import { showLoading, hideLoading } from 'react-redux-loading-bar'


export const RECEIVE_QUESTION = 'RECEIVE_QUESTION'
export const ADD_QUESTION = 'ADD_QUESTION'
export const QUESTION_ANSWER = 'QUESTION_ANSWER'



function newQuestion (question) {
    return {
        type:ADD_QUESTION,
        question,
    }
}

export function handleNewQuestion(textOptionOne, textOptionTwo) {
   return (dispatch, getState) => {
        const { authedUser } = getState()
        dispatch (showLoading())
        
        return saveQuestion ({
            textOptionOne,
            textOptionTwo,
            author:authedUser
        })
        .then((question) => dispatch (newQuestion(question)))
        .then(()=> dispatch(hideLoading()))
    }
}

export function receiveQuestion (questions){
    return {
        type:RECEIVE_QUESTION,
        questions,
    }
}
function saveQnAnswer (id, authedUser, answer) {
    return{
        type:QUESTION_ANSWER,
        id,
        authedUser,
        answer
    }
}

export function handleSaveQnAnswer(info) {
    return (dispatch) => {
        dispatch(saveQnAnswer(info))
        return saveQuestionAnswer(info)
        .catch((e) => {
            console.warn('Error in handleSaveQnAnswer: ', e)
            dispatch(saveQnAnswer(info))
        })
    }
}
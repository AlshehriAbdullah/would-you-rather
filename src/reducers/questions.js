import {
    RECEIVE_QUESTION,
    ADD_QUESTION,
    QUESTION_ANSWER
} from '../actions/questions'

export default function questions(state ={}, action) {
    switch (action.type) {
        case RECEIVE_QUESTION:
            return {
                ...state,
                ...action.questions
            }
            case ADD_QUESTION:
                return {
                    ...state,
                    [action.questions.id]:action.questions
                }
            
                case QUESTION_ANSWER:
                    const aId = action.id
                    const aAnswer = action.answer
                    return{
                    ...state,
                    [aId] : {
                        ...state[aId],
                        [aAnswer]:{
                            ...state[aId][aAnswer] ,
                            votes: state[aId][aAnswer].votes.concat([action.authedUser])
                            }
                        }
                    }                    
                    default:
                    return state
    }
}
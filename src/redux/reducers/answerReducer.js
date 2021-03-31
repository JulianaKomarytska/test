import {SAVE_ANSWER, DISABLE_EDIT_ANSWER, REMOVE_ANSWER} from "../consts";

const initialState={
    answers: {},
    canEditAnswer:{
        DEFAULT: true
    }
}

export const answerReducer = (state = initialState, action) => {
    let newAnswers

    switch (action.type) {
        case SAVE_ANSWER:
            let currAnswer = state.answers[action.payload.index] || []
            newAnswers = {
                [action.payload.index]: action.payload.multiselect? [...currAnswer, action.payload.value]: action.payload.value
            }
            return {...state, answers: {
                ...state.answers,
                ...newAnswers}
            }
        case DISABLE_EDIT_ANSWER:
            return{...state, canEditAnswer: {
                ...state.canEditAnswer,
                [action.payload]: false
            }}
        case REMOVE_ANSWER:
            let prevAnswer = state.answers[action.payload.index] || []
            newAnswers = {
                [action.payload.index]: action.payload.multiselect? prevAnswer.filter(i=>i !== action.payload.value): null
            }
            return {...state, answers: {
                    ...state.answers,
                    ...newAnswers}
            }


        default: return state
    }
}
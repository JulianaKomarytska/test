import {GET_TEST, RUN_TEST, SET_TEST_TIME, SWITCH_QUESTION} from "../consts";

const initialState={
    tests: [],
    currentTestIndex: 0,
    testsTimers:{},
    didTestRun: false
}

export const testReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_TEST:
            return {...state, tests: action.payload};
        case RUN_TEST:
            return  {...state, didTestRun: action.payload};
        case SWITCH_QUESTION:
            return {...state, currentTestIndex: state.currentTestIndex + action.payload}
        case SET_TEST_TIME:
            return {
                ...state, testsTimers: {
                    ...state.testsTimers,
                    [action.payload.test]: action.payload.time
                }
            }
        default: return state
    }
}
import {combineReducers} from "redux";
import {testReducer} from "./reducers/testReduser";
import {answerReducer} from "./reducers/answerReducer";

export const rootReducer = combineReducers({
    tests: testReducer,
    answers: answerReducer
})
import {GET_TEST, RUN_TEST, SET_TEST_TIME, SWITCH_QUESTION} from "../consts";

export function getTest() {
    return async dispatch =>{
        const json = await fetch('quiz.json')
            .then(response => response.json())
        dispatch({type: GET_TEST, payload: json})
    }
}

export function runTest(testRun) {
    return {
        type: RUN_TEST,
        payload: testRun
    }
}

export function nextTest() {
    console.log('-------- nextTest------');

    return {
        type: SWITCH_QUESTION,
        payload: 1
    }
}

export function prevTest() {
    console.log('-------- prevTest------');
    return {
        type: SWITCH_QUESTION,
        payload: -1
    }
}

export function setCurrentTestTime(test, time) {
    return{
        type: SET_TEST_TIME,
        payload: {test, time}
    }

}
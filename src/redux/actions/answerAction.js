import {SAVE_ANSWER, DISABLE_EDIT_ANSWER, REMOVE_ANSWER} from "../consts";

export function saveAnswer({index, value, multiselect}) {
    return {
        type: SAVE_ANSWER,
        payload: {
            index,
            value,
            multiselect
        }
    }

}

export function removeAnswer({index, value, multiselect}) {
    return {
        type: REMOVE_ANSWER,
        payload: {
            index,
            value,
            multiselect
        }
    }

}

export function disableEditAnswer(index) {
    return {
        type: DISABLE_EDIT_ANSWER,
        payload: index
    }
}
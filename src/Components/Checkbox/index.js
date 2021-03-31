import React from "react";
import {saveAnswer, removeAnswer} from "../../redux/actions/answerAction";
import {useDispatch} from "react-redux";
import {connect} from "react-redux";
import './styles.sass'

const Checkbox = (props) => {
    const dispatch = useDispatch()
    const type = props.multiselect ? 'checkbox' : 'radio'
    const isChecked = () => {
        return (props.answers.answers[props.name] && Boolean(~props.answers.answers[props.name].indexOf(String(props.value)))) || false
    }

    const saveAnswerHandler = (e) => {
        dispatch(
            saveAnswer(
                {
                    index: props.tests.currentTestIndex,
                    value: e.target.value,
                    multiselect: props.multiselect
                }
            )
        )
    }

    const removeAnswerHandler = e => {
        dispatch(
            removeAnswer(
                {
                    index: props.tests.currentTestIndex,
                    value: e.target.value,
                    multiselect: props.multiselect
                }
            )
        )
    }
    const handleInputDispatch = e => {
        e.target.checked ? saveAnswerHandler(e) : removeAnswerHandler(e)
    }
    return <div className={'checkbox'}>
        <input
            className={'checkbox_input'}
            type={type}
            id={props.value}
            name={props.name}
            checked={isChecked()}
            value={props.value}
            disabled={!(props.answers.canEditAnswer[props.name] ?? props.answers.canEditAnswer.DEFAULT)}
            onChange={handleInputDispatch}
        />
        <label className={'checkbox_label'} htmlFor={props.value}>{props.label}</label>
    </div>
}
const mapStateToProps = state => {
    return state
}
export default connect(mapStateToProps, null)(Checkbox)
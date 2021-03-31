import React from "react";
import {useDispatch} from "react-redux";
import {saveAnswer} from "../../redux/actions/answerAction";
import {connect} from "react-redux";
import './styles.sass'


const Input = (props) => {
    const value = props.answers.answers[props.tests.currentTestIndex] || ''
    const dispatch = useDispatch()
    const canEdit = props.answers.canEditAnswer.hasOwnProperty([props.tests.currentTestIndex])? props.answers.canEditAnswer[props.tests.currentTestIndex] : props.answers.canEditAnswer.DEFAULT

    const handleInputDispatch = e => dispatch(
        saveAnswer(
            {
                index: props.tests.currentTestIndex,
                value:  e.target.value
            }
        )
    )

    return <input
        value={value}
        disabled={!canEdit}
        onChange={handleInputDispatch}
        className={'input'}
    />
}


const mapStateToProps = state => {
    return state
}

export default connect(mapStateToProps, null)(Input)


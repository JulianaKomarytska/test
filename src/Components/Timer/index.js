import React, {useEffect} from "react";
import './styles.sass'
import {useDispatch, useSelector} from "react-redux";
import {disableEditAnswer} from "../../redux/actions/answerAction";
import {setCurrentTestTime} from "../../redux/actions/testAction";

const Timer = ({time, test}) => {
    const dispatch = useDispatch()
    let timer = useSelector(state => state.tests.testsTimers[test]) ?? time

    useEffect(() => {
        if (!timer) return;
        const timout = setInterval(_ => {
            timer  && dispatch(setCurrentTestTime(test, --timer))
            if (!timer) {
                clearInterval(timout)
                dispatch(disableEditAnswer(test))
            }
        }, 1000)
        return () => clearInterval(timout)
    }, [])

    const makeTimer = t => {
        let min = t / 60 | 0
        let sec = t % 60
        return `${min<10? "0" : ""}${min}:${sec<10? "0": ""}${sec}`
    }

    return <div className={'time'}>{makeTimer(timer)}</div>
}


export default Timer
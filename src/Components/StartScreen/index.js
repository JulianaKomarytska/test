import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {runTest} from "../../redux/actions/testAction";
import './styles.sass'

const StartScreen = () => {
    const dispatch = useDispatch()
    const run = useSelector(state => state.tests.didTestRun)
    const classes = ['startScreen']
    run && classes.push('activeTest')
    return <div className={classes.join(' ')}>
            <button onClick={()=>dispatch(runTest(!run))}>{run? "Stop test":'Run test'}</button>
        </div>
}

export default StartScreen
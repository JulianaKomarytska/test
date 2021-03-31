import React from 'react';
import TestItem from "../TestItem";
import StartScreen from "../StartScreen";
import {connect} from "react-redux";
import {getTest} from "../../redux/actions/testAction";

class Quiz extends React.Component{
    componentDidMount() {
        this.props.onGetTest()
    }

    render(){
        return <>
            <StartScreen/>
            { this.props.didTestRun &&  <TestItem test={this.props.tests[this.props.currentTestIndex]} index={this.props.currentTestIndex} lastIndex={this.props.tests.length-1}/> }
        </>
    }
}

const mapStateToProps = state => {
    return state.tests
}

const mapDispatchToProps = dispatch => {
    return {
        onGetTest: _ => {
            dispatch(getTest())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Quiz)
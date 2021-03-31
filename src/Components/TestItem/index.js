import React from 'react'
import {TEST} from "../../CONSTS/consts";
import Input from "../Input";
import Timer from "../Timer";
import Button from "../Button";
import {nextTest, prevTest} from "../../redux/actions/testAction";
import Checkbox from "../Checkbox";
import './styles.sass'

const TestItem = ({test, index, lastIndex}) => {
    const {question, type, image, time, options, multiselect} = test

    return <div className={'test_card'}>
        <div className={'test_card__question'}>{index+1} {question}</div>
        <div className={'test_card__wrapper'}>
            {image && <img className={'img'} src={image} alt={'test alt text'}/>}
            <div className={'test_card__answers'}>
                {type === TEST && options && options.length?
                    options.map((value, elIndex) => <Checkbox key={index + value} value={elIndex} label={value} name={index} multiselect={multiselect}/>) :
                    <Input/>
                }
            </div>
        </div>


        {time && <Timer key={index} time={time} test={index}/>}
        <div className={'test_card__btn_container'}>
            {index? <Button payload={prevTest}>Prev</Button>: null}
            {lastIndex !== index ? <Button payload={nextTest}>Next</Button>: null}
        </div>


    </div>
}

export default TestItem
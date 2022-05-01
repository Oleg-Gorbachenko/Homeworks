import React, {ChangeEvent, useState} from 'react';
import {requestOnTheServer} from "./bll/requestH13Reducer";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";


export const Request = () => {
    const [value, setValue] = useState('')
    let currentText = useSelector<AppStoreType, string>(state => state.requestH13.text)
    let dispatch = useDispatch()

    const buttonHandler = () => {
        dispatch(requestOnTheServer(value))
    }

    const checkboxHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }

    return (
        <>
            <div>
                <button onClick={buttonHandler}>+</button>
            </div>
            <div>
                <input type="checkbox" onChange={checkboxHandler}/>
            </div>
            <div>
                {currentText}
            </div>
        </>
    );
};

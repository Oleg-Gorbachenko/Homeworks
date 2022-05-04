import React, {ChangeEvent, useState} from 'react';
import {requestOnTheServer} from "./bll/requestH13Reducer";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";


export const Request = () => {
    const [isChecked, setIsChecked] = useState(false)
    let currentText = useSelector<AppStoreType, boolean>(state => state.requestH13.isChecked)
    let dispatch = useDispatch()

    const buttonHandler = () => {
        dispatch(requestOnTheServer(isChecked))
    }

    const checkboxHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setIsChecked(e.currentTarget.checked)
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

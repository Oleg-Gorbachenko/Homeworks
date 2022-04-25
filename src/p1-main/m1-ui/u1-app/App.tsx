import React from 'react'
import s from './App.module.css'
import {HW5} from "../../../p2-homeworks/h5/HW5";
import {useSelector} from "react-redux";
import {AppStoreType} from "../../../p2-homeworks/h10/bll/store";

export function App() {
    const theme = useSelector<AppStoreType, string>(state => state.theme.currentTheme)
    return (
        <div className={s[theme]}>
            <div>react homeworks:</div>
            <HW5/>
        </div>
    )
}



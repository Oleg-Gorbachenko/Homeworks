import React from "react";
import s from "./HW12.module.css";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";
import SuperRadio from "../h7/common/c6-SuperRadio/SuperRadio";
import {changeTheme} from "./bll/themeReducer";

function HW12() {
    const theme = useSelector<AppStoreType, string>(state => state.theme.currentTheme)
    const allThemes = useSelector<AppStoreType, Array<string>>(state => state.theme.themes)
    const dispatch = useDispatch()

    const onChangeCallback = (value: string) => {
        dispatch(changeTheme(value))
    }

    return (
        <div>
            <hr/>
            <span className={s[theme + '-text']}>
                homeworks 12
            </span>
            <hr/>
            <div>
                < SuperRadio name={'radio'}
                             options={allThemes}
                             value={theme}
                             onChangeOption={onChangeCallback}
                />
            </div>
            {/*should work (должно работать)*/}
            {/*SuperSelect or SuperRadio*/}
            <hr/>
        </div>
    );
}

export default HW12;

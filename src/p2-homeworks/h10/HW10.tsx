import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {loadingAC} from "./bll/loadingReducer";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "./bll/store";
import preloader from './assets/images/preloader.gif'
import s from './HW10.module.css'


function HW10() {

    const isLoading = useSelector<AppStoreType, boolean>(state => state.loading.isLoading)
    const dispatch = useDispatch()


    const setLoading = () => {
        // dispatch
        // setTimeout
        dispatch(loadingAC(true))
        console.log(isLoading)
        setTimeout(() => dispatch(loadingAC(false)), 1000)
        console.log(isLoading)
    };

    return (
        <div className={s.wrapper}>
            <hr/>
            homeworks 10

            {/*should work (должно работать)*/}
            {isLoading
                ? (
                    <img src={preloader} alt="preloader"/>
                ) : (
                    <div>
                        <SuperButton onClick={setLoading}>set loading...</SuperButton>
                    </div>
                )
            }

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr/>
        </div>
    )
}

export default HW10

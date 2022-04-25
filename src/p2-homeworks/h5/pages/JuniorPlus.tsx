import React from 'react'
import HW12 from "../../h12/HW12";
import {Provider} from "react-redux";
import store from "../../h10/bll/store";

export function JuniorPlus() {
    return (
        <div>
            {/*<HW11/>*/}
            <Provider store={store}>
                <HW12/>
            </Provider>
        </div>
    )
}
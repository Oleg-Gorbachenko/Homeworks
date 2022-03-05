import React from 'react'
import Header from './Header'
import {RoutesComponent} from './RoutesComponent'
import {HashRouter} from "react-router-dom";


export function HW5() {
    return (
        <HashRouter>
            <Header/>
            <RoutesComponent/>
        </HashRouter>
    )
}


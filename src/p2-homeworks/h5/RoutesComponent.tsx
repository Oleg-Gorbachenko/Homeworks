import React from 'react'
import {Route, Routes} from "react-router-dom";
import {PreJunior} from "./pages/PreJunior";
import {Error404} from "./pages/Error404";
import {Junior} from "./pages/Junior";
import {JuniorPlus} from "./pages/JuniorPlus";

export const PATH = {
    PRE_JUNIOR: "/",
    JUNIOR: "/junior",
    JUNIOR_PLUS: "/junior+",
    ERROR: "*"
}

export function RoutesComponent() {
    return (
        <Routes>
            <Route path={PATH.PRE_JUNIOR} element={<PreJunior/>}/>
            <Route path={PATH.JUNIOR} element={<Junior/>}/>
            <Route path={PATH.JUNIOR_PLUS} element={<JuniorPlus/>}/>
            <Route path={PATH.ERROR} element={<Error404/>}/>
        </Routes>
    )
}

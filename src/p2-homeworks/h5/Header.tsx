import React from 'react'
import {NavLink} from "react-router-dom";
import {PATH} from "./RoutesComponent";
import s from "./pages/MyPages.module.css"


function Header() {
    return (
        <div className={s.wrapper}>
            <NavLink to={PATH.PRE_JUNIOR} className={navData => navData.isActive ? s.active : s.item}>Pre-Junior</NavLink><br/>
            <NavLink to={PATH.JUNIOR} className={navData => navData.isActive ? s.active : s.item}>Junior</NavLink><br/>
            <NavLink to={PATH.JUNIOR_PLUS} className={navData => navData.isActive ? s.active : s.item}>Junior+</NavLink><br/>
        </div>
    )
}

export default Header

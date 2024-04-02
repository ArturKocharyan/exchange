import React from 'react'
import style from "./style.module.css"
import { IoSwapHorizontalSharp } from "react-icons/io5";

function NavBar() {
    return (
        <nav className={style.main_container} >
            <div className={style.nav_container} >
                <span className={style.logo_span} >
                    <span className={style.logo} ><IoSwapHorizontalSharp /></span>
                    <span><h1>EXCHANGE</h1></span>
                </span>
            </div>
        </nav>
    )
}

export default NavBar
import React from 'react'
import style from "./style.module.css"
import Logo from "../../asets/img/Logo.svg"

function NavBar() {
    return (
        <nav className={style.main_container} >
            <div className={style.nav_container} >
                <span className={style.logo_span} >
                    <img src={Logo} alt='Logo' />
                </span>
            </div>
        </nav>
    )
}

export default NavBar
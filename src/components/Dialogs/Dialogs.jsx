import React from "react";
import style from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const Dialogs = (props) => {
    return(
        <div className={style.dialogs}>
          <div className={style.dialogsItems}>
            <div className={style.dialog}>
              <NavLink to="/dialogs/1">Dmitry</NavLink>
            </div>
            <div className={`${style.dialog} ${style.active}`}>
              <NavLink to="/dialogs/2">Andrey</NavLink>
            </div>
            <div className={style.dialog}>
              <NavLink to="/dialogs/3">Valery</NavLink>
            </div>
            <div className={style.dialog}>
              <NavLink to="/dialogs/4">Sasha</NavLink>
            </div>
            <div className={style.dialog}>
              <NavLink to="/dialogs/5">Petr</NavLink>
            </div>
            <div className={style.dialog}>
              <NavLink to="/dialogs/6">Ivan</NavLink>
            </div>
          </div>
          <div className={style.messages}>
            <div className={style.message}>Hi</div>
            <div className={style.message}>How are you</div>
            <div className={style.message}>Fine</div>
          </div>
        </div>
    )
}

export default Dialogs
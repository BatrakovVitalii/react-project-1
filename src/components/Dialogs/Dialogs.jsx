import React from "react";
import style from './Dialogs.module.css';

const Dialogs = (props) => {
    return(
        <div className={style.dialogs}>
          <div className={style.dialogsItems}>
            <div className={style.dialog}>
              Dmitry
            </div>
            <div className={`${style.dialog} ${style.active}`}>
              Andrey
            </div>
            <div className={style.dialog}>
              Valery
            </div>
            <div className={style.dialog}>
              Sasha
            </div>
            <div className={style.dialog}>
              Petr
            </div>
            <div className={style.dialog}>
              Ivan
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
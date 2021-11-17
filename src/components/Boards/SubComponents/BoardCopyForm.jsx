import React, { useState } from 'react'
import style from './../Boards.module.css'
const BoardCopyForm = ({toggleCopyBoardStatus, hideOpts, ...props}) => {
const [value, setValue] = useState(props.boardTitle)
const onExitClicked = () => {
toggleCopyBoardStatus(false)  
hideOpts(false)
}
const onCopyBoard = (e) => {
e.preventDefault()
props.copyBoard(props.boardId, value)
onExitClicked()
}
const onBackClicked = () => {
toggleCopyBoardStatus(false)
}
return (
<div className={style.boardCopyWrap}>
  <div className={style.boardCopyHeader}>
    <button className={style.boardCopyBackBtn} onClick={onBackClicked}><i className="fas fa-angle-left"></i></button>
    <p className={style.boardCopyHeaderTitle}>Copy board</p>
    <button onClick={onExitClicked} className={style.boardCopyExitBtn}><i className="fas fa-times"></i></button>
  </div>
  <form className={style.boardCopyForm} onSubmit={onCopyBoard}>
    <label htmlFor="copyBoardInput" className={style.boardCopyInputLabel}>Title</label>
    <textarea autoFocus 
    type="text"
    id="copyBoardInput"
    className={style.boardCopyInput} 
    value={value}
    onChange={e=> setValue(e.target.value)}
    onFocus={e => e.target.select()}
    />
    <button className={style.boardCopyBtn}>Create board</button>
  </form>
</div>
)
}

export default BoardCopyForm
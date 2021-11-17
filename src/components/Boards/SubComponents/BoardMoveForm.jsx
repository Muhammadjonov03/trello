import React, { useState } from 'react'
import style from './../Boards.module.css'
const BoardMoveForm = (props) => {
  let boardOrders = [];
  for(let i = 1; i <= props.boardsLength; i++) {
    boardOrders.push(i)
  }
  const [orderValue, setOrderValue] = useState(1)
  const [folderValue, setFolderValue] = useState("Trello")
  const onMoveBoard = (e) => {
    setOrderValue(e.target.value)
    props.moveBoard(props.boardId, Number(e.target.value))
    props.toggleBoardMoveStatus(false)
    props.hideOpts(false)
  }
  return (
    <div className={style.boardMoveWrap}>
      <div className={style.boardMoveFolderWrap}>
        <span className={style.boardMoveSelectName}>Board</span>
        <select className={style.boardMoveFolder} value={folderValue} onChange={e => setFolderValue(e.target.value)}>
          <option>Trello</option>
        </select>
      </div>
      <div className={style.boardMoveOrderWrap}>
        <span className={style.boardMoveSelectName}>Position</span>
        <select
        value={orderValue}
        onChange={onMoveBoard}
        className={style.boardMoveOrder}>
          {
            boardOrders.map(option => <option key={option}>{option}</option>)
          }
        </select>
      </div>
    </div>
  )
}

export default BoardMoveForm

import React from 'react'
import style from './BoardOpts.module.css'
import BoardCopyForm from './../BoardCopyForm/BoardCopyForm';
import BoardMoveForm from './../BoardMoveForm/BoardMoveForm';
import BoardSortTasks from './../BoardSortTasks/BoardSortTasks';
const BoardOpts = (props) => {
const onAddTask = () => {
props.setNewTaskStatus(true, props.boardId)
props.hideOpts(false)
}
const onCopyBoardClicked = () => {
props.toggleCopyBoardStatus(true)
}
return (
<div className={style.boardHeaderOptsWrap}>
  {!props.copyBoardStatus &&(!props.isBoardMoving && (!props.itemsSorting && <>
    <div className={style.boardOptsHeader}>
      <p className={style.boardOptsHeaderText}>Settings of the board</p>
      <button className={style.boardOptsHeaderBtn} onClick={()=> props.hideOpts(false)}><i
          className="fas fa-times"></i></button>
    </div>
    <div className={style.boardOptsBody}>
      <button className={style.boardOptionBtn} onClick={onAddTask}>
        Add task...
      </button>
      <button onClick={onCopyBoardClicked} className={style.boardOptionBtn}>
        Copy board...
      </button>
      <button className={style.boardOptionBtn} onClick={()=> props.toggleBoardMoveStatus(true)}>
        Move board...
      </button>
      <button className={style.boardOptionBtn} onClick={()=> props.toggleBoardSortItemsStatus(true)}>
        Sort by
      </button>
    </div>
  </>))}
  {props.copyBoardStatus &&
  <BoardCopyForm copyBoard={props.copyBoard} hideOpts={props.hideOpts} boardId={props.boardId}
    boardTitle={props.boardTitle} toggleCopyBoardStatus={props.toggleCopyBoardStatus} />}
  {
  props.isBoardMoving &&
  <BoardMoveForm boardsLength={props.boardsLength} boardId={props.boardId} moveBoard={props.moveBoard}
    hideOpts={props.hideOpts} toggleBoardMoveStatus={props.toggleBoardMoveStatus} />
  }
  {props.itemsSorting &&
  <BoardSortTasks toggleBoardSortItemsStatus={props.toggleBoardSortItemsStatus} hideOpts={props.hideOpts}
    boardId={props.boardId} sortBoardItems={props.sortBoardItems} />}
</div>
)
}

export default BoardOpts
import React from 'react'
import style from './../Boards.module.css'
import BoardCopyForm from './BoardCopyForm';
import BoardMoveForm from './BoardMoveForm';
import BoardSortItems from './BoardSortItems';
function BoardOpts(props) {
  const onAddTask = () => {
    props.setNewTaskstatus(true, props.boardId)
    props.hideOpts(false)
  }
  const onCopyBoardClicked = () => {
    props.toggleCopyBoardStatus(true)
  }
  return (
    <div className={style.boardHeaderOptsWrap}>
      {!props.copyBoardStatus  &&(!props.isBoardMoving && (!props.itemsSorting && <>
      <div className={style.boardOptsHeader}>
        <p className={style.boardOptsHeaderText}>Settings of the board</p>
        <button className={style.boardOptsHeaderBtn} onClick={() => props.hideOpts(false)}><i className="fas fa-times"></i></button>
      </div>
      <div className={style.boardOptsBody}>
        <button className={style.boardOptionBtn} onClick={onAddTask}>
          Add task...
        </button>
        <button 
        onClick={onCopyBoardClicked}
        className={style.boardOptionBtn}>
          Copy board...
        </button>
        <button className={style.boardOptionBtn} onClick={() => props.toggleBoardMoveStatus(true)}>
          Move board...
        </button>
        <button className={style.boardOptionBtn} onClick={() => props.toggleBoardSortItemsStatus(true)}>
          Sort by
        </button>
      </div>
      </>))}
      {props.copyBoardStatus && <BoardCopyForm 
      copyBoard={props.copyBoard}
      hideOpts={props.hideOpts}
      boardId={props.boardId}
      boardTitle={props.boardTitle}
      toggleCopyBoardStatus={props.toggleCopyBoardStatus}/>}
      {
        props.isBoardMoving && <BoardMoveForm boardsLength={props.boardsLength} boardId={props.boardId} moveBoard={props.moveBoard}
        hideOpts={props.hideOpts} toggleBoardMoveStatus={props.toggleBoardMoveStatus}/>
      }
      {props.itemsSorting && <BoardSortItems toggleBoardSortItemsStatus={props.toggleBoardSortItemsStatus} hideOpts={props.hideOpts} 
      boardId={props.boardId} sortBoardItems={props.sortBoardItems}/>}
    </div>
  )
}

export default BoardOpts

import React, { useState } from 'react'
import style from './Boards.module.css'
import AddBoardInitializer from './../AddBoardInitializer/AddBoardInitializer';
import AddBoardForm from './../AddBoardForm/AddBoardForm';
import Board from './../Board/Board';
const Boards = (props) => {
const addBoard = ({newBoardTitle}) => {
props.addBoard(newBoardTitle)
props.addBoardStatusChange(false)
}
const [draggedBoard, setDraggedBoard] = useState(null)


return (
<div className={style.boardsWrap}>
  {
  props.boards.map(board => (
  <div id={board.id} key={board.id} className={style.placeholderWrap}draggable onDragOver={e=> {
    e.preventDefault()
    e.currentTarget.classList.add(style.show)
    }} 
    onDragEnter={e => {
    e.currentTarget.classList.add(style.show)
    props.moveBoardOnDrag( draggedBoard,Number(e.currentTarget.id) )
    }}
    onDrop={e => e.currentTarget.className = style.placeholderWrap}
    onDragLeave={e => e.currentTarget.className = style.placeholderWrap}>
    <div>
    <Board setDraggedBoard={setDraggedBoard} key={board.id} boardData={board}
      taskChangeActive={props.isTaskChangeActive} setTaskChangeActive={props.setTaskChangeActive} boardId={board.id}
      headerChange={props.onBoardHeaderInputChange} setTaskTitle={props.setTaskTitle}
      setNewTaskstatus={props.setNewTaskstatus} addNewTask={props.addNewTask}
      setTaskChangeDetails={props.setTaskChangeDetails} toggleCopyBoardStatus={props.toggleCopyBoardStatus}
      copyBoardStatus={props.copyBoardStatus} copyBoard={props.copyBoard} moveBoard={props.moveBoard}
      isBoardMoving={props.isBoardMoving} toggleBoardMoveStatus={props.toggleBoardMoveStatus}
      boardsLength={props.boards.length} itemsSorting={props.itemsSorting}
      toggleBoardSortItemsStatus={props.toggleBoardSortItemsStatus} sortBoardItems={props.sortBoardItems}
      onBoardDragOver={props.onBoardDragOver} />
      </div>
  </div>
  ))
  }
  {
  !props.addBoardStatus &&
  <AddBoardInitializer addBoardStatusChange={props.addBoardStatusChange} />
  }
  {
  props.addBoardStatus &&
  <AddBoardForm onSubmit={addBoard} addBoardStatusChange={props.addBoardStatusChange} />
  }
</div>
)
}

export default Boards
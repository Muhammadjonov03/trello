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
const [draggedTask, setDraggedTask] = useState(null)
const [prevBoard, setPrevBoard] = useState(null)
const dragOver = e => {
if(props.boardPlaceholderActive)  {
  e.preventDefault()
  e.currentTarget.classList.add(style.show)
}
  }
const dragEnter = e => {
  if(props.boardPlaceholderActive){
  e.currentTarget.classList.add(style.show)
  props.moveBoardOnDrag( draggedBoard,Number(e.currentTarget.id) )
  }
}
return (
<div className={style.boardsWrap}>
  {
  props.boards.map(board => (
  <div id={board.id} key={board.id} className={style.placeholderWrap} draggable={true} onDragOver={dragOver} 
    onDragEnter={dragEnter}
    onDrop={e => e.currentTarget.className = style.placeholderWrap}
    onDragLeave={e => e.currentTarget.className = style.placeholderWrap}>
    <Board setDraggedBoard={setDraggedBoard} key={board.id} boardData={board}
      taskChangeActive={props.isTaskChangeActive} setTaskChangeActive={props.setTaskChangeActive} boardId={board.id}
      headerChange={props.onBoardHeaderInputChange} setTaskTitle={props.setTaskTitle}
      setNewTaskstatus={props.setNewTaskstatus} addNewTask={props.addNewTask}
      setTaskChangeDetails={props.setTaskChangeDetails} toggleCopyBoardStatus={props.toggleCopyBoardStatus}
      copyBoardStatus={props.copyBoardStatus} copyBoard={props.copyBoard} moveBoard={props.moveBoard}
      isBoardMoving={props.isBoardMoving} toggleBoardMoveStatus={props.toggleBoardMoveStatus}
      boardsLength={props.boards.length} itemsSorting={props.itemsSorting}
      toggleBoardSortItemsStatus={props.toggleBoardSortItemsStatus} sortBoardItems={props.sortBoardItems}
      onBoardDragOver={props.onBoardDragOver} toggleBoardPlaceholder={props.toggleBoardPlaceholder} moveTaskOnDrag={props.moveTaskOnDrag}
      boardPlaceholderActive={props.boardPlaceholderActive} draggedTask={draggedTask} prevBoard={prevBoard} 
      setDraggedTask={setDraggedTask} setPrevBoard={setPrevBoard} willBoardAccept={props.willBoardAccept} toggleBoardAcceptStatus={props.toggleBoardAcceptStatus}
      moveTaskOnHovering={props.moveTaskOnHovering} 
      />
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
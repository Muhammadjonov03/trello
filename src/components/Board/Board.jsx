import React, { useState } from 'react'
import style from './Board.module.css'
import BoardTasksList from './../BoardTasksList/BoardTasksList';
import BoardHeader from './../BoardHeader/BoardHeader';
import AddBoardTaskForm from './../AddBoardTask/AddBoardTaskForm';
import AddBoardTaskBtn from './../AddBoardTask/AddBoardTaskBtn';
import BoardOpts from './../BoardOpts/BoardOpts';


const Board = ({boardData, ...props}) => {
  const [optsShown, setOptsShown] = useState(false)
  // willBoardAccept={props.willBoardAccept} toggleBoardAcceptStatus={props.toggleBoardAcceptStatus}
  const onDragStart = e => {
    props.toggleBoardPlaceholder(true)
    e.currentTarget.classList.add(style.boardDragged)
    setTimeout(() => {
      e.target.classList.add(style.hideBoard)
    }, 0);
    props.setDraggedBoard(e.target.id - 0)

    }
  const onDragEnd = e => {
    e.currentTarget.className = style.boardWrapper
    props.toggleBoardPlaceholder(false)
  }

const onDragOver = (e) => {
  e.preventDefault()
}

const dropHandler = e => {
  if(props.willBoardAccept){
    e.preventDefault()
    props.moveTaskOnDrag(props.prevBoard, boardData, props.draggedTask);
  }
  }
  return (
      <div id={boardData.id} 
          className={style.boardWrapper} 
          draggable={true}
          onDragOver={onDragOver}
          onDragStart={onDragStart} 
          onDrop={dropHandler}
          onDragEnd={onDragEnd}>
      <BoardHeader 
      title={boardData.title} 
      headerChange={props.headerChange} 
      id={boardData.id} 
      showOpts={setOptsShown}/>
      <div className={style.boardBody}>
      <BoardTasksList
        tasks={boardData.tasks}
        boardId={props.boardId}
        isTaskChangeActive={props.taskChangeActive}
        setTaskChangeActive={props.setTaskChangeActive}
        setTaskTitle={props.setTaskTitle}
        setTaskChangeDetails={props.setTaskChangeDetails}
        toggleBoardPlaceholder={props.toggleBoardPlaceholder}
        setDraggedTask={props.setDraggedTask}
        setPrevBoard={props.setPrevBoard}
        toggleBoardAcceptStatus={props.toggleBoardAcceptStatus}
        moveTaskOnHovering={props.moveTaskOnHovering}
        draggedTask={props.draggedTask}
        prevBoard={props.prevBoard}
        />
        {boardData.isNewTaskActive && <AddBoardTaskForm 
        addNewTask={props.addNewTask}
        boardId={boardData.id}
        setNewTaskstatus={props.setNewTaskstatus}
        />}
      </div>
      {
        !boardData.isNewTaskActive && <AddBoardTaskBtn setNewTaskstatus={props.setNewTaskstatus} boardId={boardData.id}/>
      }
      {optsShown && <BoardOpts hideOpts={setOptsShown} setNewTaskStatus={props.setNewTaskstatus} boardId={props.boardId} boardTitle={boardData.title}
                    toggleCopyBoardStatus={props.toggleCopyBoardStatus} copyBoardStatus={props.copyBoardStatus} copyBoard={props.copyBoard}
                    moveBoard={props.moveBoard} isBoardMoving={props.isBoardMoving} toggleBoardMoveStatus={props.toggleBoardMoveStatus}
                    boardsLength={props.boardsLength} itemsSorting={props.itemsSorting} toggleBoardSortItemsStatus={props.toggleBoardSortItemsStatus}
                    sortBoardItems={props.sortBoardItems}/>}
      </div>
  )
}

export default Board

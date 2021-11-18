import React, { useState } from 'react'
import style from "./../Boards.module.css"
import {AddBoardTaskForm, AddBoardTaskInitial} from './AddBoardTask';
import BoardHeader from './BoardHeader';
import BoardOpts from './BoardOpts';
import BoardTasksList from './BoardTasksList';

function BoardItem({boardData, ...props}) {
  const [optsShown, setOptsShown] = useState(false)
  return (
    <div id={boardData.id} className={style.boardWrapper}>
      <BoardHeader title={boardData.title} headerChange={props.headerChange} id={boardData.id} showOpts={setOptsShown}/>
      <div className={style.boardBody}>
        <BoardTasksList 
        tasks={boardData.tasks}
        boardId={props.boardId}
        isTaskChangeActive={props.taskChangeActive}
        setTaskChangeActive={props.setTaskChangeActive}
        setTaskTitle={props.setTaskTitle}
        setTaskChangeDetails={props.setTaskChangeDetails}
        />
        {boardData.isNewTaskActive && <AddBoardTaskForm 
        addNewTask={props.addNewTask}
        boardId={boardData.id}
        setNewTaskstatus={props.setNewTaskstatus}
        />} 
      </div>
      {
        !boardData.isNewTaskActive && <AddBoardTaskInitial setNewTaskstatus={props.setNewTaskstatus} boardId={boardData.id}/>
      }
      {optsShown && <BoardOpts hideOpts={setOptsShown} setNewTaskstatus={props.setNewTaskstatus} boardId={props.boardId} boardTitle={boardData.title}
                    toggleCopyBoardStatus={props.toggleCopyBoardStatus} copyBoardStatus={props.copyBoardStatus} copyBoard={props.copyBoard}
                    moveBoard={props.moveBoard} isBoardMoving={props.isBoardMoving} toggleBoardMoveStatus={props.toggleBoardMoveStatus}
                    boardsLength={props.boardsLength} itemsSorting={props.itemsSorting} toggleBoardSortItemsStatus={props.toggleBoardSortItemsStatus}
                    sortBoardItems={props.sortBoardItems}/>}
    </div>
  )
}

export default BoardItem

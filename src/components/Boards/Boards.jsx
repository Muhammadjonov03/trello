import React from 'react'
// import BoardItem from './SubComponents/BoardItem'
import style from './Boards.module.css'
import AddBoardInitializer from './../AddBoardInitializer/AddBoardInitializer';
import AddBoardForm from './../AddBoardForm/AddBoardForm';
import Board from './../Board/Board';
const Boards = (props) => {
  const addBoard = ({newBoardTitle}) => {
    props.addBoard(newBoardTitle)
    props.addBoardStatusChange(false)
  }
  return (
    <div className={style.boardsWrap}>
      {
        props.boards.map(board => (
          <Board 
          key={board.id}
          boardData={board} 
          taskChangeActive={props.isTaskChangeActive}
          setTaskChangeActive={props.setTaskChangeActive}
          boardId={board.id}
          headerChange={props.onBoardHeaderInputChange}
          setTaskTitle={props.setTaskTitle}
          setNewTaskstatus={props.setNewTaskstatus}
          addNewTask={props.addNewTask}
          setTaskChangeDetails={props.setTaskChangeDetails}
          toggleCopyBoardStatus={props.toggleCopyBoardStatus}
          copyBoardStatus={props.copyBoardStatus}
          copyBoard={props.copyBoard}
          moveBoard={props.moveBoard}
          isBoardMoving={props.isBoardMoving}
          toggleBoardMoveStatus={props.toggleBoardMoveStatus}
          boardsLength={props.boards.length}
          itemsSorting={props.itemsSorting}
          toggleBoardSortItemsStatus={props.toggleBoardSortItemsStatus}
          sortBoardItems={props.sortBoardItems}
          onBoardDragOver={props.onBoardDragOver}
          />
        ))
      }
      {
        !props.addBoardStatus && <AddBoardInitializer addBoardStatusChange={props.addBoardStatusChange}/>
      }
      {
        props.addBoardStatus && <AddBoardForm onSubmit={addBoard} addBoardStatusChange={props.addBoardStatusChange}/>
      }
    </div>
  )
}

export default Boards

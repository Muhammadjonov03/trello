import React from 'react'
import BoardTask from './BoardTask'
import style from './BoardTasks.module.css'
const BoardTasksList = (props) => {
  if(!props.tasks) {
    return null
  }
  return (
    <ul className={style.boardTasksList}>
      {
        props.tasks.map(task => (
          <BoardTask
          task={task}
          setTaskChangeActive={props.setTaskChangeActive}
          boardId={props.boardId}
          key={task.id}
          setTaskTitle={props.setTaskTitle}
          setTaskChangeDetails={props.setTaskChangeDetails}
          toggleBoardPlaceholder={props.toggleBoardPlaceholder}
          setPrevBoard={props.setPrevBoard}
          setDraggedTask={props.setDraggedTask}
          toggleBoardAcceptStatus={props.toggleBoardAcceptStatus}
          moveTaskOnHovering={props.moveTaskOnHovering}
          draggedTask={props.draggedTask}
          prevBoard={props.prevBoard}
          />
        ))
      }
    </ul>
  )
}

export default BoardTasksList

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
          />
        ))
      }
    </ul>
  )
}

export default BoardTasksList

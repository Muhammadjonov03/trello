import React from 'react'
import style from './../Boards.module.css'
import BoardTask from './BoardTask'
function BoardTasksList(props) {
  if(!props.tasks) {
    return null
  }
  return (
    <ul className={style.boardTasksList}>
      {
        props.tasks.map(task => (
          <BoardTask task={task} 
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

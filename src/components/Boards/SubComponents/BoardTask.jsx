import React from 'react'
import style from './../Boards.module.css'
function BoardTask({task, ...props}) {
  const onTaskChange = (isActive, e) => {
    props.setTaskChangeActive(isActive)
    const parent = e.target.offsetParent.offsetParent.getBoundingClientRect()
    props.setTaskChangeDetails(parent.left, parent.top, task.id, props.boardId, task.title)
    }
  return (
    <li className={style.boardTask}>
      <p className={style.boardTaskTitle}>{task.title}</p>
      <button 
      onClick={(e) => onTaskChange(true, e)}
      className={style.boardTaskEditBtn}
      ><i className="fas fa-pencil-alt"></i></button>
    </li>
  )
}

export default BoardTask

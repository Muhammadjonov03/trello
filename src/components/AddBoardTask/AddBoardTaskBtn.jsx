import React from 'react';
import style from './AddBoardTask.module.css';
const AddBoardTaskBtn = (props) => {
  const onStatusClick = () => {
    props.setNewTaskstatus(true, props.boardId)
  }
  return (
    <div className={style.addTaskinitialWrap}>
      <button 
      className={style.addTaskinitializer}
      onClick={onStatusClick}
      ><span>+</span>Add task</button>
      <button className={style.addTaskLayoutBtn}><i className="fas fa-columns"></i></button>
    </div>
  )
}
export default AddBoardTaskBtn
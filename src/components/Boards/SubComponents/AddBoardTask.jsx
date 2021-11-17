import React, { useState } from 'react';
import style from './../Boards.module.css';
export function AddBoardTaskForm({boardId,...props}) {
  const [value, setValue] = useState('')
  const onCancel = () => {
    props.setNewTaskstatus(false, boardId)
  }
  const onSubmit = () => {
    props.addNewTask(value,boardId)
    setValue('')
  }
  
      return <div className={style.newTaskWrap} >
    <div className={style.newTaskInputWrap}>
      <textarea
      placeholder="Enter new task title"
      type="text" 
      value={value}
      autoFocus={true}
      onChange={e => setValue(e.target.value)}
      className={style.newTaskInput}></textarea>
    </div>
    <div className={style.newTaskBtnsWrap}>
      <button 
      className={style.newTaskSubmitBtn}
      disabled={value === ''}
      onClick={onSubmit}
      >Add Task</button>
      <button 
      onClick={onCancel}
      className={style.newTaskCancelBtn}>
        <i className="fas fa-times"></i>
      </button>
      <button className={style.newTaskSetsBtn}><i className="fas fa-ellipsis-h"></i></button>
    </div>
  </div>
  }


export const AddBoardTaskInitial = (props) => {
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


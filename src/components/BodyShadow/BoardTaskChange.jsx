import React, { useState } from 'react'
import style from './TaskChange.module.css'
import BoardTaskOpts from './BoardTaskOpts';
import BoardAttachments from './BoardAttachments';
function BoardTaskChange({onEditModeCLose, taskChangeDetails,...props}) {
  const [value, setValue] = useState(taskChangeDetails.title)
  const onChangeHandler = e => {
    setValue(e.target.value)
  }
  const onSave = () => {
    props.setTaskChange(taskChangeDetails.taskId, taskChangeDetails.boardId, value)
    onEditModeCLose()
  }
  
  const onCancel = () => onEditModeCLose()
  return (
        <div className={style.boardTaskInputWrap} style={{top: taskChangeDetails.y, left: taskChangeDetails.x}}>
          <textarea
          value={value}
          onChange={onChangeHandler}
          type="text"
          autoFocus={true}
          onFocus={e => e.target.select()}
          className={style.boardTaskInput}
          />
          <div className={style.boardTaskInputBtnWrap}>
            <button
            onClick={onSave}
            className={`${style.boardTaskInputBtn} ${style.boardTaskSaveBtn}`}
            >Save</button>
            <button
            onClick={onCancel}
            className={`${style.boardTaskInputBtn} ${style.boardTaskCancelBtn}`}
            >Cancel</button>
          </div>
          <BoardTaskOpts toggleAddTaskAttachment={props.toggleAddTaskAttachment}/>
          {props.addTaskAttachment && <BoardAttachments isCreateAttachment={props.isCreateAttachment} fixedAttachments={props.fixedAttachments}
          toggleAddTaskAttachment={props.toggleAddTaskAttachment} toggleCrTaskAttachment={props.toggleCrTaskAttachment} 
          toggleChangeTaskAttachment={props.toggleChangeTaskAttachment} isChangeAttachment={props.isChangeAttachment} currentAttachment={props.currentAttachment}
          changeTaskAttachment={props.changeTaskAttachment} colors={props.colors}/>}
        </div>
  )
}

export default BoardTaskChange

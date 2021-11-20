import React, { useState } from 'react';
import BoardtaskOpts from '../BoardTaskOpts/BoardtaskOpts';
import style from './BoardTaskChange.module.css';
import BoardAttachments from './../BoardAttachments/BoardAttachments';
import AddWorkers from '../AddWorkers/AddWorkers';
const BoardTaskChange = ({onEditModeCLose, taskChangeDetails,...props}) => {
  const [value, setValue] = useState(taskChangeDetails.title)
  const onChangeHandler = e => {
    setValue(e.target.value)
  }
  const onSave = () => {
    props.setTaskChange(taskChangeDetails.taskId, taskChangeDetails.boardId, value)
    onEditModeCLose(false)
  }
  
  const onCancel = () => onEditModeCLose()
  return (
        <div className={style.boardTaskInputWrap} style={{top: taskChangeDetails.y, left: taskChangeDetails.x}}>
          <div>
            <textarea
            value={value}
            onChange={onChangeHandler}
            type="text"
            autoFocus={true}
            onFocus={e => e.target.select()}
            className={style.boardTaskInput}
            />
          </div>
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
          <BoardtaskOpts toggleAddTaskAttachment={props.toggleAddTaskAttachment} toggleAddWorkersStatus={props.toggleAddWorkersStatus}/>
          {props.addTaskAttachment && <BoardAttachments isCreateAttachment={props.isCreateAttachment} fixedAttachments={props.fixedAttachments}
          toggleAddTaskAttachment={props.toggleAddTaskAttachment} toggleCrTaskAttachment={props.toggleCrTaskAttachment} 
          toggleChangeTaskAttachment={props.toggleChangeTaskAttachment} isChangeAttachment={props.isChangeAttachment} currentAttachment={props.currentAttachment}
          colors={props.colors} changeAttachment={props.changeAttachment} createTaskAttachment={props.createTaskAttachment} taskDetails={props.taskDetails}
          deleteFixedAttachment={props.deleteFixedAttachment} />}
          {
            props.addWorkersStatus && <AddWorkers workers={props.workers} toggleAddWorkersStatus={props.toggleAddWorkersStatus} addWorkerToTask={props.addWorkerToTask} 
            taskDetails={taskChangeDetails}
            />
          }
        </div> 
  )
}

export default BoardTaskChange

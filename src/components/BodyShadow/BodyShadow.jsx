import React from 'react'
import style from './BodyShadow.module.css';
import BoardTaskChange from './BoardTaskChange';
function BodyShadow({taskChangeDetails,...props}) {
  const onEditModeCLose = () =>{
  props.setTaskChangeActive(false)
  props.toggleAddTaskAttachment(false)
}
  return (
    <div className={style.bodyShadowWrap}>
      <BoardTaskChange addTaskAttachment={props.addTaskAttachment} taskChangeDetails={taskChangeDetails} taskDetails={{taskId: taskChangeDetails.taskId, boardId: taskChangeDetails.boardId}}
      setTaskChange={props.setTaskChange} onEditModeCLose={props.setTaskChangeActive} isCreateAttachment={props.isCreateAttachment}
      fixedAttachments={props.fixedAttachments} toggleAddTaskAttachment={props.toggleAddTaskAttachment} 
      toggleCrTaskAttachment={props.toggleCrTaskAttachment} toggleChangeTaskAttachment={props.toggleChangeTaskAttachment} isChangeAttachment={props.isChangeAttachment}
      currentAttachment={props.currentAttachment} colors={props.colors} changeAttachment={props.changeAttachment} createTaskAttachment={props.createTaskAttachment}/>
      <button className={style.closeEditMode} onClick={onEditModeCLose}><i className="fas fa-times"></i></button>
    </div>
  )
}

export default BodyShadow

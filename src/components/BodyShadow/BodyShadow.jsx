import React from 'react'
import style from './BodyShadow.module.css';
import BoardTaskChange from './BoardTaskChange';
function BodyShadow({taskChangeDetails,...props}) {
  const onEditModeCLose = () => props.setTaskChangeActive(false)
  const onShadowClick = e => {
    if(e.target.classList.contains(style.bodyShadowWrap)) {
      onEditModeCLose()
    }
  }
  return (
    <div className={style.bodyShadowWrap} onClick={onShadowClick}>
      <BoardTaskChange addTaskAttachment={props.addTaskAttachment} taskChangeDetails={taskChangeDetails} 
      setTaskChange={props.setTaskChange} onEditModeCLose={onEditModeCLose} isCreateAttachment={props.isCreateAttachment}
      fixedAttachments={props.fixedAttachments} toggleAddTaskAttachment={props.toggleAddTaskAttachment} 
      toggleCrTaskAttachment={props.toggleCrTaskAttachment} toggleChangeTaskAttachment={props.toggleChangeTaskAttachment} isChangeAttachment={props.isChangeAttachment}
      currentAttachment={props.currentAttachment} changeTaskAttachment={props.changeTaskAttachment} colors={props.colors}/>
      <button className={style.closeEditMode} onClick={onEditModeCLose}><i className="fas fa-times"></i></button>
    </div>
  )
}

export default BodyShadow

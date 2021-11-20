import React, { useState } from 'react';
import style from './FixedAttachment.module.css';
const FixedAttachment = ({taskDetails, ...props}) => {
const [attachmentAdded, setAttachmentAdded] = useState(false)
const onAttachmentClicked = () => {
props.createAttachment(taskDetails.boardId, taskDetails.taskId, props.atach.name, props.atach.title)
setAttachmentAdded(true)
}
return (
<li className={style.fixedAttachment}>
  <button className={style.fixedAttachmentAdd} style={{backgroundColor: props.atach.color}}
    onClick={onAttachmentClicked}>
    {props.atach.title}
    {attachmentAdded && <span className={style.fixedAttachmentTick}><i className="fas fa-check"></i></span>}
    <span style={{backgroundColor: props.atach.color}} className={style.fixedAttachmentAddBg}></span>
  </button>
  <button className={style.fixedAttachmentChange} onClick={()=> props.toggleChangeTaskAttachment(true, props.atach.id)}>
    <i className="fas fa-pen"></i>
  </button>
</li>
)
}

export default FixedAttachment
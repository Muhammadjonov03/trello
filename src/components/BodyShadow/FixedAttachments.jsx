import React from 'react'
import style from './Attachments.module.css'
import FixedAttachment from './FixedAttachment';
const FixedAttachments = (props) => {
  return (
    <div className={style.fixedAttachmentsWrap}>
      <div className={style.fixedAttachmentsInner}>
        <input type="text" className={style.fixedAttachmentsInput} placeholder="Search attachments..."/>
      </div>
      <div className={style.fixedAttachmentsBody}>
        <p className={style.fixedAttachmentsBodyTitle}>Attachments</p>
        <ul className={style.fixedAttachmnetsList}>
          {
            props.fixedAttachments.map(at => <FixedAttachment  createAttachment={props.createTaskAttachment} taskDetails={props.taskDetails} key={at.id} atach={at} toggleChangeTaskAttachment={props.toggleChangeTaskAttachment}/>)
          }
        </ul>
        <button className={style.fixedAttachmentsCrBtn} onClick={() => props.toggleCrTaskAttachment(true)}>Create Attachment</button>
      </div>
    </div>
  )
}

export default FixedAttachments

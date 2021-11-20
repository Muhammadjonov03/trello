import React from 'react'
import style from './Attachments.module.css';
import FixedAttachments from '../BodyShadow/FixedAttachments';
import ChangeAttachment from '../BodyShadow/ChangeAttachment';
import CreateTaskAttachment from '../BodyShadow/CreateTaskAttachment';
const BoardMoveForm = (props) => {
  const onAttachmentsClosed = () => {
    props.toggleAddTaskAttachment(false)
  }
  const onAttachmentsBack = () => {
    if(props.isCreateAttachment){
    props.toggleCrTaskAttachment(false)}
    if(props.isChangeAttachment) {
      props.toggleChangeTaskAttachment(false)
    }
  }

  return (
    <div className={style.attachmentsWrap}>
      <div className={style.attachmentsHeader}>
        {(props.isCreateAttachment || props.isChangeAttachment)  && <button className={style.attachmentsBack} onClick={onAttachmentsBack}><i className="fas fa-angle-left"></i></button>}
        <p className={style.attachmentsHeaderTitle}>{props.isCreateAttachment ? 'Creating attachment' : props.isChangeAttachment ? 'Change attachment' : 'Attachments'}</p>
        <button className={style.attachmentsHeaderExit} onClick={onAttachmentsClosed}><i className="fas fa-times"></i></button>
      </div>
      <div className={style.attachmentsBody}>
      {!props.isChangeAttachment  && ( !props.isCreateAttachment && <FixedAttachments taskDetails={props.taskDetails} createTaskAttachment={props.createTaskAttachment} 
      fixedAttachments={props.fixedAttachments} toggleCrTaskAttachment={props.toggleCrTaskAttachment} toggleChangeTaskAttachment={props.toggleChangeTaskAttachment} />)}
      {props.isCreateAttachment && <CreateTaskAttachment colors={props.colors} createTaskAttachment={props.createTaskAttachment} taskDetails={props.taskDetails}
      toggleCrTaskAttachment={props.toggleCrTaskAttachment}/>}
      {props.isChangeAttachment && <ChangeAttachment changeAttachment={props.changeAttachment}
      attach={props.fixedAttachments.find(at => at.id === props.currentAttachment)} colors={props.colors} toggleChangeTaskAttachment={props.toggleChangeTaskAttachment}
      deleteFixedAttachment={props.deleteFixedAttachment}
      />}
      </div>
    </div>
  )
}

export default BoardMoveForm
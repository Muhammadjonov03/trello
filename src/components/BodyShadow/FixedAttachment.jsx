import React from 'react'
import style from './Attachments.module.css';
const FixedAttachment = (props) => {
  return (
    <li className={style.fixedAttachment}>
            <button className={style.fixedAttachmentAdd} style={{backgroundColor: props.atach.color}}>
            {props.atach.title}
            <span style={{backgroundColor: props.atach.color}} className={style.fixedAttachmentAddBg} ></span>
            </button>
            <button className={style.fixedAttachmentChange} onClick={() => props.toggleChangeTaskAttachment(true, props.atach.id)}>
              <i className="fas fa-pen"></i>
            </button>
  </li>
  )
}

export default FixedAttachment

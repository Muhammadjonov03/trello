import React, { useState } from 'react'
import style from './ChangeAttachment.module.css'
const ChangeAttachment = ({attach, ...props}) => {
  const [colorName, setColorName] = useState(attach.name)
  const [title, setTitle] = useState(attach.title)
  const onSubmit = () => {
    props.changeAttachment(attach.id, colorName, title)
  }
  const onDelete = () => {
    alert('Deleted')
  }
  return (
    <div>
      <div className={style.changedAttachmentInputWrap}>
        <span className={style.changedAttachmentTitle}>Title</span>
        <input className={style.changedAttachmentInput}
        autoFocus value={title} onChange={e => setTitle(e.target.value)}/>
      </div>
      <div className={style.changedAttachmentColorsWrap}>
        <p className={style.changedAttachmentColorsTitle}>
          Colors
        </p>
        <ul className={style.changedAttachmentColorsList}>
          {props.colors.map(color => <li className={style.changedAttachmentColorWrap} key={color.id}>
            {colorName === color.name && <span><i className="fas fa-check"></i></span>}
            <button className={style.changedAttachmentColor} style={{backgroundColor: color.color}} onClick={() => setColorName(color.name)}></button>
          </li>)}
        </ul>
      </div>
      <div className={style.changedAttachmentBtns}>
        <button className={style.changedAttachmentSave} onClick={onSubmit}>Save</button>
        <button className={style.changedAttachmentDelete} onClick={onDelete}>Delete</button>
      </div>
    </div>
  )
}

export default ChangeAttachment

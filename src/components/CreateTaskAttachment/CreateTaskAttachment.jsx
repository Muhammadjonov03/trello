import React, { useState } from 'react'
import style from './CreateTaskAttachment.module.css'
const CreateTaskAttachment = ({taskDetails,...props}) => {
  const [title, setTitle] = useState('')
  const [colorName, setColorName] = useState()
  const onSubmit = () => {
    props.createTaskAttachment(taskDetails.boardId, taskDetails.taskId, colorName, title)
    props.toggleCrTaskAttachment(false)
  }
return (
<div>
  <div className={style.changedAttachmentInputWrap}>
    <span className={style.changedAttachmentTitle}>Title</span>
    <input className={style.changedAttachmentInput} autoFocus value={title} onChange={e=> setTitle(e.target.value)}/>
  </div>
  <div className={style.changedAttachmentColorsWrap}>
    <p className={style.changedAttachmentColorsTitle}>
      Colors
    </p>
    <ul className={style.changedAttachmentColorsList}>
      {props.colors.map(color => <li className={style.changedAttachmentColorWrap} key={color.id}>
        {colorName === color.name && <span><i className="fas fa-check"></i></span>}
        <button className={style.changedAttachmentColor} style={{backgroundColor: color.color}} onClick={()=>
          setColorName(color.name)}></button>
      </li>)}
    </ul>
  </div>
  <div className={style.changedAttachmentBtns}>
    <button className={style.changedAttachmentSave} onClick={onSubmit}>Add</button>

  </div>
</div>
)
}

export default CreateTaskAttachment
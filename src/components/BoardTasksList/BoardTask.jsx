import React, { useState } from 'react'
import Worker from '../Worker/Worker';
import style from './BoardTasks.module.css'
const BoardTask = ({task, ...props}) => {
const onTaskChange = (isActive, e) => {
props.setTaskChangeActive(isActive);
const parent = e.target.offsetParent.offsetParent.getBoundingClientRect();
props.setTaskChangeDetails(parent.left, parent.top, task.id, props.boardId, task.title)
}
const [attachmentActive, setAttachmentActive] = useState(false)
const onAttClick = () => setAttachmentActive(!attachmentActive)

return (
<li className={style.boardTask}>
  <div className={style.attachmentsWrap}>
    {task.attachments && task.attachments.map(attachment =><span className={style.attachment + ' ' +
      (attachmentActive && style.attachmentActive)} style={{backgroundColor: attachment.color.color}}
      onClick={onAttClick}>
      {attachment.title}
    </span>)}
  </div>
  <p className={style.boardTaskTitle}>{task.title}</p>
      <div className={style.taskWorkers}>
      {task.assignedStaff.map(staff => <Worker key={staff.id} staff={staff}/>)}
      </div>
  <button onClick={(e)=> onTaskChange(true, e)}
    className={style.boardTaskEditBtn}
    >
    <i className="fas fa-pencil-alt"></i>
  </button>
</li>
)
}

export default BoardTask
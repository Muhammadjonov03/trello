import React from 'react'
import style from './TaskChange.module.css'
function BoardTaskOpts(props) {
  const onAttachmentsClicked = () => {
    props.toggleAddTaskAttachment(true)
  }
  return (
    <div className={style.boardTaskOptions}>
            <button className={style.boardTaskOption}>
              Open the card
            </button>
            <button className={style.boardTaskOption} onClick={onAttachmentsClicked}>
              Change attachments
            </button>
            <button className={style.boardTaskOption}>
                Change members
            </button>
            <button className={style.boardTaskOption}>
                Change wallpaper
            </button>
            <button className={style.boardTaskOption}>
                Move to
            </button>

    </div>
  )
}

export default BoardTaskOpts

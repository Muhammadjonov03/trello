import React from 'react';
import style from './BoardTaskOpts.module.css';
const BoardtaskOpts = (props) => {
  const onAttachmentsClicked = () => {
    props.toggleAddTaskAttachment(true)
  };
  const onAddChangeUsersClicked = () => {
    props.toggleAddWorkersStatus(true)
  };
  return (
    <div className={style.boardTaskOptions}>
            <button className={style.boardTaskOption}>
              Open the card
            </button>
            <button className={style.boardTaskOption} onClick={onAttachmentsClicked}>
              Change attachments
            </button>
            <button className={style.boardTaskOption} onClick={onAddChangeUsersClicked}>
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
};

export default BoardtaskOpts;

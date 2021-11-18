import React from 'react';
import style from './AddBoardInitializer.module.css'

const AddBoardInitializer = (props) => {
  return (
    <div className={style.newBoardBtnWrap}>
      <button
      className={style.newBoardBtn}
      onClick={() =>props.addBoardStatusChange(true)}
      ><span>+</span>Add one more board</button>
    </div>
  )
};

export default AddBoardInitializer

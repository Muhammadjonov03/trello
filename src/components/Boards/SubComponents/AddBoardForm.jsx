import React from 'react'
import { Field, reduxForm } from 'redux-form'
import style from './../Boards.module.css'
const AddBoardForm = ({addBoardStatusChange,...props}) => {
  const onCancel = () => addBoardStatusChange(false)
  return (
    <div >
    <form onSubmit={props.handleSubmit} className={style.newBoardForm} autoComplete="off">
          <Field
          type="text"
          component="input"
          placeholder="Enter board title"
          name="newBoardTitle"
          autoFocus
          className={style.newBoardFormInput}
          />
          <div className={style.newBoardFormBtns}>
            <button className={style.newBoardSubmitBtn}>Add board</button>
            <button className={style.newBoardCancelBtn} onClick={onCancel}><i className="fas fa-times"></i></button>
          </div>
    </form>
    </div>
  )
}

export default reduxForm({form: 'addBoard'})(AddBoardForm)

import React, { useState } from 'react'
import style from './../Boards.module.css'
function BoardHeader(props) {
  const [editMode, setEditMode] = useState(false)
  const [value, setValue] = useState(props.title)

  const activateEditMode = () => setEditMode(true)
  const deActivateEditMode = e => {
    props.headerChange(value, e.target.id)
    setEditMode(false)
  }
  const deActivateEditModeWithEnter = e => {
    if(e.keyCode === 13) {
      props.headerChange(value, e.target.id)
      setEditMode(false)
    }
  }
  const onInputChange = e => setValue(e.target.value)
  
  
  return (
    <div className={style.boardHeader}> 
      <div className={style.boardTitleWrap}>
        {!editMode && <p 
        onClick={activateEditMode}
        className={style.boardTitleFix}>
          {props.title}
        </p>}
        {
          editMode && <input 
          type="text" 
          className={style.boardTitleInput}
          value={value}
          autoFocus={true}
          onFocus={e => e.target.select()}
          onChange={onInputChange}
          onKeyUp={deActivateEditModeWithEnter}
          onBlur={deActivateEditMode}
          id={props.id}
          />
        }
      </div>
        <button type="button" 
        className={style.boardHeaderOptsBtn} 
        onClick={() => props.showOpts(true)}
        >
          <i className="fas fa-ellipsis-h"></i>
        </button>
</div>
  )
}

export default BoardHeader

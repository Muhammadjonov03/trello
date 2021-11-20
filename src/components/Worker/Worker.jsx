import React from 'react'
import style from './Worker.module.css'
const Worker = ({staff, ...props}) => {
  const name = staff.name.split(' ') 
  return (
    <div className={style.taskWorkerWrap}>
      <span className={style.taskWorker}title={staff.name}>{`${name[0][0]} ${name[1][0]}`}</span>
    </div>
  )
}

export default Worker

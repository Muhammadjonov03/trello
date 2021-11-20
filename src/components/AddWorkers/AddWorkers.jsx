import React from 'react'
import AddWorkersItem from '../AddWorkersItem/AddWorkersItem'
import style from './AddWorkers.module.css'
const AddWorkers = (props) => {
  return (
    <div className={style.addWorkersWrap}>
      <div className={style.addWorkersHeader}>
        <p className={style.addWorkersTitle}>Staff</p>
        <button className={style.addWorkersExit}><i className="fas fa-times" onClick={() => props.toggleAddWorkersStatus(false)}></i></button>
      </div>
      <div className={style.addWorkersBody}>
        <div className={style.addWorkersInputWrap}>
          <input type="text" className={style.addWorkersInput} placeholder="Search staff"/>
        </div>
        <div className={style.addWorkersContent}>
          <p className={style.addWorkersSubTitle}>Board participants</p>
          <ul className={style.addWorkersList}>
            {
            props.workers.map(w => <AddWorkersItem key={w.id}worker={w} taskDetails={props.taskDetails} addWorkerToTask={props.addWorkerToTask}/>)
            }
          </ul>
        </div>
      </div>
    </div>
  )
}

export default AddWorkers

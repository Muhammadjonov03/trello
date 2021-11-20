import React from 'react';
import style from './AddWorkersItem.module.css';
const AddWorkersItem = ({taskDetails, worker, ...props}) => {
const name = worker.name.split(' ')
const onAdd = () => props.addWorkerToTask(taskDetails.boardId, taskDetails.taskId, worker.id, true)  
const onRemove = () => props.addWorkerToTask(taskDetails.boardId, taskDetails.taskId, worker.id, false)  
const doesExist = worker.boards.some(b => b.id === taskDetails.boardId && b.tasks.some(t => t.id === taskDetails.taskId))
return (
<li className={style.workerWrap}>
  <button className={style.workerBtn} onClick={() => {
    if(!doesExist) {
      onAdd()
    } else if (doesExist) {
      onRemove()
    } 
  }}>
    <span className={style.workerImgWrap}>
      {!worker.img && <span>{`${name[0][0]} ${name[name.length - 1][0]}`}</span>}

      {
      worker.img && <img src={worker.img} alt={worker.name} />
      }
    </span>
    <p className={style.workerName}>{worker.name}</p>
    {doesExist && <span className={style.workerTick}><i className="fas fa-check"></i></span>}
  </button>
</li>
)
}

export default AddWorkersItem
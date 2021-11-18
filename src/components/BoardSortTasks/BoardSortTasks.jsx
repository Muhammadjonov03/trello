import React from 'react'
import style from './BoardSort.module.css'
const BoardSortTasks = (props) => {
  const onExit = () => {
    props.toggleBoardSortItemsStatus(false)
    props.hideOpts(false)
  }
  const onSortClicked = (e) => {
    onExit()
    props.sortBoardItems(props.boardId, e.target.dataset.sort)
  }
  return (
    <>
      <div className={style.boardOptsSortHeader}>
        <button className={style.boardOptsSortBack} onClick={() => props.toggleBoardSortItemsStatus(false)}><i className="fas fa-angle-left"></i></button>
        <p className={style.boardOptsSortTitle}>Sort board</p>
        <button className={style.boardOptsSortExit} onClick={onExit}><i className="fas fa-times"></i></button>
      </div>
      <div  className={style.boardOptsSortBtnWrap}>
        <button className={style.boardOptsSortBtn} onClick={onSortClicked} data-sort="dateNew">{'By date (new first)'}</button>
        <button className={style.boardOptsSortBtn} onClick={onSortClicked} data-sort="dateOld">{'By date (old first)'}</button>
        <button className={style.boardOptsSortBtn} onClick={onSortClicked} data-sort="abc">{'By name (ABC)'}</button>
      </div>
    </>
  )
}

export default BoardSortTasks

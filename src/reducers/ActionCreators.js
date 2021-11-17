import {
  HEADER__CHANGE,
  SET_NEW_TASK,
  TASK_CHANGE_ACTIVE,
  TASK_TITLE_CHANGE,
  ADD_NEW_TASK,
  ADD_BOARD_STATUS_CHANGE,
  SET_TASK_CHANGE_DETAILS,
  SET_TASK_CHANGE,
  ADD_BOARD,
  COPY_BOARD,
  TOGGLE_COPY_BOARD_STATUS,
  MOVE_BOARD,
  BOARD_MOVE_STATUS,
  BOARD_ITEMS_SORT_STATUS,
  BOARD_ITEMS_SORT,
  ON_BOARD_DRAG_OVER,
  TOGGLE_ADD_TASK_ATACHMENT,
  TOGGLE_CREATE_TASK_ATACHMENT,
  TOGGLE_CHANGE_ATTACHMENT,
  CHANGE_ATTACHMENT
} from './types';

export const onBoardHeaderInputChange = (title, boardId) => ({
  type: HEADER__CHANGE,
  title,
  boardId
});
export const setTaskChangeActive = (isActive) => ({
  type: TASK_CHANGE_ACTIVE,
  isActive
});
export const setTaskTitle = (boardId, taskId, title) => ({
  type: TASK_TITLE_CHANGE,
  boardId,
  taskId,
  title
});
export const setNewTaskstatus = (isActive, boardId) => ({
  type: SET_NEW_TASK,
  isActive,
  boardId
});
export const addNewTask = (title, boardId, taskDate) => ({
  type: ADD_NEW_TASK,
  boardId,
  title,
  taskDate
})
export const addBoardStatusChange = (isActive) => ({
  type: ADD_BOARD_STATUS_CHANGE,
  isActive
})
export const setTaskChangeDetails = (xPos, yPos, taskId, boardId, title) => ({
  type: SET_TASK_CHANGE_DETAILS,
  position: {
    xPos,
    yPos
  },
  taskId,
  boardId,
  title
})
export const setTaskChange = (taskId, boardId, title) => ({
  type: SET_TASK_CHANGE,
  taskId,
  boardId,
  title
})
export const addBoard = (boardTitle) => ({
  type: ADD_BOARD,
  boardTitle
})
export const toggleCopyBoardStatus = (isActive) => ({
  type: TOGGLE_COPY_BOARD_STATUS,
  isActive
})
export const copyBoard = (boardId, boardTitle) => ({
  type: COPY_BOARD,
  boardId,
  boardTitle
})
export const moveBoard = (boardId, newOrder) => ({
  type: MOVE_BOARD,
  boardId,
  newOrder
})
export const toggleBoardMoveStatus = (isActive) => ({
  type: BOARD_MOVE_STATUS,
  isActive
})
export const toggleBoardSortItemsStatus = (isActive) => ({
  type: BOARD_ITEMS_SORT_STATUS,
  isActive
})
export const sortBoardItems = (boardId, sortType) => ({
  type: BOARD_ITEMS_SORT,
  boardId,
  sortType
})
export const onBoardDragOver = (draggedBoardId, movingBoardId) => ({
  type: ON_BOARD_DRAG_OVER,
  draggedBoardId,
  movingBoardId
})
export const toggleAddTaskAttachment = (isActive) => ({
  type: TOGGLE_ADD_TASK_ATACHMENT,
  isActive
})
export const toggleCrTaskAttachment = (isActive) => ({
  type: TOGGLE_CREATE_TASK_ATACHMENT,
  isActive
})
export const toggleChangeTaskAttachment = (isActive, atachId) => ({
  type: TOGGLE_CHANGE_ATTACHMENT,
  isActive, atachId
})
export const changeTaskAttachment = (title, id, color) => ({
  type: CHANGE_ATTACHMENT,
  title, id, color
})
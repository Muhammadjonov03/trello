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
  TOGGLE_ADD_TASK_ATACHMENT,
  TOGGLE_CREATE_TASK_ATACHMENT,
  TOGGLE_CHANGE_ATTACHMENT,
  CHANGE_ATTACHMENT,
  CREATE_TASK_ATTACHMENT,
  DELETE_FIXED_ATTTACHMENT,
  ADD_USER_TO_TASK,
  TOGGLE_ADD_WORKERS_STATUS,
  MOVE_BOARD_ON_DRAG,
  TOGGLE_BAORD_PLACEHOLDER,
  MOVE_TASK_ON_DRAG,
  TOGGLE_BOARD_ACCEPT_STATUS,
  MOVE_TASK_ON_HOVERING
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
  isActive,
  atachId
})
export const changeAttachment = (atId, color, title) => ({
  type: CHANGE_ATTACHMENT,
  atId,
  color,
  title
})
export const createTaskAttachment = (bId, tId, color, title) => ({
  type: CREATE_TASK_ATTACHMENT,
  tId,
  bId,
  color,
  title
})
export const addWorkerToTask = (boardId, taskId, workerId, isAdding) => ({
  type: ADD_USER_TO_TASK,
  boardId,
  taskId,
  workerId,
  isAdding
})
export const toggleAddWorkersStatus = (isActive) => ({
  type: TOGGLE_ADD_WORKERS_STATUS,
  isActive
})
export const deleteFixedAttachment = (atId) => ({
  type: DELETE_FIXED_ATTTACHMENT,
  atId
})
export const toggleBoardPlaceholder = (isActive) => ({
  type: TOGGLE_BAORD_PLACEHOLDER,
  isActive
})

export const moveBoardOnDrag = (draggedBoard, dropArea) => ({
  type: MOVE_BOARD_ON_DRAG,
  draggedBoard,
  dropArea
})

export const moveTaskOnDrag = (prevBoardId, newBoard, draggedTask) => ({
  type: MOVE_TASK_ON_DRAG,
  newBoard,
  draggedTask,
  prevBoardId
})

export const toggleBoardAcceptStatus = (isActive) => ({
  type:TOGGLE_BOARD_ACCEPT_STATUS,
  isActive
})

export const moveTaskOnHovering = (prevBoardId, newBoardId, draggedTask, hoveredTask) => ({
  type: MOVE_TASK_ON_HOVERING,
  prevBoardId,
  newBoardId,
  draggedTask,
  hoveredTask
})
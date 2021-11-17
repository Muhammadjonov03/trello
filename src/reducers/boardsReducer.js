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
  TOGGLE_COPY_BOARD_STATUS,
  COPY_BOARD,
  MOVE_BOARD,
  BOARD_MOVE_STATUS,
  BOARD_ITEMS_SORT,
  BOARD_ITEMS_SORT_STATUS,
  ON_BOARD_DRAG_OVER,
  TOGGLE_ADD_TASK_ATACHMENT,
  TOGGLE_CREATE_TASK_ATACHMENT,
  TOGGLE_CHANGE_ATTACHMENT,
  CHANGE_ATTACHMENT,
} from './types';

const initialState = {
  boards: [{
      id: 1,
      order: 1,
      title: 'Start',
      tasks: [],
      isNewTaskActive: false,

    },
    {
      id: 2,
      order: 2,
      title: 'In Process',
      tasks: [],
      isNewTaskActive: false,
    },
    {
      id: 3,
      order: 3,
      title: 'Done',
      tasks: [],
      isNewTaskActive: false,
    },
  ],
  isTaskChangeActive: false,
  addBoardStatus: false,
  copyBoardStatus: false,
  isBoardMoving: false,
  areBoardItemsSorting: false,
  addTaskAttachment: false,
  isCreateAttachment: false,
  currentAttachmentId: null,
  isChangeAttachment: false,
  fixedAttachments: [{
      color: '#61bd4f',
      name: 'darkGreen',
      title: '',
      id: 1
    },
    {
      color: '#f2d600',
      name: 'lightYellow',
      title: '',
      id: 2
    },
    {
      color: '#ff9f1a',
      name: 'darkYellow',
      title: '',
      id: 3
    },
    {
      color: '#eb5a46',
      name: 'red',
      title: '',
      id: 4
    },
    {
      color: '#c377e0',
      name: 'purple',
      title: '',
      id: 5
    },
    {
      color: '#0079bf',
      name: 'darkBlue',
      title: '',
      id: 6
    },
    {
      color: '#00c2e0',
      name: 'lightBlue',
      title: '',
      id: 7
    },
    {
      color: '#51e898',
      name: 'lightGreen',
      title: '',
      id: 8
    },
    {
      color: '#ff78cb',
      name: 'pink',
      title: '',
      id: 9
    },
    {
      color: '#344563',
      name: 'dark',
      title: '',
      id: 10
    },
    {
      color: '#b3bac5',
      name: 'grey',
      title: '',
      id: 11
    }
  ],
  colors: [{
      color: '#61bd4f',
      name: 'darkGreen',
      id: 1
    },
    {
      color: '#f2d600',
      name: 'lightYellow',
      id: 2
    },
    {
      color: '#ff9f1a',
      name: 'darkYellow',
      id: 3
    },
    {
      color: '#eb5a46',
      name: 'red',
      id: 4
    },
    {
      color: '#c377e0',
      name: 'purple',
      id: 5
    },
    {
      color: '#0079bf',
      name: 'darkBlue',
      id: 6
    },
    {
      color: '#00c2e0',
      name: 'lightBlue',
      id: 7
    },
    {
      color: '#51e898',
      name: 'lightGreen',
      id: 8
    },
    {
      color: '#ff78cb',
      name: 'pink',
      id: 9
    },
    {
      color: '#344563',
      name: 'dark',
      id: 10
    },
    {
      color: '#b3bac5',
      name: 'grey',
      id: 11
    }
  ],
  taskChangeDetails: {
    x: null,
    y: null,
    taskId: null,
    boardId: null,
    title: ''
  }
}

const getTime = () => new Date().getTime()

const createTask = (id, title) => ({
  id,
  title,
  description: '',
  bgImg: '',
  asignedStaff: [],
  attachments: [],
  editMode: false,
  date: getTime()
})

const createBoard = (id, title, order) => {
  return {
    id,
    title,
    order,
    tasks: [],
    isNewTaskActive: false,
    date: getTime()
  }
}

const copyBoard = (boardId, title, id, order) => {
  const copyingBoard = initialState.boards.find(b => b.id === boardId)
  return {
    ...copyingBoard,
    title: title,
    id,
    date: getTime(),
    order
  }
}

const boardsReducer = (state = initialState, action) => {
  switch (action.type) {
    case HEADER__CHANGE:
      return {
        ...state,
        boards: state.boards.map(board => {
          return board.id === Number(action.boardId) ? {
              ...board,
              title: action.title
            } :
            board
        })
      }
      case TASK_CHANGE_ACTIVE:
        return {
          ...state,
          isTaskChangeActive: action.isActive
        }
        case TASK_TITLE_CHANGE:
          return {
            ...state,
            boards: state.boards.map(b => {
              if (b.id === action.boardId) {
                return {
                  ...b,
                  tasks: b.tasks.map(t => t.id === action.taskId ? {
                    ...t,
                    title: action.title
                  } : t)
                }
              }
              return b
            })
          }
          case SET_NEW_TASK:
            return {
              ...state,
              boards: state.boards.map(b => b.id === action.boardId ? {
                ...b,
                isNewTaskActive: action.isActive
              } : b)
            }
            case ADD_NEW_TASK:
              return {
                ...state,
                boards: state.boards.map(b => b.id === action.boardId ? {
                  ...b,
                  tasks: [...b.tasks, createTask(b.tasks.length + 1, action.title, action.taskDate)]
                } : b)
              }
              case ADD_BOARD_STATUS_CHANGE:
                return {
                  ...state,
                  addBoardStatus: action.isActive
                }
                case SET_TASK_CHANGE_DETAILS:
                  return {
                    ...state,
                    taskChangeDetails: {
                      x: action.position.xPos,
                      y: action.position.yPos,
                      taskId: action.taskId,
                      boardId: action.boardId,
                      title: action.title
                    }
                  }
                  case SET_TASK_CHANGE:
                    return {
                      ...state,
                      boards: state.boards.map(b => b.id === action.boardId ? {
                        ...b,
                        tasks: b.tasks.map(t => t.id === action.taskId ? {
                          ...t,
                          title: action.title
                        } : t)
                      } : b)
                    }
                    case ADD_BOARD:
                      return {
                        ...state,
                        boards: [...state.boards, createBoard(state.boards.length + 1, action.boardTitle, state.boards.length + 1)]
                      }
                      case TOGGLE_COPY_BOARD_STATUS:
                        return {
                          ...state,
                          copyBoardStatus: action.isActive
                        }
                        case COPY_BOARD:
                          return {
                            ...state,
                            boards: [...state.boards, copyBoard(action.boardId, action.boardTitle, state.boards.length + 1, state.boards.length + 1)]
                          }
                          case MOVE_BOARD: {
                            const movinBoard = state.boards.find(b => b.id === action.boardId)
                            const newOrderBoard = state.boards.find(b => b.order === action.newOrder)
                            const newdBords = state.boards.map(b => {
                              if (b.id === newOrderBoard.id) {
                                return {
                                  ...b,
                                  order: movinBoard.order
                                }
                              } else if (b.id === movinBoard.id) {
                                return {
                                  ...b,
                                  order: newOrderBoard.order
                                }
                              }
                              return b
                            })
                            return {
                              ...state,
                              boards: newdBords.sort((a, b) => a.order > b.order ? 1 : -1)
                            }
                          }
                          case BOARD_MOVE_STATUS:
                            return {
                              ...state,
                              isBoardMoving: action.isActive
                            }
                            case BOARD_ITEMS_SORT_STATUS:
                              return {
                                ...state,
                                areBoardItemsSorting: action.isActive
                              }
                              case BOARD_ITEMS_SORT: {
                                const sortedTasks = (tasks) => {
                                  if (action.sortType === 'dateNew') {
                                    return tasks.sort((a, b) => Number(a.date) > Number(b.date) ? -1 : 1)
                                  } else if (action.sortType === 'dateOld') {
                                    return tasks.sort((a, b) => Number(a.date) > Number(b.date) ? 1 : -1)
                                  } else if (action.sortType === 'abc') {
                                    return tasks.sort((a, b) => a.title > b.title ? 1 : -1)
                                  }
                                }
                                return {
                                  ...state,
                                  boards: state.boards.map(b => b.id === action.boardId ? {
                                    ...b,
                                    tasks: sortedTasks(b.tasks)
                                  } : b)
                                }
                              }
                              case ON_BOARD_DRAG_OVER: {
                                const movingBoard = state.boards.find(b => b.id === action.draggedBoardId)
                                const newOrderBoard = state.boards.find(b => b.id === action.movingBoardId)
                                const newBoardId = state.boards.map(b => {
                                  if (b.id === newOrderBoard.id) {
                                    return {
                                      ...b,
                                      order: movingBoard.order
                                    }
                                  } else if (b.id === movingBoard.id) {
                                    return {
                                      ...b,
                                      order: newOrderBoard.order
                                    }
                                  }
                                  return b
                                })
                                return {
                                  ...state,
                                  boards: newBoardId.sort((a, b) => a.order > b.order ? 1 : -1)
                                }
                              }
                              case TOGGLE_ADD_TASK_ATACHMENT:
                                return {
                                  ...state,
                                  addTaskAttachment: action.isActive
                                }
                              case TOGGLE_CREATE_TASK_ATACHMENT:
                                return {
                                  ...state,
                                  isCreateAttachment: action.isActive
                                }   
                              case TOGGLE_CHANGE_ATTACHMENT:
                                return {
                                  ...state,
                                  isChangeAttachment: action.isActive,
                                  currentAttachmentId: action.atachId
                                }
                              case CHANGE_ATTACHMENT:{
                                const chosenColor = state.colors.find(c => c.name === action.color).color
                                return{
                                  ...state,
                                  fixedAttachments: state.fixedAttachments.map(at => at.id === action.id ? {...at, color: chosenColor, title: action.title,} : at)
                                }
                              }
                              default:
                                return state
  }
}

export default boardsReducer
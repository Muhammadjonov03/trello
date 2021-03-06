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
  ON_BOARD_DRAG,
  TOGGLE_ADD_TASK_ATACHMENT,
  TOGGLE_CREATE_TASK_ATACHMENT,
  TOGGLE_CHANGE_ATTACHMENT,
  CHANGE_ATTACHMENT,
  CREATE_TASK_ATTACHMENT,
  ADD_USER_TO_TASK,
  TOGGLE_ADD_WORKERS_STATUS,
  MOVE_BOARD_ON_DRAG,
  TOGGLE_BAORD_PLACEHOLDER,
  MOVE_TASK_ON_DRAG,
  TOGGLE_BOARD_ACCEPT_STATUS,
  MOVE_TASK_ON_HOVERING,
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
  },
  workers: [{
      id: 1,
      name: 'Mashxurbek Muhammadjonov',
      boards: [],
      img: ''
    },
    {
      id: 2,
      name: 'Abduvali Abdurahmonov',
      boards: [],
      img: ''
    },
    {
      id: 3,
      name: 'Temur Malikov',
      boards: [],
      img: ''
    },
    {
      id: 4,
      name: 'Baxodir Kozimjonov',
      boards: [],
      img: ''
    }
  ],
  addWorkersStatus: false,
  boardPlaceholderActive: false,
  willBoardAccept: true,
}

const getTime = () => new Date().getTime()

const createTask = (id, title) => ({
  id,
  title,
  description: '',
  bgImg: '',
  assignedStaff: [],
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
                              case ON_BOARD_DRAG: {
                                const movingBoard = state.boards.find(b => b.id === action.draggedBoardId)
                                const newOrderBoard = state.boards.find(b => b.id === action.movingBoardId)
                                const newBoardOrder = state.boards.map(b => {
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
                                  boards: newBoardOrder.sort((a, b) => a.order > b.order ? 1 : -1)
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
                                    case CHANGE_ATTACHMENT: {
                                      const chosenColor = state.colors.find(c => c.name === action.color)
                                      return {
                                        ...state,
                                        fixedAttachments: state.fixedAttachments.map(at => at.id === action.atId ? {
                                          ...at,
                                          color: chosenColor.color,
                                          title: action.title,
                                          name: chosenColor.name
                                        } : at)
                                      }
                                    }
                                    case CREATE_TASK_ATTACHMENT: {

                                      const chosenColor = state.colors.find(c => c.name === action.color)
                                      return {
                                        ...state,
                                        boards: state.boards.map(b => b.id === action.bId ? {
                                          ...b,
                                          tasks: b.tasks.map(t => t.id === action.tId ? {
                                            ...t,
                                            attachments: [...t.attachments, {
                                              title: action.title,
                                              color: {
                                                ...chosenColor
                                              },
                                              id: t.attachments.length + 1,
                                            }]
                                          } : t)
                                        } : b),
                                        fixedAttachments: [...state.fixedAttachments, {
                                          color: chosenColor.color,
                                          name: chosenColor.name,
                                          title: action.title,
                                          id: state.fixedAttachments.length + 1
                                        }]
                                      }
                                    }
                                    case TOGGLE_ADD_WORKERS_STATUS:
                                      return {
                                        ...state,
                                        addWorkersStatus: action.isActive
                                      }
                                      case ADD_USER_TO_TASK: {
                                        const foundWorker = state.workers.find(w => w.id === action.workerId)
                                        if (action.isAdding) {
                                          return {
                                            ...state,
                                            boards: state.boards.map(b => b.id === action.boardId ? {
                                              ...b,
                                              tasks: b.tasks.map(t => t.id === action.taskId ? {
                                                ...t,
                                                assignedStaff: (t.assignedStaff && [...t.assignedStaff, foundWorker]) || (!t.assignedStaff && [{
                                                  name: foundWorker.name,
                                                  id: foundWorker.id
                                                }])
                                              } : t)
                                            } : b),
                                            workers: state.workers.map(w => w.id === action.workerId ? {
                                              ...w,
                                              boards: w.boards.length > 0 ? w.boards.map(wb => wb.id === action.boardId ? {
                                                ...wb,
                                                tasks: [...wb.tasks, {
                                                  id: action.taskId
                                                }]
                                              } : {
                                                id: action.boardId,
                                                tasks: [{
                                                  id: action.taskId
                                                }]
                                              }) : [{
                                                id: action.boardId,
                                                tasks: [{
                                                  id: action.taskId
                                                }]
                                              }]
                                            } : w)
                                          }
                                        } else {
                                          return {
                                            ...state,
                                            boards: state.boards.map(b => b.id === action.boardId ? {
                                              ...b,
                                              tasks: b.tasks.map(t => t.id === action.taskId ? {
                                                ...t,
                                                assignedStaff: t.assignedStaff.filter(as => as.id !== action.workerId)
                                              } : t)
                                            } : b),
                                            workers: state.workers.map(w => w.id === action.workerId ? {
                                              ...w,
                                              boards: w.boards.filter(b => b.id !== action.boardId)
                                            } : w)
                                          }
                                        }
                                      }
                                      case TOGGLE_BAORD_PLACEHOLDER:
                                        return {
                                          ...state,
                                          boardPlaceholderActive: action.isActive
                                        }
                                        case MOVE_BOARD_ON_DRAG: {
                                          const movingBoard = state.boards.find(b => b.id === action.draggedBoard)
                                          const droppingArea = state.boards.find(b => b.id === action.dropArea)
                                          const reorderedBoards = state.boards.map(b => {
                                            if (b.id === movingBoard.id) {
                                              return {
                                                ...b,
                                                order: droppingArea.order
                                              }
                                            } else if (b.id === droppingArea.id) {
                                              return {
                                                ...b,
                                                order: movingBoard.order
                                              }
                                            }
                                            return b
                                          })
                                          return {
                                            ...state,
                                            boards: reorderedBoards.sort((a, b) => a.order > b.order ? 1 : -1)
                                          }
                                        }
                                        case MOVE_TASK_ON_DRAG: {
                                          return {
                                            ...state,
                                            boards: state.boards.map(b => b.id === action.newBoard.id ? {
                                              ...b,
                                              tasks: b.id === action.prevBoardId ? b.tasks : [...b.tasks, {
                                                ...action.draggedTask,
                                                id: b.tasks.length + 1 + 'a'
                                              }]
                                            } : b.id === action.prevBoardId ? {
                                              ...b,
                                              tasks: b.tasks.filter(t => t.id !== action.draggedTask.id)
                                            } : b)
                                          }
                                        }
                                        case TOGGLE_BOARD_ACCEPT_STATUS:
                                          return {
                                            ...state,
                                            willBoardAccept: action.isActive
                                          }
                                          case MOVE_TASK_ON_HOVERING: {
                                            const prevBoard = state.boards.find(b => b.id === action.prevBoardId)
                                            const draggedTaskIndex = prevBoard.tasks.indexOf(action.draggedTask)
                                            const newBoard = state.boards.find(b => b.id === action.newBoardId)
                                            const hoveredTaskIndex = newBoard.tasks.indexOf(action.hoveredTask) 
                                            prevBoard.tasks.splice(draggedTaskIndex, 1)
                                            newBoard.tasks.splice(hoveredTaskIndex + 1, 0,  action.draggedTask)
                                            return {
                                              ...state,
                                              boards: state.boards.map(b => b.id === action.newBoardId ? {...newBoard} : b.id === action.prevBoardId ? {...prevBoard} : b)
                                            }
                                          }
                                          default:
                                            return state
  }
}

export default boardsReducer
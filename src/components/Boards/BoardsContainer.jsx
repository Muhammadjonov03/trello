import { connect } from "react-redux"
import { compose } from "redux"
import Boards from './Boards';
import { onBoardHeaderInputChange, setTaskChangeActive, setTaskTitle, 
        setNewTaskstatus, addNewTask, addBoardStatusChange,
        setTaskChangeDetails, addBoard, toggleCopyBoardStatus,
        copyBoard, moveBoard, toggleBoardMoveStatus, toggleBoardSortItemsStatus,
        sortBoardItems, moveBoardOnDrag, toggleBoardPlaceholder, moveTaskOnDrag, toggleBoardAcceptStatus, moveTaskOnHovering} from './../../reducers/ActionCreators';

const mapStateToProps = (state) => {
  return {
    boards: state.boards.boards,
    isTaskChangeActive: state.boards.isTaskChangeActive,
    addBoardStatus: state.boards.addBoardStatus,
    copyBoardStatus: state.boards.copyBoardStatus,
    isBoardMoving: state.boards.isBoardMoving,
    itemsSorting: state.boards.areBoardItemsSorting,
    boardPlaceholderActive: state.boards.boardPlaceholderActive,
    willBoardAccept: state.boards.willBoardAccept
  }
}

export default compose(
  connect(mapStateToProps, {onBoardHeaderInputChange, setTaskChangeActive, setTaskTitle,
  setNewTaskstatus, addNewTask, addBoardStatusChange, setTaskChangeDetails, addBoard,
  toggleCopyBoardStatus, copyBoard, moveBoard, toggleBoardMoveStatus, toggleBoardSortItemsStatus,
  sortBoardItems, moveBoardOnDrag, toggleBoardPlaceholder, moveTaskOnDrag, toggleBoardAcceptStatus, moveTaskOnHovering}))(Boards)
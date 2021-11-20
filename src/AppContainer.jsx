import { compose } from "redux";
import { setTaskChangeActive, setTaskChange, toggleAddTaskAttachment,
  toggleCrTaskAttachment, toggleChangeTaskAttachment, changeAttachment, 
  createTaskAttachment, deleteFixedAttachment, toggleAddWorkersStatus, addWorkerToTask} from "./reducers/ActionCreators"
import App from './App';
import { connect } from "react-redux";
import { withRouter } from 'react-router';

const mapStateToProps = (state) => {
  return {
    isTaskChangeActive: state.boards.isTaskChangeActive,
    taskChangeDetails: state.boards.taskChangeDetails,
    addTaskAttachment: state.boards.addTaskAttachment,
    isCreateAttachment: state.boards.isCreateAttachment,
    fixedAttachments: state.boards.fixedAttachments,
    isChangeAttachment: state.boards.isChangeAttachment,
    currentAttachment: state.boards.currentAttachmentId,
    colors: state.boards.colors,
    addWorkersStatus: state.boards.addWorkersStatus,
    workers: state.boards.workers
  }
}

export default   compose(withRouter,connect(mapStateToProps, {setTaskChangeActive,setTaskChange, toggleAddTaskAttachment, 
                                            toggleCrTaskAttachment, toggleChangeTaskAttachment, changeAttachment, createTaskAttachment,
                                            deleteFixedAttachment, toggleAddWorkersStatus, addWorkerToTask }))(App)
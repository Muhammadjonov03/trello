import React from 'react';
import BoardsContainer from "./components/Boards/BoardsContainer";
import BodyShadow from './components/BodyShadow/BodyShadow';
import './App.css'
function App(props) {
  return (
    <div className="app">
      {props.isTaskChangeActive && <BodyShadow addTaskAttachment={props.addTaskAttachment} taskChangeDetails={props.taskChangeDetails} 
      setTaskChangeActive={props.setTaskChangeActive} setTaskChange={props.setTaskChange} isCreateAttachment={props.isCreateAttachment} 
      fixedAttachments={props.fixedAttachments} toggleAddTaskAttachment={props.toggleAddTaskAttachment} toggleCrTaskAttachment={props.toggleCrTaskAttachment}
      toggleChangeTaskAttachment={props.toggleChangeTaskAttachment} isChangeAttachment={props.isChangeAttachment} currentAttachment={props.currentAttachment}
      colors={props.colors} changeAttachment={props.changeAttachment} createTaskAttachment={props.createTaskAttachment} deleteFixedAttachment={props.deleteFixedAttachment}
      addWorkersStatus={props.addWorkersStatus} workers={props.workers} toggleAddWorkersStatus={props.toggleAddWorkersStatus} addWorkerToTask={props.addWorkerToTask}/>}
      <BoardsContainer/>
    </div>
  );
}

export default App;

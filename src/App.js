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
      changeTaskAttachment={props.changeTaskAttachment} colors={props.colors}/>}
      <BoardsContainer/>
    </div>
  );
}

export default App;

import './App.css';
import React from 'react';
import TaskTable from './components/TaskTable';
import AddTask from './components/AddTask';
import { connect } from 'react-redux';

const App = ({tasks}) => {
  
  // filter task before passing to component TaskTable
  let pendingTask = tasks.filter(task => task.status === 'pending');
  let doneTask = tasks.filter(task => task.status === 'done');
  return (
    <div className="App" >
      <div className="App-header">
        <h1>Todo App</h1>
      </div>
      <div className="App-content">
        <AddTask taskList={tasks} />
        <TaskTable tasks={pendingTask} title="Pending Task" />
        <TaskTable tasks={doneTask} title="Done Task" />
      </div>
    </div>
  );
}

const mapStateToProps = ({tasks}) => {
  return {
    tasks
  }
}

export default connect (mapStateToProps)(App);

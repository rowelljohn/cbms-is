import React from "react";
import './AddTodo.css'
import { useState } from 'react';
import { connect } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const AddTask = ({taskList, addNewTask}) => {

    const [taskNameInput, setTaskNameInput] = useState('');
    const [errorMsg, setErrorMsg] = useState('');

    const addTaskBtnClkHandler = () => {
        //  catch and evaluate new input task
        if (taskNameInput.trim() === ''){
            setErrorMsg('Input cannot be blank.')
        } else if (taskList.filter(task => task.name.toLowerCase() === taskNameInput.toLowerCase()).length > 0) {
                setErrorMsg('Item exist on the current list.')
        } else {
            let newTask = {
                id: uuidv4(),
                name: taskNameInput,
                status: 'pending'
            }

            //pass task to dispatch for the reducer
            addNewTask(newTask);

            //reset state
            setErrorMsg('');
            setTaskNameInput('');

        }
        
    }

    const taskInputChangeHandler = (e) => {
        setTaskNameInput(e.target.value);
    }
    return(
        <Box
            justifyContent="center"
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '20ch' },
                display: 'flex',
            }}
            noValidate
            autoComplete="off"
            >
                <TextField id="outlined-basic" label="Task" variant="outlined" onChange={taskInputChangeHandler} value={taskNameInput} helperText={errorMsg}/>
                <Button variant="contained" onClick={addTaskBtnClkHandler}>+ Add Task</Button>
        </Box>
    );
}

const mapDispatchToProps = dispatch => {
    return {
        addNewTask: (taskNameInput) => dispatch({type: 'ADD_TODO_TASK', payload: taskNameInput})
    }
}

export default connect(null, mapDispatchToProps)(AddTask);
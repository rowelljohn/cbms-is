import { v4 as uuidv4 } from 'uuid';

const initialState = {
    // initial value of tasks
    tasks: [
      { id: uuidv4(), name: 'get lunch', status: "pending" },
      { id: uuidv4(), name: 'grocery shopping', status: "done" },
      { id: uuidv4(), name: 'work on project 5', status: "pending" },
    ],
}

const reducer = (state = initialState, action) => {
    let tasksCopy;
    switch (action.type){
        case 'DELETE_TODO_TASK':
            tasksCopy = state.tasks.filter(task => task.id !== action.payload);
            return {
                ...state,
                tasks: tasksCopy
            };
        case 'ADD_TODO_TASK':
            tasksCopy = [...state.tasks, action.payload]
            return {
                ...state,
                tasks: tasksCopy
            }
        case 'MARK_DONE_TODO_TASK':
            tasksCopy = state.tasks.map(task => {
                if(task.id === action.payload){
                    task.status = 'done'
                } 
                return task;
            });
            return {
                ...state,
                tasks: tasksCopy
            }
        default: 
            return state;
    }
}   

export default reducer; 
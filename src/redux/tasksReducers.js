import {v4 as uuidv4} from "uuid"
const ADD_TASK = "ADD_TASK"
const GET_TASK = "GET_TASK"


let initialState = {
    tasks: [
        {id:0,
        taskText: "blabla"}
    ]

}

export const taskReducers = (state = initialState, action) => {

    switch (action.type) {
        case ADD_TASK:
            let task = {
                id: uuidv4(),
                taskText: action.data
            }
            return {...state, ...state.tasks.push(task)}
        case GET_TASK:{
            console.log("get task")
            return {...state, ...state.tasks}
        }
        default:
            return state
    }
}

export const actionsTaskReducer = {
    addTask: (data) => ({type: ADD_TASK, data}),
    getTask: () => ({type:GET_TASK})
}



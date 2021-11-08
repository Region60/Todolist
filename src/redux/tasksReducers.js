import {v4 as uuidv4} from "uuid"

const ADD_TASK = "ADD_TASK"
const DELETE_TASK = "DELETE_TASK"


let initialState = {
    tasks: [
        {
            id: 0,
            taskText: "blabla"
        }
    ]

}

export const taskReducers = (state = initialState, action) => {

    switch (action.type) {
        case ADD_TASK:
            let task = {
                id: uuidv4(),
                taskText: action.data
            }
            return {
                tasks: [...state.tasks, task]

            }
        case DELETE_TASK: {
            return {
                tasks:[ ...state.tasks.filter((i) => i.id !== action.id)]
            }
        }
        default:
            return state
    }
}

export const actionsTaskReducer = {
    addTask: (data) => ({type: ADD_TASK, data}),
    deleteTask: (id) => ({type: DELETE_TASK, id})
}

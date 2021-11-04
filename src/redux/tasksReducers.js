const SUBMIT_VALUE = "SUBMIT_VALUE"


let initialState = {
    tasks: []

}

export const taskReducers = (state = initialState, action) => {
    switch (action.type) {
        case SUBMIT_VALUE:
            let task = {
                id: 0,
                taskText: action.data
            }
            return {...state, task}
        default:
            return state
    }
}

const actionsTaskReducer = {
    submitValue: (data) => ({
        type: SUBMIT_VALUE,
        data
    })
}

export const addTasks = (data) => (dispatch) => {
    dispatch(actionsTaskReducer.submitValue(data))
}
import {Action, combineReducers, createStore} from "redux";
import {ThunkAction} from "redux-thunk";
import {taskReducers} from "./tasksReducers";


let rootReducers = combineReducers({
    tasks: taskReducers,
})
type RootReducerType = typeof rootReducers

const store = createStore(rootReducers)
export type AppStateType = ReturnType<RootReducerType>
type PropertiesTypes<T> = T extends { [key: string]: infer U } ? U : never
export type InferActionsTypes<T extends { [key: string]: (...args: any[]) => any }> = ReturnType<PropertiesTypes<T>>
export type BaseThunkType<A extends Action = Action, R = Promise<void>> = ThunkAction<R, AppStateType, unknown, A>

// @ts-ignore
window.store = store;

export default store
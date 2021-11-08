import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {actionsTaskReducer} from "../../redux/tasksReducers";


type EventType = {
    currentTarget: any
}

export const RightWindow: React.FC = () => {
    const tasks = useSelector((state: AppStateType) => state.tasks.tasks)
const dispatch = useDispatch()
    let delitTask = (event:EventType) => {
        dispatch(actionsTaskReducer.deleteTask( event.currentTarget.id))
    }
    return (
        <div className={"body__right-window"}>
            <div className={"right-window__challenges-ahead"}>
                Список дел
                <div>
                    {tasks.map(t=><div key={t.id} id={t.id} onClick={delitTask}>{t.taskText} </div>)}
                </div>
            </div>
        </div>
    )

}
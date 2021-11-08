import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {actionsTaskReducer} from "../../redux/tasksReducers";

type TargetType = {
    value: string
}
type EventType = {
    target: TargetType
}


export const LeftWindow: React.FC = () => {
    let [inputState, setInputState] = useState("")

    let handleChange = (event: EventType) => {
        setInputState(event.target.value)
    }

    const dispatch = useDispatch();
    let postTask = (): void => {
        dispatch(actionsTaskReducer.addTask(inputState))
        setInputState("")
    }

    return (
        <div className={"body__left-window"}>
            <div>
                <input type="text" onChange={handleChange} value={inputState}/>
            </div>
            <div>
                <button type="submit" onClick={postTask}>
                    создать
                </button>
            </div>

        </div>

    )
}
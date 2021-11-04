import React, {useState} from "react";
import { addTasks } from "../../redux/tasksReducers";

type Props = {
}
type TargetType = {
    value:string
}
type EventType = {
    target:TargetType
}


const LeftWindow: React.FC<Props>  = ()=> {
    let [inputState,setInputState] = useState("")

    let handleChange = (event:EventType) =>{
        console.log(event.target.value)
        setInputState(event.target.value)
    }

    let submitValue = (dispatch) =>{
        addTasks(inputState)
    }
    return (
        <div className={"body__left-window"}>
            <input type="text" onChange={handleChange} value={inputState}/>
            <input type="button" onSubmit={submitValue}/>
        </div>
    )
}

export default LeftWindow
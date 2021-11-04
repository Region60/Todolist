import React, {useState} from "react";
import {connect} from "react-redux";
import {addTasks} from "../../redux/tasksReducers";

type Props = {}
type TargetType = {
    value: string
}
type EventType = {
    target: TargetType
}


const LeftWindow: React.FC<Props> = () => {
    let [inputState, setInputState] = useState("")

    let handleChange = (event: EventType) => {
        console.log(event.target.value)
        setInputState(event.target.value)
    }

let postTask = ()=> {
    console.log("click")

}

    return (
        <div>
            <div className={"body__left-window"}>
                <input type="text" onChange={handleChange} value={inputState}/>
            </div>
            <div className={"body__left-window"}>
                <button type="submit" onClick={postTask}>
                    создать
                </button>
            </div>

        </div>

    )
}

const mapSateToProps = (state: any) => {
    return {
        tasks: state.tasks
    }
}
const mapDispatchToProps = (dispatch: any) => {
    return {
        submitValue: (data: any) => {
            console.log("отправить форму")
            dispatch(addTasks(data))
        }
    }
}

export const LeftWindowContainer = connect(mapSateToProps, mapDispatchToProps)(LeftWindow)
export default LeftWindow
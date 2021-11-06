import React, {useState} from "react";
import {connect} from "react-redux";
import {actionsTaskReducer} from "../../redux/tasksReducers";

type Props = {
    submitValue:(inputState:string)=>void
}
type TargetType = {
    value: string
}
type EventType = {
    target: TargetType
}
type mapSateToPropsType = {
    tasks:any
}
type mapDispatchToPropsType = {
    submitValue: ()=> void
}



const LeftWindow: React.FC<Props> = (props) => {
    let [inputState, setInputState] = useState("")

    let handleChange = (event: EventType) => {
        setInputState(event.target.value)
    }


let postTask = ():void=> {
console.log(inputState)
    props.submitValue(inputState)
}
    console.log("render left")

    return (
        <div className={"body__left-window"}>
            <div >
                <input type="text" onChange={handleChange} value={inputState}/>
            </div>
            <div >
                <button type="submit" onClick={postTask}>
                    создать
                </button>
            </div>

        </div>

    )
}

const mapSateToProps = (state: any) => {
    return {
        tasks: state
    }
}
const mapDispatchToProps = (dispatch: any) => {
    return {
        submitValue: (data: string) => {
            dispatch(actionsTaskReducer.addTask(data))
        }
    }
}

export const LeftWindowContainer = connect(mapSateToProps, mapDispatchToProps)(LeftWindow)

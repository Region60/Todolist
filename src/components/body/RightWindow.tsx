import React from "react";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";

type TaskType = {
    id: number
    taskText: string
}
type PropsType = {
    tasks: Array<TaskType>
}
type mapStateToPropsType = {
    tasks: Array<TaskType>

}

const RightWindow: React.FC<PropsType> = (props) => {
    debugger
    console.log("render right")
    return (
        <div className={"body__right-window"}>
            <div className={"right-window__challenges-ahead"}>
                Список дел
                <div>
                    {props.tasks.map(t=><div key={t.id}>{t.taskText} </div>)}
                </div>
            </div>
        </div>
    )

}

const mapStateToProps = (state:any) => {
    return {
        tasks: state.tasks.tasks
    }

}

export const RightWindowContainer = connect(mapStateToProps)(RightWindow)

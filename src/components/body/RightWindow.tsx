import React from "react";
import { useSelector} from "react-redux";
import {AppStateType} from "../../redux/redux-store";

export const RightWindow: React.FC = () => {
    const tasks = useSelector((state: AppStateType) => state.tasks.tasks)
    return (
        <div className={"body__right-window"}>
            <div className={"right-window__challenges-ahead"}>
                Список дел
                <div>
                    {tasks.map(t=><div key={t.id}>{t.taskText} </div>)}
                </div>
            </div>
        </div>
    )

}
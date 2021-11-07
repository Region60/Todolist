
import "./body.css"
import { LeftWindow } from "./leftWindow"
import {RightWindow} from "./RightWindow";

const Body = () => {
    return (
        <div className={"body"}>
            <LeftWindow />
            <RightWindow/>
        </div>

    )
}

export default Body
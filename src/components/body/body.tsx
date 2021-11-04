import LeftWindow, { LeftWindowContainer } from "./leftWindow"
import RightWindow from "./RightWindow"
import "./body.css"

const Body = () => {
    return (
        <div className={"body"}>
            <LeftWindowContainer/>
            <RightWindow/>
        </div>

    )
}

export default Body
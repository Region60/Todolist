import LeftWindow from "./leftWindow"
import RightWindow from "./RightWindow"
import "./body.css"

const Body = () => {
    return (
        <div className={"body"}>
            <LeftWindow/>
            <RightWindow/>
        </div>

    )
}

export default Body
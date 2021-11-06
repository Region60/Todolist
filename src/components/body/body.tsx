import {RightWindowContainer }from "./RightWindow"
import "./body.css"
import { LeftWindowContainer } from "./leftWindow"

const Body = () => {
    return (
        <div className={"body"}>
            <LeftWindowContainer/>
            <RightWindowContainer/>
        </div>

    )
}

export default Body
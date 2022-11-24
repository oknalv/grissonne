import { Component } from "react";
import V from "../basic/V";
import Protractor from "../pieces/rulers/Protractor";

class EA extends Component {

    render() {
        return (
            <>
            <V {...this.props} />
            <Protractor
                rotation={.5}
                x={0}
                y={0}
            />
            </>
        )
    }

}

export default EA;
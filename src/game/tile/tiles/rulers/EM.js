import { Component } from "react";
import K from "../basic/K";
import Protractor from "../pieces/rulers/Protractor";

class EM extends Component {

    render() {
        return (
            <>
            <K {...this.props} />
            <Protractor
                rotation={.5}
                x={-.1}
                y={.1}
            />
            </>
        )
    }

}

export default EM;
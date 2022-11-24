import { Component } from "react";
import O from "../basic/O";
import Protractor from "../pieces/rulers/Protractor";

class EL extends Component {

    render() {
        return (
            <>
            <O {...this.props} />
            <Protractor
                rotation={-.5}
                x={.1}
                y={.1}
            />
            </>
        )
    }

}

export default EL;
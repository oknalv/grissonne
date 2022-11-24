import { Component } from "react";
import W from "../basic/W";
import Protractor from "../pieces/rulers/Protractor";

class EC extends Component {

    render() {
        return (
            <>
            <W {...this.props} />
            <Protractor
                x={0}
                y={-.75}
            />
            </>
        )
    }

}

export default EC;
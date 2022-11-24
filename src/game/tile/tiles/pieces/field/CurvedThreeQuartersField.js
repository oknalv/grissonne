import { Component } from "react";
import Field from "./Field";

class CurvedThreeQuartersField extends Component {

    render() {
        return (
            <Field
                {...this.props}
                shape="m 0,0 h 90 v 45 c -24.75,0 -45,20.25 -45,45 H 0 Z"
                tokenX={this.props.tokenX || -.6}
                tokenY={this.props.tokenY || 1.1}
            />
        )
    }

}

export default CurvedThreeQuartersField;
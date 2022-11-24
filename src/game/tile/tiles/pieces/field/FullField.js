import { Component } from "react";
import Field from "./Field";

class FullField extends Component {

    render() {
        return (
            <Field
                {...this.props}
                shape="m 0,0 h 90 v 90 H 0 Z"
            />
        )
    }

}

export default FullField;
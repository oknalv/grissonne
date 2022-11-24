import { Component } from "react";
import City from "./City";

class FullCity extends Component {

    render() {
        return (
            <City
                {...this.props}
                shape="m -4,-4 h 98 v 98 H -4 Z"
            />
        )
    }

}

export default FullCity;
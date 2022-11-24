import { Component } from "react";
import { CSSTransition } from "react-transition-group";
import Token from "../../../token/Token";
import "./PotComponent.scss";

class PotComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            color: null
        }
    }

    componentDidUpdate() {
        if(this.state.color === null && this.props.pot?.player) {
            this.setState({color: this.props.pot.player.color.get()});
        } 
    }

    render() {
        const x = this.props.x || 0;
        const y = this.props.y || 0;
        const selectable = this.props.selectable && this.props.pot.player == null;
        return (
            <g
                transform={`translate(${x}, ${y})`}
                style={{transformOrigin: "center"}}
                onClick={() => {
                    if(selectable) {
                        this.props.placeTokenInPot(this.props.pot);
                    }
                }}
            >
                <g
                    className={`pot${selectable ? " selectable" : ""}`}
                    transform={`rotate(${-this.props.mainRotation * 90})`}
                    style={{transformOrigin: "center"}}
                >
                    <path
                        className="lined"
                        style={{fill:"#888888"}}
                        d="m 30,30 c 0,-1.65685 6.715729,-3 15,-3 8.284272,0 15,1.34315 15,3 l 0,7.5 -30,0 z"
                    />
                    <CSSTransition
                        classNames="tool"
                        timeout={{enter: Token.TIMEOUT, exit: Token.TIMEOUT}}
                        in={this.props.pot.display}
                        appear={true}
                        unmountOnExit
                    >
                        <path
                            className={`tool lined${this.props.pot.highlight ? " highlight" : ""}`}
                            style={{fill: this.state.color}}
                            d="m 54.375,37 0,-18.75 c 0,-1.65685 0.830109,-3 1.854101,-3 1.023993,0 1.854102,1.34315 1.875,3 l 0.0209,18.75 z"
                        />
                    </CSSTransition>
                    <path
                        className="lined"
                        style={{fill:"#AAAAAA"}}
                        d="m 45,33 c -8.284272,0 -15,-1.34315 -15,-3 l 0,30 c 0,1.65685 6.715729,3 15,3 8.284272,0 15,-1.34315 15,-3 L 60,30 c 0,1.65685 -6.715728,3 -15,3 z"
                    />
                    <path
                        className="lined"
                        style={{fill:"#9b6e00"}}
                        d="m 41.25,50.625 h 7.5 l 0,12.375 h -7.5 z"
                    />
                    <path
                        className="lined"
                        style={{fill:"#00a8af"}}
                        d="m 33.75,37.5 h 7.5 v 7.5 h -7.5 z"
                    />
                    <path
                        className="lined"
                        style={{fill:"#00a8af"}}
                        d="m 48.75,37.5 h 7.5 V 45 H 48.75 Z"
                    />
                </g>
            </g>
        )
    }

}

export default PotComponent;
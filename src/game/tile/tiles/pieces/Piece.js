import { createRef, cloneElement, Component } from "react";
import Slot from "./Slot";
import './Piece.css';

class Piece extends Component {

    constructor(props){
        super(props);
        this.slotRef = createRef();
    }

    render() {
        const selectable = this.props.selectable && this.props.segment.container && this.props.segment.container.players.length === 0;
        return (
            <g
                className={selectable ? "selectable" : ""}
                transform={`rotate(${(this.props.rotation || 0) * 90})`}
                style={{transformOrigin: "center"}}
                onClick={() => {
                    if(selectable) this.props.placeToken(this.props.segment, this.slotRef, (this.props.rotation || 0) + (this.props.mainRotation || 0))
                }}
            >
                <defs>
                    {
                        cloneElement(
                            this.props.pattern,
                            {
                                id: `${this.props.type}Pattern${this.props.id}`,
                                rotation: (this.props.rotation || 0) + (this.props.mainRotation || 0),
                                players: this.props.segment.container ? this.props.segment.container.players : [],
                                highlight: this.props.segment.container && this.props.segment.container.highlight === true
                            }
                        )    
                    }
                </defs>
                <path
                    className={this.props.className}
                    d={this.props.shape}
                    style={{fill: `url(#${this.props.type}Pattern${this.props.id})`, transformOrigin: "center"}}
                />
                <Slot
                    x={this.props.tokenX !== undefined ? this.props.tokenX : 0}
                    y={this.props.tokenY !== undefined ? this.props.tokenY : 0}
                    id={`${this.props.id}slot`}
                    slotRef={this.slotRef}
                />
            </g>
        )
    }

}

export default Piece;
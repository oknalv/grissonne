import { Component } from "react";

class PathPattern extends Component {

    render() {
        return (
            <pattern
                id={this.props.id}
                patternTransform={`scale(15, 15) rotate(${(this.props.rotation || 0) * -90}) translate(.5 .5)`}
                height={(this.props.players.length || 1)}
                width={(this.props.players.length || 1)}
                patternUnits="userSpaceOnUse"
            >
                <rect
                    height={(this.props.players.length || 1)}
                    width={(this.props.players.length || 1)}
                    y="0"
                    x="0"
                    style={{fill: "white"}}
                />
                {
                    this.props.players.map((player, i) => {
                        let ret = [];
                        for(let j = 0; j < this.props.players.length; j++){
                            ret.push(<rect
                                height="1"
                                width="1"
                                y={j % this.props.players.length}
                                x={(i + j) % this.props.players.length}
                                className={this.props.highlight ? "pattern-highlight" : ""}
                                style={{fill: player.color.get(), fillOpacity: "var(--opacity)", "--opacity": .5}}
                                key={`${i}-${j}`}
                            />);
                        }
                        return ret;
                    })
                }
            </pattern>
        )
    }

}

export default PathPattern;
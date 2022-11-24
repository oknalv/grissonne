import { Component } from "react";

class CityPattern extends Component {

    render() {
        return (
            <pattern
                id={this.props.id}
                patternTransform={`scale(${45 / (this.props.players.length || 1)}, ${45 / (this.props.players.length || 1)}) rotate(${(this.props.rotation || 0) * - 90})`}
                height={(this.props.players.length || 1)}
                width={(this.props.players.length || 1)}
                patternUnits="userSpaceOnUse"
            >
                <rect
                    height={(this.props.players.length || 1)}
                    width={(this.props.players.length || 1)}
                    y="0"
                    x="0"
                    style={{fill: "#888888"}}
                />
                {
                    this.props.players.map((player, i) => {
                        let ret = [];
                        for(let j = 0; j < this.props.players.length; j++){
                            ret.push(<circle
                                r={.25}
                                cy={(j % this.props.players.length) + .5}
                                cx={((i + j) % this.props.players.length) + .5}
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

export default CityPattern;
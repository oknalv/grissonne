import { Component } from "react";
import './Avatar.scss';

class Avatar extends Component {

    render() {
        const height = this.props.height || 900;
        const width = this.props.width || 900;
        return (
            <svg className="avatar" viewBox={` 0 0 ${height} ${width}`} height={height} width={width}>
                <image
                    href={`/img/${this.props.player.id}.png`}
                    height={height}
                    width={width}
                />
                <image
                    href={`/img/${this.props.player.id}.png`}
                    height={height}
                    width={width}
                    x={-width}
                    style={{
                        filter: `drop-shadow(${width}px 0px ${this.props.player.color.getLighter()}`,
                        mixBlendMode: "multiply"
                    }}
                />
            </svg>
        )
    }
}

export default Avatar;
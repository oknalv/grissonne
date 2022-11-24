import { Component } from 'react';
import Icon from '../../components/icon/Icon';
import TileShape from '../../components/tile-shape/TileShape';
import PlayerCard from '../player-card/PlayerCard';
import TileComponent from '../tile/TileComponent';
import './SideMenu.scss';

class SideMenu extends Component {

    render() {
        const currentPlayerIndex = Math.max(this.props.players?.indexOf(this.props.currentPlayer) || 0, 0);
        const orderedPlayerList = this.props.players?.slice(currentPlayerIndex, this.props.players.length)
            .concat(this.props.players.slice(0, currentPlayerIndex));
        return (
            <div className="side-menu notebook">
                <div className="zoom-buttons">
                    <button
                        onClick={this.props.zoomIn}
                        className="round-button"
                        disabled={this.props.zoom === this.props.maxZoom}
                    >
                        <Icon icon="+" />
                    </button>
                    <div className="magnifier">
                        <Icon icon="🔍" />
                    </div>
                    <button
                        onClick={this.props.zoomOut}
                        className="round-button"
                        disabled={this.props.zoom === 1}
                    >
                        <Icon icon="-" />
                    </button>
                </div>
                <div className="next-tile">
                    <div>
                        {
                            this.props.tile &&
                            <TileComponent tile={this.props.tile} noPoints={true} />
                        }
                        {
                            !this.props.tile &&
                            <div className="no-tile"></div>
                        }
                        <div className="rotation-buttons">
                            <button
                                onClick={this.props.clock}
                                disabled={!this.props.tile}
                                className="round-icon-button"
                            >
                                <Icon icon="↻" />
                            </button>
                            <button
                                onClick={this.props.unclock}
                                disabled={!this.props.tile}
                                className="round-icon-button"
                            >
                                <Icon icon="↺" />
                            </button>
                        </div>
                    </div>
                    <div className="remaining-help">
                        <button
                            className="round-icon-button"
                            onClick={this.props.showHowToPlay}
                        >
                            <Icon icon="?" />
                        </button>
                        <TileShape>
                            <text
                                fontSize={450}
                                x='50%'
                                y='55%'
                                textAnchor='middle'
                                dominantBaseline='middle'
                            >
                                {this.props.remainingTilesNumber}
                            </text>
                        </TileShape>
                    </div>
                    {
                        //TODO discarded tiles
                    }
                </div>
                <div className="player-cards">
                    {
                        orderedPlayerList && orderedPlayerList.map((player) => {
                            return (
                                <PlayerCard
                                    player={player}
                                    selected={this.props.currentPlayer === player}
                                    key={`player-card-${player.id}`}
                                />
                            )
                        })
                    }
                </div>
            </div>
        )
    }

}

export default SideMenu;
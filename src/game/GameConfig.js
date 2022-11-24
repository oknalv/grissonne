import { withTranslation } from 'react-i18next';
import TileCheckbox from '../components/tile-checkbox/TileCheckbox';
import './GameConfig.scss';
import Tile from './tile/Tile';
import D from './tile/tiles/basic/D';
import tiles from './tile/tiles.json';
import BB6F1 from './tile/tiles/river/BB6F1';
import BB6F2 from './tile/tiles/river/BB6F2';
import BB6F3 from './tile/tiles/river/BB6F3';
import BB6F4 from './tile/tiles/river/BB6F4';
import BB6F5 from './tile/tiles/river/BB6F5';
import BB6F7 from './tile/tiles/river/BB6F7';
import BB6F8 from './tile/tiles/river/BB6F8';
import BB6F9 from './tile/tiles/river/BB6F9';
import BB6F11 from './tile/tiles/river/BB6F11';
import BB6F12 from './tile/tiles/river/BB6F12';
import Triangles from './tile/tiles/pieces/rulers/Triangles';
import Protractor from './tile/tiles/pieces/rulers/Protractor';
import { Component } from 'react';
import Avatar from '../components/avatar/Avatar';
import Icon from '../components/icon/Icon';

const riverTiles = { BB6F1, BB6F2, BB6F3, BB6F4, BB6F5, BB6F7, BB6F8, BB6F9, BB6F11, BB6F12 }

class GameConfig extends Component {
    
    render() {
        return (
            <div className='game-config-container notebook'>
                <div className='game-config'>
                    <div className='title'>{this.props.t('CONFIG.selectPlayers')}</div>
                    <div className='players'>
                        {
                            this.props.availablePlayers.map((player, i) => {
                                return (
                                    <div
                                        className='player'
                                        key={i}
                                        style={{
                                            "--player-primary-color": player.color.getLightest(),
                                            "--player-secondary-color": player.color.get()
                                        }}
                                    >
                                        <TileCheckbox
                                            style={{
                                                "--input-primary-color": player.color.get(),
                                                "--input-secondary-color": player.color.getLightest()
                                            }}
                                            onClick={() => {
                                                this.props.selectPlayer(player)
                                            }}
                                            selected={this.props.selectedPlayers.includes(player)}
                                        >
                                            <g
                                                style={{
                                                    transformOrigin: "center",
                                                    transform: "translate(80px, 80px)"
                                                }}
                                            >
                                                <Avatar player={player} height={740} width={740} />
                                            </g>
                                        </TileCheckbox>
                                        <div className="name">
                                            {this.props.t(`PLAYERS.${player.id}`)}
                                        </div>
                                    </div>
                                );
                            })
                        }
                    </div>
                    <div className="title">{this.props.t('CONFIG.selectStartType')}</div>
                    <div
                        className="options"
                    >
                        <div className="option">
                            <TileCheckbox
                                selected={!this.props.river}
                                onClick={() => {
                                    if(this.props.river){
                                        this.props.selectRiver();
                                    }
                                }}
                            >
                                <g
                                    transform={`scale(.75) translate(150 150)`}
                                >
                                    <svg viewBox="0 0 90 90">
                                        <D
                                            tile={new Tile(tiles.basic.tiles[tiles.initial], "basic")}
                                        />
                                    </svg>
                                </g>
                            </TileCheckbox>
                            <div className="name">
                                {this.props.t('CONFIG.basic')}
                            </div>
                        </div>
                        <div className="option">
                            <TileCheckbox
                                selected={this.props.river}
                                onClick={() => {
                                    if(!this.props.river){
                                        this.props.selectRiver();
                                    }
                                }}
                            >
                                {
                                    [tiles.river.start, ...tiles.river.set.split(','), tiles.river.end].map((tileName, i) => {
                                        const RiverTile = riverTiles[tileName];
                                        return (
                                            <g
                                                transform={`scale(.18) translate(${600 + (i % 4) * 960} ${750 + (Math.floor(i / 4)) * 1300})`}
                                                key={`${tileName}${i}`}
                                            >
                                                <svg viewBox="0 0 90 90">
                                                    <RiverTile
                                                        tile={new Tile(tiles.river.tiles[tileName], `${tileName}${i}`)}
                                                    />
                                                </svg>
                                            </g>
                                        )
                                    })
                                }
                            </TileCheckbox>
                            <div className="name">
                                {this.props.t('CONFIG.river')}
                            </div>
                        </div>
                    </div>
                    <div className="title">{this.props.t('CONFIG.expansions')}</div>
                    <div
                        className="options"
                    >
                        <div className="option">
                            <TileCheckbox
                                    selected={this.props.expansions.rulers}
                                    onClick={() => {
                                        this.props.selectExpansion("rulers");
                                    }}
                            >
                                <g
                                    transform={`scale(.75) translate(150 150)`}
                                >
                                    <svg viewBox="0 0 90 90">
                                        <g
                                            transform="translate(0, 15)"
                                        >
                                            <Triangles />
                                        </g>
                                        <Protractor
                                            rotation={1}
                                            x={-.75}
                                            y={-.3}
                                        />
                                    </svg>
                                </g>
                            </TileCheckbox>
                            <div className="name">
                                {this.props.t('CONFIG.rulers')}
                            </div>
                        </div>
                    </div>
                    <div className="error">
                        { this.props.selectedPlayers.length < 2 && this.props.t("CONFIG.twoPlayers") }
                    </div>
                    <div>
                        <button
                            onClick={this.props.startGame}
                            disabled={ this.props.selectedPlayers.length < 2 }
                            className="big-button"
                        >
                            <Icon icon="⏵"/>
                            <span>{this.props.t('CONFIG.start')}</span>
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default withTranslation()(GameConfig);
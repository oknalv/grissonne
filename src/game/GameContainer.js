import { Component } from 'react';
import GameConfig from './GameConfig';
import players from './players.json';
import Player from '../beans/Player';
import Game from './Game';
import Tile from './tile/Tile';
import tiles from './tile/tiles.json';


class GameContainer extends Component {

    constructor(props) {
        super(props);
        this.availablePlayers = Object.keys(players).map((key) => {
            return new Player(players[key]);
        });
        const index1 = Math.floor(Math.random() * this.availablePlayers.length);
        let index2 = index1;
        do {
            index2 = Math.floor(Math.random() * this.availablePlayers.length);
        }
        while(index2 === index1);

        this.state = {
            selectedPlayers: [this.availablePlayers[index1], this.availablePlayers[index2]],
            gameStarted: false,
            river: false,
            expansions: {
                rulers: false
            }
        }
    }

    getBasicTiles = () => {
        return tiles.basic.set.split(",").map((key) => {
            return new Tile(tiles.basic.tiles[key]);
        });
    }

    getExpansions = () => {
        return Object.keys(this.state.expansions).reduce((accumulator, key) => {
            if(this.state.expansions[key]){
                return [...accumulator, ...tiles[key].set.split(",").map((id) => {
                    return new Tile(tiles[key].tiles[id]);
                })];
            }
            return accumulator;
        }, []);
    }

    getRiver = () => {
        return [
            new Tile(tiles.river.tiles[tiles.river.end], true),
            ...tiles.river.set.split(",").sort(() => Math.random() - .5).map((id) => {
                return new Tile(tiles.river.tiles[id]);
            }),
            new Tile(tiles.river.tiles[tiles.river.start], true)
        ];
    }

    getTiles = () => {
        let game = [...this.getBasicTiles(), ...this.getExpansions()];
        game.sort(() => Math.random() - .5);
        if(this.state.river){
            game = [...game, new Tile(tiles.basic.tiles[tiles.initial])];
            game.sort(() => Math.random() - .5);
            game = [...game, ...this.getRiver()];
        }
        else {
            game = [...game, new Tile(tiles.basic.tiles[tiles.initial], true)];
        }
        return game;
    }
    
    render() {
        return(
            <>
            {
                !this.state.gameStarted &&
                <GameConfig
                    startGame={() => this.setState({ gameStarted: true }) }
                    availablePlayers={this.availablePlayers}
                    selectedPlayers={this.state.selectedPlayers}
                    selectPlayer={(player) => {
                        if(this.state.selectedPlayers.includes(player)){
                            this.setState({ selectedPlayers: this.state.selectedPlayers.filter( p => p !== player ) });
                        }
                        else {
                            this.setState({ selectedPlayers: [ ...this.state.selectedPlayers, player ] });
                        }
                    }}
                    river={this.state.river}
                    selectRiver={() => this.setState({ river: !this.state.river })}
                    expansions={this.state.expansions}
                    selectExpansion={(expansion) => {
                        this.setState({ expansions: { ...this.state.expansions, [expansion]: !this.state.expansions[expansion] } });
                    }}
                />
            }
            {
                this.state.gameStarted &&
                <Game
                    players={this.state.selectedPlayers}
                    tiles={this.getTiles()}
                    riverSides={[tiles.river.start, tiles.river.end]}
                    showHowToPlay={this.props.showHowToPlay}
                />
            }
            </>
        );
    }

}

export default GameContainer;
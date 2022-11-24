import { Component } from 'react';
import { TransitionGroup } from 'react-transition-group';
import Points from '../points/Points';
import TokenComponent from '../token/TokenComponent';
import './TileComponent.scss';
import A from './tiles/basic/A';
import B from './tiles/basic/B';
import C from './tiles/basic/C';
import D from './tiles/basic/D';
import E from './tiles/basic/E';
import F from './tiles/basic/F';
import G from './tiles/basic/G';
import H from './tiles/basic/H';
import I from './tiles/basic/I';
import J from './tiles/basic/J';
import K from './tiles/basic/K';
import L from './tiles/basic/L';
import M from './tiles/basic/M';
import N from './tiles/basic/N';
import O from './tiles/basic/O';
import P from './tiles/basic/P';
import Q from './tiles/basic/Q';
import R from './tiles/basic/R';
import S from './tiles/basic/S';
import T from './tiles/basic/T';
import U from './tiles/basic/U';
import V from './tiles/basic/V';
import W from './tiles/basic/W';
import X from './tiles/basic/X';
import BB6F1 from './tiles/river/BB6F1';
import BB6F11 from './tiles/river/BB6F11';
import BB6F12 from './tiles/river/BB6F12';
import BB6F2 from './tiles/river/BB6F2';
import BB6F3 from './tiles/river/BB6F3';
import BB6F4 from './tiles/river/BB6F4';
import BB6F5 from './tiles/river/BB6F5';
import BB6F7 from './tiles/river/BB6F7';
import BB6F8 from './tiles/river/BB6F8';
import BB6F9 from './tiles/river/BB6F9';
import EA from './tiles/rulers/EA';
import EB from './tiles/rulers/EB';
import EC from './tiles/rulers/EC';
import ED from './tiles/rulers/ED';
import EE from './tiles/rulers/EE';
import EF from './tiles/rulers/EF';
import EG from './tiles/rulers/EG';
import EH from './tiles/rulers/EH';
import EI from './tiles/rulers/EI';
import EJ from './tiles/rulers/EJ';
import EK from './tiles/rulers/EK';
import EL from './tiles/rulers/EL';
import EM from './tiles/rulers/EM';
import EN from './tiles/rulers/EN';
import EO from './tiles/rulers/EO';
import EP from './tiles/rulers/EP';
import EQ from './tiles/rulers/EQ';

const tileTypes = {
    A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, //Basic
    BB6F1, BB6F2, BB6F3, BB6F4, BB6F5, BB6F7, BB6F8, BB6F9, BB6F11, BB6F12, //River
    EA, EB, EC, ED, EE, EF, EG, EH, EI, EJ, EK, EL, EM, EN, EO, EP, EQ //Rulers
}

/**
 * Structure of a tile in tiles.json:
 * 
 *          \  3   4   5  /
 *           -------------
 *         2|      1      |6
 *          |     ---     |
 *         1| 0  |-1 |  2 |7
 *          |     ---     |
 *         0|      3      |8
 *           -------------
 *          / 11  10   9  \
 * 
 * The outer numbers are used for defining paths, cities and fields.
 * The inner numbers are used for defining the sides.
 * The center number (-1) is used for defining a path, city or field that doesn't have any connection.
 */

class TileComponent extends Component {

    render() {
        const ChosenTile = tileTypes[this.props.tile.type]
        return (
            <div className="tile-container">
                <svg
                    height={90}
                    width={90}
                    viewBox="0 0 90 90"
                    transform={`rotate(${(this.props.tile.rotation || 0) * 90})`}
                    className="tile"
                >
                    <ChosenTile {...this.props} />
                </svg>
                {
                    !this.props.noPoints &&
                    <TransitionGroup
                        component={null}
                    >
                        {
                            this.props.tile.tokens.map((token) => {
                                return <TokenComponent token={token} key={token.key} />
                            })
                        }
                        <Points
                            points={this.props.tile.points}
                            scale={ 1 / Math.pow(2, (4 - this.props.zoom))}
                        />
                    </TransitionGroup>
                }
            </div>
        )
    }

}

export default TileComponent;
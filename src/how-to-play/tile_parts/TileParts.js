import { Component } from "react";
import { withTranslation } from "react-i18next";
import D from '../../game/tile/tiles/basic/D';
import Tile from '../../game/tile/Tile';
import tiles from '../../game/tile/tiles.json';
import './TileParts.scss';
import Pointer from "./Pointer";
import PotComponent from "../../game/tile/tiles/pieces/PotComponent";
import Pot from "../../game/tile/Pot";
import PostIt from "../../game/tile/tiles/pieces/PostIt";
import Eraser from "../../game/tile/tiles/pieces/Eraser";
import RiverStart from "../../game/tile/tiles/pieces/river/RiverStart";
import Protractor from "../../game/tile/tiles/pieces/rulers/Protractor";
import Triangles from "../../game/tile/tiles/pieces/rulers/Triangles";

class TileParts extends Component {
    
    render() {
        return (
            <>
            <div className="title">
                { this.props.t("HOW_TO_PLAY.TILE_PARTS.title") }
            </div>
            <div>
                <svg
                    viewBox="0 0 90 90"
                    style={{
                        height: "150px",
                        width: "300px",
                        float: "left"
                    }}
                >
                    <defs>
                        <marker
                            id="dot"
                            viewBox="0 0 10 10"
                            refX="5"
                            refY="5"
                            markerWidth="5"
                            markerHeight="5"
                            className="pointer-point"
                        >
                            <circle cx="5" cy="5" r="5" />
                        </marker>

                    </defs>
                    <g
                        style={{
                            transform: "translate(-50%, 0)"
                        }}
                    >
                        <svg
                            viewBox="0 0 90 90"
                        >
                            <D tile={ new Tile(tiles.basic.tiles.D)}/> 
                        </svg>
                    </g>
                    <Pointer
                        x={15}
                        y={15}
                        text={this.props.t("HOW_TO_PLAY.TILE_PARTS.city")}
                    />
                    <Pointer
                        x={15}
                        y={45}
                        text={this.props.t("HOW_TO_PLAY.TILE_PARTS.path")}
                    />
                    <Pointer
                        x={15}
                        y={77}
                        text={this.props.t("HOW_TO_PLAY.TILE_PARTS.field")}
                    />
                </svg>
                {this.props.t("HOW_TO_PLAY.TILE_PARTS.tilePartsExplanation")}
            </div>
            <div>
                {this.props.t("HOW_TO_PLAY.TILE_PARTS.otherPartsExplanation")}
            </div>
            <div className="other-parts">
                <div>
                    <svg
                        viewBox="0 0 45 45"
                    >
                        <g
                            style={{
                                transform: "translate(-50%, -50%)"
                            }}
                        >
                            <PotComponent
                                mainRotation={0}
                                id="howToPot"
                                selectable={[]}
                                pot={new Pot()}
                                placeTokenInPot={() => {}}
                            />
                        </g>
                    </svg>
                    <div>
                        {this.props.t("HOW_TO_PLAY.TILE_PARTS.pot")}
                    </div>
                </div>
                <div>
                    <svg
                        viewBox="0 0 45 45"
                    >
                        <g
                            style={{
                                transform: "translate(-50%, -50%)"
                            }}
                        >
                            <PostIt
                                x={0}
                                y={0}
                                mainRotation={0}
                            />
                        </g>
                    </svg>
                    <div>
                        {this.props.t("HOW_TO_PLAY.TILE_PARTS.postIt")}
                    </div>
                </div>
                <div>
                    <svg
                        viewBox="0 0 45 45"
                    >
                        <g
                            style={{
                                transform: "translate(-50%, -50%)"
                            }}
                        >
                            <Eraser
                                mainRotation={0}
                            />
                        </g>
                    </svg>
                    <div>
                        {this.props.t("HOW_TO_PLAY.TILE_PARTS.eraser")}
                    </div>
                </div>
                <div>
                    <svg
                        viewBox="0 0 90 90"
                    >
                        <RiverStart />
                    </svg>
                    <div>
                        {this.props.t("HOW_TO_PLAY.TILE_PARTS.river")}
                    </div>
                </div>
                <div>
                    <svg
                        viewBox="0 0 50 50"
                    >
                        <g
                            style={{
                                transform: "translate(-40%, -25%)"
                            }}
                        >
                            <Protractor
                                x={0}
                                y={0}
                            />
                        </g>
                    </svg>
                    <div>
                        {this.props.t("HOW_TO_PLAY.TILE_PARTS.protractor")}
                    </div>
                </div>
                <div>
                    <svg
                        viewBox="0 0 90 90"
                    >
                        <Triangles />
                    </svg>
                    <div>
                        {this.props.t("HOW_TO_PLAY.TILE_PARTS.triangles")}
                    </div>
                </div>
            </div>
            </>
        )
    }
}

export default withTranslation()(TileParts);
import { Component } from "react";
import { withTranslation } from "react-i18next";
import EI from "../../game/tile/tiles/rulers/EI";
import tiles from '../../game/tile/tiles.json';
import Tile from "../../game/tile/Tile";

class Expansions extends Component {

    render() {
        return(
            <>
            <div className="title">
                { this.props.t("HOW_TO_PLAY.EXPANSIONS.title") }
            </div>
            <div>
                { this.props.t("HOW_TO_PLAY.EXPANSIONS.explanation") }
            </div>
            <div>
                <svg
                    viewBox="0 0 90 90"
                    style={{
                        height: "150px",
                        width: "150px",
                        float: "left",
                        marginRight: "1em",
                        paddingBottom: "1em"
                    }}
                >
                    <EI tile={new Tile(tiles.rulers.tiles.EI)} />
                </svg>
                {this.props.t("HOW_TO_PLAY.EXPANSIONS.EI")}
            </div>
            </>
        )
    }
}

export default withTranslation()(Expansions);
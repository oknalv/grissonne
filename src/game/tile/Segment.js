import SegmentContainer from "../../beans/SegmentContainer";

export default class Segment {

    constructor(jsonTileElement, tile){
        this.points = [...jsonTileElement.points];
        this.tile = tile;
        this.container = null;
        this.closedPoints = 0;
        this.token = null;
    }

    rotate(clockwise) {
        this.points = this.points.map((point) => {
            return point === -1 ? -1 : Math.abs((point + (clockwise ? 3 : -3) + 12) % 12);
        })
    }

    /**
     * Assigns to this object the segment container
     * @param {Segment} segment 
     * @param {Array<SegmentContainer>} segmentContainerList 
     */
    join(segment, segmentContainerList) {
        if(!this.container){
            this.container = segment.container;
            segment.container.segments.push(this);
        }
        else {
            if(segment.container !== this.container){
                let oldSegmentContainer = this.container;
                segment.container.segments.push(...oldSegmentContainer.segments.map((seg) => {
                    seg.container = segment.container;
                    return seg;
                }));
                segmentContainerList.splice(segmentContainerList.indexOf(oldSegmentContainer), 1);
            }
        }
        this.closedPoints++;
        segment.closedPoints++;
        segment.container.updatePlayers();
    }

    putToken(token){
        this.token = token;
        this.tile.tokens.push(token);
        this.container.updatePlayers();
        this.token.player.tokens--;
    }

    returnToken(){
        this.token.player.tokens++;
        this.token.display = false;
        this.token = null;
    }

}
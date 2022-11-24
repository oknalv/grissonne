export default class SegmentContainer {
    constructor(firstTileElement) {
        this.players = [];
        this.closed = false;
        this.highlight = false;
        this.segments = [firstTileElement];
        firstTileElement.container = this;
        this.triangles = firstTileElement.triangles === true;
        this.protractor = firstTileElement.protractor === true;
    }

    updatePlayers() {
        let tokenMap = {}
        let max = 0;
        this.players = []
        for(let segment of this.segments){
            if(segment.token){
                if(!tokenMap[segment.token.player.id]){
                    tokenMap[segment.token.player.id] = 1;
                }
                else {
                    tokenMap[segment.token.player.id]++;
                }
                if(tokenMap[segment.token.player.id] > max){
                    this.players = [segment.token.player];
                    max++;
                }
                else if(tokenMap[segment.token.player.id] === max){
                    this.players.push(segment.token.player);
                }
            }
        }
    }
}
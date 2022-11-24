import Segment from "./Segment";

export default class PathSegment extends Segment{

    constructor(jsonPath, tile){
        super(jsonPath, tile);
        this.protractor = jsonPath.protractor === true;
    }

    join(segment, segmentContainerList){
        if(this.container?.protractor === true || this.protractor === true){
            segment.container.protractor = true;
        }
        super.join(segment, segmentContainerList);
    }
    
}
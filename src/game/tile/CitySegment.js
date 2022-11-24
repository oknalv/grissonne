import Segment from "./Segment";

export default class CitySegment extends Segment {

    constructor(jsonCity, tile){
        super(jsonCity, tile);
        this.postIt = jsonCity.postIt === true;
        this.triangles = jsonCity.triangles === true;
    }

    join(segment, segmentContainerList){
        if(this.container?.triangles === true || this.triangles === true){
            segment.container.triangles = true;
        }
        super.join(segment, segmentContainerList);
    }

}
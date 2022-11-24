import Segment from "./Segment";

export default class FieldSegment extends Segment{
    constructor(jsonField, tile){
        super(jsonField, tile);
        if(jsonField.cities){
            this.citySegments = jsonField.cities.map((citySegmentIndex) => {
                return tile.citySegments[citySegmentIndex];
            });
        }
    }
}
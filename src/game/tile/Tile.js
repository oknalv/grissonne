import PathSegment from "./PathSegment";
import CitySegment from "./CitySegment";
import FieldSegment from "./FieldSegment";
import Pot from "./Pot";

export default class Tile {
    static _id = 0;

    constructor(jsonTile, auto){
        this.type = jsonTile.type;
        this.sides = [...jsonTile.sides]
        if(jsonTile.paths){
            this.pathSegments = jsonTile.paths.map((path) => {
                return new PathSegment(path, this);
            });
        }
        if(jsonTile.cities){
            this.citySegments = jsonTile.cities.map((city) => {
                return new CitySegment(city, this);
            });
        }
        if(jsonTile.fields){
            this.fieldSegments = jsonTile.fields.map((field) => {
                return new FieldSegment(field, this);
            });
        }
        if(jsonTile.pot){
            this.pot = new Pot(this);
        }
        this.river = jsonTile.river === true;
        this.turnsRight = null;
        this.rotation = 0;
        this.id = Tile._id++;
        this.auto = auto === true;
        this.tokens = [];
        this.points = null;
    }

    rotate(clockwise){
        this.rotation = clockwise ? this.rotation > 2 ? 0 : this.rotation + 1 : this.rotation < 1 ? 3 : this.rotation - 1;
        if(clockwise){
            this.sides.unshift(this.sides.pop());
        }
        else {
            this.sides.push(this.sides.shift());
        }
        if(this.pathSegments) {
            for(let path of this.pathSegments){
                path.rotate(clockwise);
            }
        }
        if(this.citySegments) {
            for(let city of this.citySegments){
                city.rotate(clockwise);
            }
        }
        if(this.fieldSegments) {
            for(let field of this.fieldSegments){
                field.rotate(clockwise);
            }
        }
    }

}
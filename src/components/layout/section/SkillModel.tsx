export class SkillModel {
    public size: { height: number, width: number }
    public position: { X: number, Y: number }

    constructor(height:number, width:number, X:number, Y:number ) {
        this.size = { height, width };
        this.position = { X, Y };
    }
}
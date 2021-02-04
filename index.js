// Your code here
class Polygon {
    constructor(sides) {
        this.sides = sides;
    }

    get countSides() {
        return this.sides.length;
    }

    get perimeter() {
        return this.sides.reduce((a,b)=>a+b);
    }
}

class Triangle extends Polygon {
    get isValid() {
        return (this.countSides === 3) ? this.sides.every(s=>s<this.perimeter/2 && s > 0): false;
    }
}

class Square extends Polygon {
    get isValid() {
        return (this.countSides === 4) ? this.sides.every(s=>s === this.perimeter/4 && s > 0): false;
    }

    get area() {
        return this.sides[0]**2;
    }
}
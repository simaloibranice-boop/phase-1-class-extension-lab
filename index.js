// Define Polygon class
class Polygon {
  constructor(sides) {
    this.sides = sides;
  }

  // Getter to count number of sides
  get countSides() {
    return this.sides.length;
  }

  // Getter to calculate perimeter
  get perimeter() {
    return this.sides.reduce((total, side) => total + side, 0);
  }
}

// Define Triangle class that inherits from Polygon
class Triangle extends Polygon {
  get isValid() {
    if (this.countSides !== 3) return false;

    let [a, b, c] = this.sides;
    return (a + b > c) && (a + c > b) && (b + c > a);
  }
}

// Define Square class that inherits from Polygon
class Square extends Polygon {
  get isValid() {
    if (this.countSides !== 4) return false;

    let [a, b, c, d] = this.sides;
    return a === b && b === c && c === d;
  }

  get area() {
    if (this.isValid) {
      return this.sides[0] ** 2;
    }
    return null;
  }
}

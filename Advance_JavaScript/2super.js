// Inheritance "extends"
class Triangle {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }

  getArea() {
    return (this.a * this.b) / 2;
  }

  getHypotenuse() {
    return Math.sqrt(this.a**2 + this.b**2);
  }

  describe() {
    return "(runs and hides)";
  }
}

// Inheritance "extends"
class ShyTriangle extends Triangle {
  // don't repeat if not different:
  // will "inherit" from "parent"

  describe() {
    return "I'm shy, I don't want to describe myself.";
  }
}

let shy = new ShyTriangle(3,4);
shy.getArea(); // 12
shy instanceof ShyTriangle; // true
shy instanceof Triangle; // true!


// The Super Keyword and Inheritance

class ColorTriangle extends Triangle {
  constructor(a,b,color) {
    super(a,b);
    this.color = color; // Remember super in this case calls the parents constructor and it's expecting A first and then B
  }
}

let color = new ColorTriangle(3,4,"red");

class ColorMoodTriangle extends ColorTriangle {
  constructor(a,b,color,mood) {
    super(a,b,color);
    this.mood = mood; // Remember super in this case calls the parents constructor and it's expecting A first and then B
  }
}
 let tri = new ColorMoodTriangle(3,4,"green","sad");


//  Static method

class Triangles {
  constructor(name, breed) {
    this.name = name;
    this.breed = breed;
  }
  static species = this.species; // Static method, it belongs to the class, not the instance
}

let myTri = new Triangles("John", "Golden Retriever"); // myTri.species is "Triangles"
myTri.breed; // "Golden Retriever"
myTri.species; // not accessible
Triangles.species; // "Triangles" (static method belongs to the class, not the instance)
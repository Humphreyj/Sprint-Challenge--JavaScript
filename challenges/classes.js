// 1. Copy and paste your prototype in here and refactor into class syntax.
class CuboidMaker1 {
    constructor(cuboidattrs) {
        this.length = cuboidattrs.length;
        this.width = cuboidattrs.width;
        this.height = cuboidattrs.height;
        this.volume = function() {
            return(this.height * this.width * this.length);
          };
          this.surfaceArea = function() {
            return(2 * (this.length * this.width + this.length * this.height + this.width * this.height));
    };
  } 
  }
// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

class CubeMaker extends CuboidMaker1 {
    constructor(cubeAttrs) {
        super(cubeAttrs);
        this.volume = function() {
            return Math.pow(this.length,3);
        };
        this.surfaceArea = function() {
            return (6 *(Math.pow(this.length, 2)));
        }
    }
}

const cube = new CubeMaker({
    height: 5,
    width: 5,
    length:5
})

console.log(cube.volume())
console.log(cube.surfaceArea());
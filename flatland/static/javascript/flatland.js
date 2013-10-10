var d = {

  mode: "2d",
  character: {
    coord: [[10,10],[20,20],[30,30]]
  },
  triangle: {
    coord: [[10,10],[20,20],[30,30]]
  }

};

var visualizeShape = function(shape) {
  console.log(shape.coord);
}

visualizeShape(d.character);


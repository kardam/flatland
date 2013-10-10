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

$(document).ready(function() {

  var paper = Raphael(10, 10, 500, 500);
  var circle = paper.circle(50, 40, 10);
  circle.attr("fill", "#f00");
  circle.attr("stroke", "#fff");

  var coord = [10,10,50,50]
  var c = paper.rect(10,10,50,50);

});

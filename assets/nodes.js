
var editor = Ned.create("#nodes");
editor.screenToWorld = function (pos) {
    var rect = this.svg.getBoundingClientRect();

    return {
        x: (pos.x - rect.left),
        y: (pos.y - rect.top)
    };
};


// create a new node
var n1 = editor.createNode("Open App");

// position and size the node
n1.position = { x: 100, y: 180 };
n1.size = { width: 100, height: 60 };

var n1i1 = n1.addInput("File Path");

var n1o1 = n1.addOutput("Next");

var n2 = editor.createNode("String");

n2.eForeign.insertAdjacentHTML("afterbegin",
    `<div class="nodeContent">
    <textarea>Enter String Here.</textarea>
  </div>
  `);


  d3.ns.prefix.custom = "https://d3js.org/namespace/custom";

var width = window.innerWidth,
    height = window.innerHeight;
 
// Add our "custom" sketch element to the body.
var sketch = d3.select("div#plotD").append("custom:sketch")
        .attr("width", width)
        .attr("height", height)


    .call(custom);


// On each mouse move, create a circle that increases in size and fades away.

      var mouseX;
      var mouseY;

function mousemovecircles(event) {






  sketch.append("custom:circle")
      .attr("x", event.clientX)
      .attr("y", event.clientY)
      .attr("radius", 0)
      .attr("strokeStyle", "#ffd200")
    .transition()
      .duration(2000)
      .ease(Math.sqrt)
      .attr("radius", 200)
      .attr("strokeStyle", "black")
      .remove();
};

function custom(selection) {
  selection.each(function() {
    root = this,
       canvasX = root.parentNode.appendChild(document.createElement("canvas")),
        contextX = canvasX.getContext("2d");

    canvasX.style.position = "absolute";
    canvasX.style.top = root.offsetTop + "px";
    canvasX.style.left = root.offsetLeft + "px";

    // It'd be nice to use DOM Mutation Events here instead.
    // However, they appear to arrive irregularly, causing choppy animation.
    d3.timer(redraw);

    // Clear the canvas and then iterate over child elements.
    function redraw() {

        var sketchwidth = sketch.clientWidth;
        var sketchheight = sketch.clientHeight;

/////////////      canvasX.width = root.getAttribute("width");
/////////////      canvasX.height = root.getAttribute("height");

      canvasX.width = window.innerWidth;
      canvasX.height = window.innerHeight;

 
      for (var child = root.firstChild; child; child = child.nextSibling) draw(child);
    }

  


    // For now we only support circles with strokeStyle.
    // But you should imagine extending this to arbitrary shapes and groups!
    function draw(element) {
      switch (element.tagName) {
        case "circle": {
          contextX.strokeStyle = element.getAttribute("strokeStyle");
          contextX.beginPath();
          contextX.arc(element.getAttribute("x"), element.getAttribute("y"), element.getAttribute("radius"), 0, 2 * Math.PI);
          contextX.stroke();
          break;
        }
      }
    }
 
   
   // Redraw based on the new size whenever the browser window is resized.
      window.addEventListener("resize", redraw);

 });
};




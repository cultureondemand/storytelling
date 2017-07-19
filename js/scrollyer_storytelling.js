////////////////////////////////////

var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
                            window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;

var cancelAnimationFrame = window.cancelAnimationFrame || window.mozCancelAnimationFrame;

var myReq;
var myReqGLF;

////////////////////////////////
/////// set renderers
  
 
/**
 * scrollVis - encapsulates
 * all the code for the visualization
 * using reusable charts pattern:
 * http://bost.ocks.org/mike/chart/
 */
var scrollVis = function() {
  // constants to define the size
  // and margins of the vis area.

var width = window.innerWidth,
    height = window.innerHeight;

  var margin = {top:10, left:20, bottom:80, right:10};

  // Keep track of which visualization
  // we are on and which was the last
  // index activated. When user scrolls
  // quickly, we want to call all the
  // activate functions that they pass.
  var lastIndex = -1;
  var activeIndex = 0;

 
  // main svg used for visualization
  var svg = null;

  // d3 selection that will be used
  // for displaying visualizations
  var g = null;
  var go = 0;


  // When scrolling to a new section
  // the activation function for that
  // section is called.
  var activateFunctions = [];
  // If a section has an update function
  // then it is called while scrolling
  // through the section with the current
  // progress through the section.
  var updateFunctions = [];

  /**
   * chart
   *
   * @param selection - the current d3 selection(s)
   *  to draw the visualization in. For this
   *  example, we will be drawing it in #vis
   */
  var chart = function(selection) {
     selection.each(function() {
   

      setupSections();

   });
  };


  /**
   * setupVis - creates initial elements for all
   * sections of a visualization.
   */
  setupVis = function() {
   

 
 
  };

  /**
   * setupSections - each section is activated
   * by a separate function. Here we associate
   * these functions to the sections based on
   * the section's index.
   *
   */
  setupSections = function() {
    // activateFunctions are called each
    // time the active section changes
 

    activateFunctions[0] = showTitle0;
    activateFunctions[1] = showTitle1;
    activateFunctions[2] = showTitle2;
    activateFunctions[3] = showTitle3;
    activateFunctions[4] = showTitle4;
    activateFunctions[5] = showTitle5;
    activateFunctions[6] = showTitle6;
    activateFunctions[7] = showTitle7;
    activateFunctions[8] = showTitle8;
    activateFunctions[9] = showTitle9;
    activateFunctions[10] = showTitle10;



    // updateFunctions are called while
    // in a particular section to update
    // the scroll progress in that section.
    // Most sections do not need to be updated
    // for all scrolling and so are set to
    // no-op functions.
    for(var i = 0; i < 11; i++) {
      updateFunctions[i] = function() {};
    }
 ////////////////////////////   updateFunctions[13] = updateCough;
  };

  /**
   * ACTIVATE FUNCTIONS
   *
   * These will be called their
   * section is scrolled to.
   *
   * General pattern is to ensure
   * all content for the current section
   * is transitioned in, while hiding
   * the content for the previous section
   * as well as the next section (as the
   * user may be scrolling up or down).
   *
   */

  /**
   *
   */
  function showTitle0() {


    
 
 //////////////
 ////////////
 /////////



 ////////////////////////////////////////////
 ///////// SET INITIAL CONTAINER VISIBILITY
 ////////////////////////////////////////////


var vis = document.getElementById( 'vis' );
vis.setAttribute("style", "display:none; ");

 


var spots = document.getElementById( 'spots' );
spots.setAttribute("style", "display:none; ");


 


var menu = document.getElementById( 'menu' );
menu.setAttribute("style", "display:none; ");


 

////////////////////////////////////////////
////////// Scroll prompt image turned off
var spotsabout = document.getElementById( 'spotsabout' );
spotsabout.setAttribute("style", "display:inline-block; ");

 
 
////////////////////////////////////////////
////////// Scroll prompt image turned off
var threespotA = document.getElementById( 'threespotA' );
threespotA.setAttribute("style", "display:inline-block; ");

var threespotB = document.getElementById( 'threespotB' );
threespotB.setAttribute("style", "display:inline-block; ");

var threespotC = document.getElementById( 'threespotC' );
threespotC.setAttribute("style", "display:inline-block; ");

var threespotD = document.getElementById( 'threespotD' );
threespotD.setAttribute("style", "display:inline-block; ");

 


var container0 = document.getElementById( 'container0' );
container0.setAttribute("style", "display:inline-block; ");


var container1 = document.getElementById( 'container1' );
container1.setAttribute("style", "display:none; ");

var container2 = document.getElementById( 'container2' );
container2.setAttribute("style", "display:none; ");

var container3 = document.getElementById( 'container3' );
container3.setAttribute("style", "display:none; ");

var container4 = document.getElementById( 'container4' );
container4.setAttribute("style", "display:none; ");

var container5 = document.getElementById( 'container5' );
container5.setAttribute("style", "display:none; ");


var container6 = document.getElementById( 'container6' );
container6.setAttribute("style", "display:none; ");


var container7 = document.getElementById( 'container7' );
container7.setAttribute("style", "display:none; ");


var container8 = document.getElementById( 'container8' );
container8.setAttribute("style", "display:none; ");


var container9 = document.getElementById( 'container9' );
container9.setAttribute("style", "display:none; ");


var container10 = document.getElementById( 'container10' );
container10.setAttribute("style", "display:none; ");

//////////////////////////////////////////////////

////////////////////////////////////////////
////////// Scroll prompt image turned off
var strokepaint = document.getElementById( 'strokepaint' );
strokepaint.setAttribute("style", "display:none; ");







var svgContainer = d3.select("#stroke").append("svg")
.style("width", '135px')
.style("height", '128px');
//////.style("background-color","blue");

var clipRect = svgContainer.append('svg:defs')
                .append('svg:clipPath')
                .attr('id', 'shutter-clip')
                .append('rect')
                .attr({
                    x: 0,
                    y: 0,
                    height: 135,
                    width: 128
                })
   
   
  
           
function strike() {
var imgs = svgContainer.append("svg:image")
    .attr("xlink:href", "images/strikeB.png")
    .attr("width", "0")
    .attr("height", "0")
    .attr("clip-path", "url(#shutter-clip)")
    
        .transition()
      .duration(66)
      .ease(Math.sqrt)
    .attr("width", "135px")

    .attr("height", "128px");

}

 


 
 if (go < 6) {
 
      setTimeout(function(){ 

  go=6;
strike();
 clearTimeout();


        }, 3666);

 } else {
      setTimeout(function(){ 
 strike();
  clearTimeout();
       }, 366);

 }       
        
        
        

///////////////////////////////////////////
//// resize listeners for three.js items
 
window.addEventListener("resize", onWindowResize, false);
window.addEventListener("resize", onWindowResizeGLF, false);


  d3.ns.prefix.custom = "https://d3js.org/namespace/custom";

var width = window.innerWidth,
    height = window.innerHeight;
 
// Add our "custom" sketch element to the body.
var sketch = d3.select("div#big0").append("custom:sketch")
        .attr("width", width)
        .attr("height", height)


    .call(custom);


// On each mouse move, create a circle that increases in size and fades away.

      var mouseX;
      var mouseY;

 document.addEventListener("mousemove", mousemovecircles, false);
 document.addEventListener("mousedown", mousemovecirclesDown, false);

 

 var canvasBG;

 var canvasWidthpx = window.innerWidth + "px",
    canvasHeightpx = window.innerHeight + "px";


 var canvasWidth = window.innerWidth,
    canvasHeight = window.innerHeight;

 
var context;
var ctxBG;

  canvasBG = document.getElementById('cbg');

/////console.log(canvasBG);
    canvasBG.style.display = "inline-block";
    canvasBG.style.position = "fixed";
    canvasBG.setAttribute('width', canvasWidthpx);
    canvasBG.setAttribute('height', canvasHeightpx);

var ctxBG = canvasBG.getContext('2d');
 
 

//console.log(canvasWidth);
////console.log(canvasHeight);



var img = document.createElement('IMG');
      ctxBG.fillStyle = 'black';
    ctxBG.fillRect(0, 0, canvasWidth, canvasHeight);

   ctxBG.beginPath();
    ctxBG.drawImage(img, 0, 0);
    ctxBG.closePath();    
    ctxBG.globalCompositeOperation = 'destination-out';    
 
img.src = "css/3spotgrunge.jpg";
    
 


function mousemovecirclesload(event) {

    for(var loc3 = 1; loc3 < 2; loc3++) {


  sketch.append("custom:circle")
      .attr("x", ((width/2)*loc3))
      .attr("y", ((height/2)*loc3))
      .attr("radius", 0)
      .attr("strokeStyle", "#ffd200")
    .transition()
      .duration(6666)
      .ease(Math.sqrt)
      .attr("radius", 666)
      .attr("strokeStyle", "#828282")
      .remove();


     var grd = ctxBG.createRadialGradient((width/2)*loc3, (height/2)*loc3, 0, (width/2)*loc3, (height/2)*loc3, 96);
    grd.addColorStop(0, "rgba(255,255,255,.6)"); 
    grd.addColorStop(1, "transparent"); 
    ctxBG.fillStyle = grd;
    ctxBG.beginPath();
    ctxBG.arc((width/2)*loc3,(height/2)*loc3,96,0,Math.PI*2,true);
    ctxBG.fill();
    ctxBG.closePath();
     
       }
   
      loc3=25;





         



};


function mousemovecircles(event) {



  sketch.append("custom:circle")
      .attr("x", event.clientX)
      .attr("y", event.clientY)
      .attr("radius", 0)
      .attr("strokeWidth", "10px")
      .attr("strokeStyle", "#ffd200")
    .transition()
      .duration(666)
      .ease(Math.sqrt)
      .attr("radius", 200)
        .attr("strokeWidth", "10px")
    .attr("strokeStyle", "black")
      .remove();



          var grd = ctxBG.createRadialGradient(event.clientX, event.clientY, 0, event.clientX, event.clientY, 96);
    grd.addColorStop(0, "rgba(255,255,255,.6)"); 
    grd.addColorStop(1, "transparent"); 
    ctxBG.fillStyle = grd;
    ctxBG.beginPath();
    ctxBG.arc(event.clientX,event.clientY,96,0,Math.PI*2,true);
    ctxBG.fill();
    ctxBG.closePath();

};





function mousemovecirclesDown(event) {



  sketch.append("custom:circle")
      .attr("x", event.clientX)
      .attr("y", event.clientY)
      .attr("radius", 0)
      .attr("strokeStyle", "#ffd200")
    .transition()
      .duration(666)
      .ease(Math.sqrt)
      .attr("radius", 200)
      .attr("strokeStyle", "#black")
      .remove();
      
    var copy ="Threespot loves you";  
      
//////// sketch.append("custom:copy");

//////// console.log(copy);
 
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
/////// canvasBG.width = window.innerWidth;
    ////canvasBG.height = window.innerHeight;

 
      for (var child = root.firstChild; child; child = child.nextSibling) draw(child);
    }



    // Clear the canvas and then iterate over child elements.
    function resredraw() {
 
        var sketchwidth = sketch.clientWidth;
        var sketchheight = sketch.clientHeight;

/////////////      canvasX.width = root.getAttribute("width");
/////////////      canvasX.height = root.getAttribute("height");

      canvasX.width = window.innerWidth;
      canvasX.height = window.innerHeight;
 canvasBG.width = window.innerWidth;
    canvasBG.height = window.innerHeight;


var img = document.createElement('IMG');
      ctxBG.fillStyle = 'black';
     ctxBG.fillRect(0, 0, window.innerWidth, window.innerHeight);
 
   ctxBG.beginPath();
    ctxBG.drawImage(img, 0, 0);
    ctxBG.closePath();    
    ctxBG.globalCompositeOperation = 'destination-out';    
 
img.src = "images/3spotgrunge.jpg";
    

 
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
   window.addEventListener("resize", resredraw, false);

window.addEventListener('load', mousemovecirclesload, false);

 });
};



  
 
 ////////////////////////////////////////////////
 /////////// remove custom interactive below


document.removeEventListener("mousemove", onDocumentMouseMove);
////////       window.cancelAnimationFrame(animateGL);
document.removeEventListener( 'touchstart', onDocumentTouchStart, false );
/////////window.removeEventListener("resize", onWindowResize, false);

cancelAnimationFrame(myReq);


 
///////////////////
//////
var CanvasImgBG = document.getElementById( 'CanvasImgBG' );
CanvasImgBG.setAttribute("style", "visibility:inherit; ");



  }

  /**
   *
   */
  function showTitle1() {

 document.getElementById( 'menu' ).style.display = 'inline-block'; 

 
//////////////////////////////////////////////// 
 
///////////////////
//////
var CanvasImgBG = document.getElementById( 'CanvasImgBG' );
CanvasImgBG.setAttribute("style", "visibility:inherit; ");

////////////////////////////////////////////
////////// Scroll prompt image turned off

////////////////////////////////////////////
////////// Scroll prompt image turned off
var threespotA = document.getElementById( 'threespotA' );
threespotA.setAttribute("style", "display:none; ");

var threespotB = document.getElementById( 'threespotB' );
threespotB.setAttribute("style", "display:none; ");

var threespotC = document.getElementById( 'threespotC' );
threespotC.setAttribute("style", "display:none; ");

var threespotD = document.getElementById( 'threespotD' );
threespotD.setAttribute("style", "display:none; ");

 
 

///////////////////
//////
var CanvasImgA = document.getElementById( 'CanvasImgA' );
CanvasImgA.setAttribute("style", "visibility:hidden; ");


 
 


////////////////////////////////////////////
////////// Video item to turn off
//////////
///////// var videoplay = document.getElementById('bgvid0');
///////// videoplay.setAttribute("style", "display:none; ");
///////////////////////////////////////////

/////////////////////////////////////////////////
///////// remove custom interactive above
document.removeEventListener("mousemove", this.mousemovecircles, false);
document.removeEventListener("mousedown", this.mousemovecirclesDown);



   d3.select("svgContainer.parent").selectAll("*").remove();
 d3.select("#stroke").selectAll("*").remove();




d3.select("sketch.parent").selectAll("*").remove();
  d3.select("svg.parent").selectAll("*").remove();
 d3.select("#canvasBG").selectAll("*").remove();
 d3.select("#canvasX").selectAll("*").remove();
 
  
d3.select("#big0").select("canvas").remove();
d3.select("#big0").select("sketch").remove();
 this.contextX = null;
  this.canvasX = null;
 

    contextX.fillStyle = 'black';
    contextX.fillRect(0, 0, width, height);
 
  
 
////////////////////////////////////////////
////////// Scroll prompt image turned off
var scrollimg = document.getElementById( 'scrollimg' );
scrollimg.setAttribute("style", "display:none; ");



////////////////////////////////////////////
////////// Scroll prompt image turned off
var spotsabout = document.getElementById( 'spotsabout' );
spotsabout.setAttribute("style", "display:none; ");





/////////////////////////////////////////////////////////
///////////////


document.addEventListener("mousemove", onDocumentMouseMove, false);
document.addEventListener("mousedown", onDocumentMouseMoveB, false);


/////////////////////////////////////////////
///////////////////

function setOrientationControls(e) {
  if (!e.alpha) {
    return;
  }
document.removeEventListener("mousemove", onDocumentMouseMove);
document.removeEventListener("mousedown", onDocumentMouseMoveB);


controlsGL = new THREE.DeviceOrientationControls(cameraGL, true);
controlsGL.connect();
controlsGL.update();
 window.removeEventListener('deviceorientation', setOrientationControls, true);

}
 window.addEventListener('deviceorientation', setOrientationControls, true);

//////////////
//////////////

//////////////////////////
///////////////
function animateGL() {

cameraGL.position.x += ( mouseX - cameraGL.position.x ) * .05;
cameraGL.position.y += ( - mouseY + 200 - cameraGL.position.y ) * .05;
cameraGL.lookAt( sceneGL.position );
myReq = requestAnimationFrame(animateGL);
rendererGL.render( sceneGL, cameraGL ); 

			}

myReq = requestAnimationFrame(animateGL);

//////////////
/////////////////



////////////////////////////////////////////
////////// Remove SVG from below
 d3.select("g.parent").selectAll("*").remove();
 d3.select("svg.parent").selectAll("*").remove();
 d3.select("containerGLX.parent").selectAll("*").remove();
d3.select("#vis").select("svg").remove();
d3.select("#vis").select("g").remove();

this.rootX = null;
this.nodesX = null;
this.forceX = null;
this.linkX = null;
 

  }


  /**
   *
   *
   */
  

function showTitle2() {


///////////////////
//////
var CanvasImgBG = document.getElementById( 'CanvasImgBG' );
CanvasImgBG.setAttribute("style", "background-image:url(3spotgrunge.jpg); ");





var container0 = document.getElementById( 'container0' );
container0.setAttribute("style", "display:none; ");


///////////////////////////////////////
/////// remove custom canvas from above
document.removeEventListener("mousemove", onDocumentMouseMove);
document.removeEventListener("mousedown", onDocumentMouseMoveB);
cancelAnimationFrame(myReq);
document.removeEventListener( 'touchstart', onDocumentTouchStart, false );
///////////////window.removeEventListener("resize", onWindowResize, false);
 
 
//////////////////////////////////////////////// 
//////////////////////////////////////////
///////////// remove interactive below
////////////////////////////////////////////
 d3.select("svg.parent").selectAll("*").remove();
 d3.select("#vis").select("svg").remove();
 
 
this.root = null;
this.node = null;
this.force = null;
this.link = null;
this.states = null;
this.path = null;

//////////////////////////
//////////////// force 1

var width = window.innerWidth,
      height = window.innerHeight,
    rootX;




var vis = document.getElementById( 'vis' );
vis.setAttribute("style", "display:inline-block; ");

 


 
 var containerGLX = d3.select('#vis')
  .append('svg')
        .attr("class", "network")
        .attr("opacity", "1")
     ///   .attr("viewBox", "0 0 1000 540")
   /////     .attr("preserveAspectRatio", "xMinYMin meet")

        .attr("width", width)
        .attr("height", height);




var forceX = d3.layout.force()
  /////  .linkDistance(15)
  .linkDistance(height/18)
         .theta(.1)
  
        .gravity(0.1)   
    .charge(-1600)    
    .friction(0.7)   



     .size([width, height]);
 




 

var linkX = containerGLX.selectAll(".link"),
    nodeX = containerGLX.selectAll(".node");

d3.json("data/ourworkier.json", function(error, json) {
  if (error) throw error;

  rootX = json;
  update();
});

function update() {
  var nodesX = flatten(rootX),
      linksX = d3.layout.tree().links(nodesX);

  // Restart the force layout.
  forceX
      .nodes(nodesX)
      .links(linksX)
      .start();

  // Update links.
  linkX = linkX.data(linksX, function(d) { return d.target.id; });

  linkX.exit().remove();

  linkX.enter().insert("line", ".node")
      .attr("class", "link");

  // Update nodes.
  nodeX = nodeX.data(nodesX, function(d) { return d.id; });

  nodeX.exit().remove();

  var nodeEnter = nodeX.enter().append("g")
      .attr("class", "node")
      .on("click", click)
      .call(forceX.drag);

  nodeEnter.append("circle")
      .attr("r", function(d) { return Math.sqrt(d.size) / 1.05 || 4.5; });



/////nodeEnter.append("rect")
 ///   .attr({
 ///     "class": "ourworktextbg",
 ///     x: -70,
 ///     y: -10,
 //     width: 140,
 ///     height: 20
///    })
  ///  .style("fill", "white");



  nodeEnter.append("text")
      .attr("dy", ".35em")
          .attr("text-anchor", "middle")
.attr("class", "ourworktext")
      .style("font-size", "1.1vh")
       .style("font-weight", "800")

      .style("fill", "#000")


      .text(function(d) { return d.name; });




  nodeX.select("circle")
      .style("fill", color);
}


    forceX.on("tick", function(){

/////////////function tick() {
  linkX.attr("x1", function(d) { return d.source.x; })
      .attr("y1", function(d) { return d.source.y; })
      .attr("x2", function(d) { return d.target.x; })
      .attr("y2", function(d) { return d.target.y; });

  nodeX.attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; });
});

function color(d) {
  return d._children ? "#828282" // collapsed package
      : d.children ? "#ffd200" // expanded package
      : "#fff"; // leaf node
}

// Toggle children on click.
function click(d) {
  if (d3.event.defaultPrevented) return; // ignore drag
  if (d.children) {
    d._children = d.children;
    d.children = null;
  } else {
    d.children = d._children;
    d._children = null;
  }
  update();
}

// Returns a list of all nodes under the root.
function flatten(rootX) {
  var nodesX = [], i = 0;

  function recurse(nodeX) {
    if (nodeX.children) nodeX.children.forEach(recurse);
    if (!nodeX.id) nodeX.id = ++i;
    nodesX.push(nodeX);
  }

  recurse(rootX);
  return nodesX;
}

 
 d3.select("#tooltipP").remove();


  }



/////////////
//////////



  /**
   *
   */
  function showTitle3() {




////////////////////////////////////////////
////////// Remove SVG from above

 d3.select("containerGLX.parent").selectAll("*").remove();
d3.select("g.parent").selectAll("*").remove();
d3.select("svg.parent").selectAll("*").remove();
d3.select("#vis").select("svg").remove();

this.rootX = null;
this.nodesX = null;
this.forceX = null;
this.linkX = null;
this.containerGLX = null;

////////////////////////////////////////////
////////// Remove SVG from below


 

var vis = document.getElementById( 'vis' );
vis.setAttribute("style", "display:inline-block; ");






var width = window.innerWidth,
      height = window.innerHeight,
      centered;

var path = d3.geo.path()

    .projection(null);

var radius = d3.scale.sqrt()
    .domain([0, 1e6])
    .range([0, 15]);

var svg = d3.select("#vis").append("svg")

     .attr("width", (width/2))
    .attr("height", (height/2))
    .style("text-align","center");

var title;
    
    var tooltip = d3.select("body")
      .append("div")
          .attr('id', 'tooltipP')
      .style("position", "absolute")
      .style("z-index", "99999999")
      .style("color", "#fff")
      .style("font-size", "2vh")
      .style("font-weight", "800")
      .style("background-color", "#000")
      .style("padding", "1em")
      .style("visibility", "hidden")
      .text("a simple tooltip");


 
d3.json("data/usa.json", function(error, us) {
  if (error) return console.error(error);

  svg.append("path")
      .datum(topojson.feature(us, us.objects.nation))
      .attr("width", (width/2))
    .attr("height", (height/2))
     .attr("class", "land")
          .attr("transform", "translate(" + width / 5 + "," + height / 12 + ")")

      .attr("d", path);
 
  svg.append("path")
      .datum(topojson.mesh(us, us.objects.states, function(a, b) { return a !== b; }))
      .attr("class", "border border--state")
     .attr("width", (width/2))
    .attr("height", (height/2))
          .attr("transform", "translate(" + width / 5 + "," + height / 12 + ")")
      .attr("d", path);

  svg.append("g")
        .attr("width", (width/2))
    .attr("height", (height/2))
             .attr("transform", "translate(" + width / 5 + "," + height / 12 + ")")

      .attr("class", "bubble")
    .selectAll("circle")
      .data(topojson.feature(us, us.objects.counties).features)

    .enter().append("circle")

 


      .attr("transform", function(d) { return "translate(" + path.centroid(d) + ")"; })

      .attr("r", function(d) { return radius(d.properties.population); })
               


        .on("mouseover", function(d) {
          d3.select(this).style("opacity", 1);
          d3.select(this).style("cursor", "pointer");




          return tooltip.style("visibility", "visible").html(d.properties.name  + "<br />" + "Population: " + d.properties.population);
        })                  
        .on("mouseout", function(d) {
          d3.select(this).style("opacity", .8);
          return tooltip.style("visibility", "hidden");
        })
        .on("mousemove", function(){
          return tooltip.style("top", (event.pageY+15)+"px").style("left",(event.pageX-100)+"px");
        })
 
 
    /////  .attr("radius", 200)
});


 




////////////////////////////////////////////
///// remove interactive below

 cancelAnimationFrame(myReqGLF);
 document.removeEventListener("mousemove", onDocumentMouseMoveGLF, false);
 document.removeEventListener("mousedown", onDocumentMouseMoveGLFB, false);
//////////////window.removeEventListener("resize", onWindowResizeGLF, false);
document.removeEventListener( 'touchstart', onDocumentTouchStartGLF, false );

 
   }


///////
///////




  /**
   *
   *
   */
  function showTitle4() {
 
 d3.select("#tooltipP").remove();

var vis = document.getElementById( 'vis' );
vis.setAttribute("style", "display:none; ");

 

 ////////////////////////////////////////////
////////// Remove interactive from above
 ////////////////////////////////////////////
 d3.select("svg.parent").selectAll("*").remove();
 d3.select("#vis").select("svg").remove();
 

this.root = null;
this.node = null;
this.force = null;
this.link = null;
this.states = null;
this.path = null;
 

//////////////////////////////////////////////////////
////// add in 04vr.js and add listeners and loops 


 document.addEventListener("mousemove", onDocumentMouseMoveGLF, false);
 document.addEventListener("mousedown", onDocumentMouseMoveGLFB, false);
document.addEventListener( 'touchstart', onDocumentTouchStartGLF, false );



       
 function animateGLF() {

         cameraGLF.position.x += ( mouseX - cameraGLF.position.x ) * .05;
        cameraGLF.position.y += ( - mouseY + 200 - cameraGLF.position.y ) * .05;
        cameraGLF.lookAt( sceneGLF.position );
myReqGLF = requestAnimationFrame(animateGLF);

        rendererGLF.render( sceneGLF, cameraGLF );

      }

myReqGLF = requestAnimationFrame(animateGLF);

////////////////////////////
////////////////////////////
 d3.select("#tooltip").remove();

///////
///////

 
  }



/////
////////


  /**
   *
   */
  function showTitle5() {
  

var vis = document.getElementById( 'vis' );
vis.setAttribute("style", "display:inline-block; ");


//////////////////////////////////////////
///// remove interactive above

cancelAnimationFrame(myReqGLF);
document.removeEventListener("mousemove", onDocumentMouseMoveGLF, false);
document.removeEventListener("mousedown", onDocumentMouseMoveGLFB, false);
///////////////window.removeEventListener("resize", onWindowResizeGLF, false);
document.removeEventListener( 'touchstart', onDocumentTouchStartGLF, false );

////////////////////////////////////////////
///////////////////////////////////////////

var width = window.innerWidth, height = window.innerHeight, rootX;



 
 
 
 
 
 
 
 
 
  var padding = 1, // separation between same-color nodes
        clusterPadding = 10, // separation between different-color nodes
        maxRadius = 42;

    var n = 143, // total number of nodes
        m = 19, // number of distinct clusters
    		x = 7; // radius multiplier

    var color = d3.scale.category20()
        .domain(d3.range(m));

    // The largest node for each cluster.
    var clusters = new Array(m);




    var nodes = [{ 

      "title": "Citizens for Responsibility and Ethics in Washington",
           "icon": "point",
          "cat":"community",

                    "focus":"opengov","group":"7",


 

         "id" : "1e775ac7188479c04d861987f5e11ca5793aa655",
         "place_id" : "ChIJ_QqXvr63t4kRx6tGXpv2Oms",
         "reference" : "<strong>Citizens for Responsibility and Ethics in Washington</strong><p>6th Floor, 455 Massachusetts Ave NW, Washington, DC 20001"
     },
       {
           
          "title": "Brainfood",
           "icon": "point",

          "cat":"community_sm",
                     "focus":"innovation","group":"10",

         "id" : "fee2b8f006e3448e57a5c95211f7f42169951740",
         "place_id" : "ChIJzZkbv763t4kRyzaG_3bRRDU",
         "reference" : "<strong>Brainfood</strong><p>755 8th St NW, Washington, DC 20001"
     },
       {
           
          "title": "",
           "icon": "point",
          "cat":"community",

          
"id" : "6cbe0f6210605ff83eea7b9413ad04c438d94d39",
         "place_id" : "ChIJgzO01Y-3t4kRDDdRa-i9Czs",
         "reference" : "<strong>Board Source</strong><p>750 9th Street, NW #650, Washington, DC 20001"
     },
       { 
         
          "title": "Care2 Services",
           "icon": "point",
          "cat":"digital",
          "focus":"services","group":"6",

          
         "id" : "6ce3780d36faa533f0eac8816d58af032fb74596",
         "place_id" : "ChIJLR3s-Oe3t4kRHE4DO-KeNzE",
        "reference" : "<strong>Care2 Services</strong><p>718 7th St NW, Washington, DC 20001"
     },
       { 
         
          "title": "National Endowment for Democracy",
           "icon": "point",
          "cat":"community",
          "focus":"civiclife","group":"9",

          
"id" : "021f6aef95ff6d1781bd5bd8d0ec4956fac2fb1e",
         "place_id" : "ChIJx8VPpse3t4kRQlB0rhqx8IA",
         "reference" : "<strong>National Endowment for Democracy</strong><p>1025 F St NW # 800, Washington, DC 20004"
     },
       { 
         
          "title": "National Council of Nonprofits",
           "icon": "point",
          "cat":"community",
          "focus":"bestpractice","group":"11",

          
         "id" : "b1b961802c045b2db97a44d0473d39571c330896",
         "place_id" : "ChIJL4sX_7-3t4kRAVXzUhdr8o8",
"reference":"<strong>National Council of Nonprofits</strong><p>1001 G St NW #700e, Washington, DC 20001 "    },
       { 
         
          "title": "The Pew Charitable Trusts",
           "icon": "point",
          "cat":"community",
          "focus":"civiclife","group":"9",

          
"id" : "16d77112ebaa4f72f5bc59c34a3de199974c4236",
         "place_id" : "ChIJ7SFQWpC3t4kRx3vUkwxik4s",
         "reference" : "<strong>The Pew Charitable Trusts</strong><p>901 E St NW # 10, Washington, DC 20004"
     },
       { 
         
          "title": "National Parks Conservation Association",
           "icon": "point",
          "focus":"civiclife","group":"9",

          
"id" : "8296a4d05de09266a4316bf2c0be2b663d20b9d4",
         "place_id" : "ChIJUUIrNbi3t4kRY6e1rDPh4po",
         "reference" : "<strong>National Parks Conservation Association</strong><p>777 6th St NW #700, Washington, DC 20001"
     },
       { 
          "title": "Environmental Council of the States",
           "icon": "point",
          "cat":"community",
          "focus":"environment","group":"4",

          
"id" : "711c43cc4986cf77aa519dbb4fdcae53cf819596",
         "place_id" : "ChIJaRQ9brm3t4kRv1mreciH_Gw",
         "reference" : "<strong>Environmental Council of the States</strong><p>50 F St NW #350, Washington, DC 20001"
     },
       { 
         
          "title": "National League of Cities",
           "icon": "point",
          "cat":"community",
          "focus":"economic","group":"3",

          
"id" : "865f59854a376b7eab7077b1ba436f3e077c107d",
         "place_id" : "ChIJAQAAAPG3t4kRRgRHl9k6_Ys",
         "reference" : "<strong>National League of Cities</strong><p>660 North Capitol St NW #450, Washington, DC 20001"
     },
       { 
         
          "title": "American Forests",
           "icon": "point",
          "cat":"community",
          "focus":"environment","group":"4",

          
"id" : "61cd74fa21ff546d8b29335aa0c6997b6b8de95c",
         "place_id" : "ChIJeeJ9Dbm3t4kRNV_gVSB8guo",
         "reference" : "<strong>American Forests</strong><p>1220 L St NW #750, Washington, DC 20005"
     },
       { 
          "title": "Center for Science in the Public Interest",
           "icon": "point",
          "cat":"community",
          "focus":"civiclife","group":"9",

          
"id" : "5d41fac6a59f3f3e2adb825309fcdffb6bf8ace2",
         "place_id" : "ChIJOazd7ri3t4kRYVjVvcc8je4",
         "reference" : "<strong>Center for Science in the Public Interest</strong><p>1220 L St NW #300, Washington, DC 20005"
     },
       { 
         
          "title": "SisterMentors, A Project of EduSeed",
           "icon": "point",
          "cat":"community_sm",
          "focus":"education","group":"5",

          
"id" : "8dd6f635e336e24ffb139b70de72afc19435b0d0",
         "place_id" : "ChIJedZ75Li3t4kRtwO7sTanfhQ",
         "reference" : "<strong>SisterMentors, A Project of EduSeed</strong><p>901 K St NW #700, Washington, DC 20001"
     },
       { 
         
          "title": "National Organization-Women",
           "icon": "point",
          "cat":"community",
          "focus":"humanrights","group":"17",

          
"id" : "3b0089280cce6f05f98d1be78049d314d64efb03",
         "place_id" : "ChIJM9FPkrm3t4kRxQuG-Vl--ho",
         "reference" : "<strong>National Organization-Women (NOW)</strong><p>Washington Gas Building, 1100 H St NW #300, Washington, DC 20005"
     },
       { 
         
          "title": "Running Start",
           "icon": "point",
          "cat":"community",
          "focus":"civiclife","group":"9",

          
"id" : "c6165acbefac925dfd0944ec186ed3742f8bbc3d",
         "place_id" : "ChIJYe6BbbK3t4kRyuWW7wnE7d4",
         "reference" : "<strong>Running Start</strong><p>Washington Gas Building, 1100 H St NW #300, Washington, DC 20005"
     },
       { 
         
          "title": "Amazon Conservation Association",
           "icon": "point",
          "cat":"community",
          "focus":"environment","group":"4",

          
"id" : "25ca591c4c37a88823bfe8c24bbf76bc543a4af3",
         "place_id" : "ChIJ2UB40ra3t4kR7hv5wqOMtqk",
         "reference" : "<strong>Amazon Conservation Association</strong><p>1012 14th St NW #625, Washington, DC 20005"
     },
       { 
          "title": "Wounded Warrior Project",
           "icon": "point",
          "cat":"community",
          "focus":"veterans",
          "focus":"civiclife","group":"9",

          
"id" : "34afeee57e8121704b6cc6ef109d897d3c49d49f",
         "place_id" : "ChIJ0dx6sbi3t4kRg8sTkbCW-j0",
         "reference" : "<strong>Wounded Warrior Project</strong><p>1120 G St NW #700, Washington, DC 20005"
     },
       { 
          "title": "American Cancer Society",
           "icon": "point",
          "cat":"community",
          "focus":"health","group":"8",

          
"id" : "3b1eaa169b64eb07e412aa566213494a7b6272f8",
         "place_id" : "ChIJ92Ilnbu3t4kRsAISWFBLuZI",
         "reference" : "<strong>American Cancer Society</strong><p>555 11th St NW #300, Washington, DC 20004"
     },



       { 
         
          "title": "Universal Service Administrative Co",
           "icon": "point",
          "cat":"community",
          "focus":"innovation","group":"9",

          
"id" : "3b1eaa169b64eb07e412aa566213494a7b6272f8",
         "place_id" : "ChIJ92Ilnbu3t4kRsAISWFBLuZI",
         "reference" : "<strong>Universal Service Administrative Co</strong><p>700 12th St NW #900, Washington, DC 20005<p>universal service for all, good mission, some sketchy people on the board"
     },



       { 
         
          "title": "Pogo",
           "icon": "point",
          "cat":"community",
          "focus":"opengov","group":"7",

          
"id" : "3b1eaa169b64eb07e412aa566213494a7b6272f8",
         "place_id" : "ChIJ92Ilnbu3t4kRsAISWFBLuZI",
         "reference" : "<strong>Pogo (Projet on Government Oversight)</strong><p>1100 G St NW #500, Washington, DC 20005"
     },




       { 
         
          "title": "Jeffrey S. Tenenbaum",
           "icon": "point",
          "cat":"community_sm",
          "focus":"bestpractice","group":"11",

          
"id" : "3b1eaa169b64eb07e412aa566213494a7b6272f8",
         "place_id" : "ChIJ92Ilnbu3t4kRsAISWFBLuZI",
         "reference" : "<strong>Jeffrey S. Tenenbaum (Attorney for Nonprofits)</strong><p>1100 G St NW #500, Washington, DC 20005<p>On the board of and counsel to a lot of Nonprofits and Nonprofit networks"
     },



       { 
          "title": "Family Online Safety Institute",
           "icon": "point",
          "cat":"community",
          "focus":"health","group":"8",

          
"id" : "3b1eaa169b64eb07e412aa566213494a7b6272f8",
         "place_id" : "ChIJ92Ilnbu3t4kRsAISWFBLuZI",
         "reference" : "<strong>Family Online Safety Institute </strong><p>400 7th St NW, Washington, DC 20004<p>Family digital safety. Trade association and made up of lobbyists and staffers of the largest entertainmnet and social networking channels. <a href='http://www.fosigrid.org/united-states' target='_blank'>An interesting toolkit they created</a>"
     },




       { 
          "title": "Mission: Launch, Inc.",
           "icon": "point",
          "cat":"community",
          "focus":"justice","group":"1",

          
"id" : "3b1eaa169b64eb07e412aa566213494a7b6272f8",
         "place_id" : "ChIJ92Ilnbu3t4kRsAISWFBLuZI",
         "reference" : "<strong>Mission: Launch, Inc.</strong><p>419 7th St NW, Washington, DC 20004<p> Mission: Launch is a not-for-profit social enterprise committed to improving reentry outcomes by supporting and structuring innovation among government and nongovernment agencies. Their role in the reentry ecosystem is foundational to systems level change. Through our two (2) programs - The Rebuilding Reentry Coalition and Mission: LaunchPad - we strive to achieve our mission of accelerated self-sufficiency and improved socio-economics outcomes for American's with an arrest and/or conviction record. "
     },





       { 
         
          "title": "IREX",
           "icon": "point",
          "cat":"community",
          "focus":"civiclife","group":"9",

          
"id" : "3b1eaa169b64eb07e412aa566213494a7b6272f8",
         "place_id" : "ChIJ92Ilnbu3t4kRsAISWFBLuZI",
         "reference" : "<strong>IREX</strong><p>1275 K St NW #600, Washington, DC 20005<p> Our mission is to build a more just, prosperous, and inclusive world by empowering youth, cultivating leaders, strengthening institutions, and extending access to quality education and information. "
     },




       { 
         
          "title": "American Immigration Council",
           "icon": "point",
          "cat":"community",
          "focus":"immigration","group":"14",

          
"id" : "3b1eaa169b64eb07e412aa566213494a7b6272f8",
         "place_id" : "ChIJ92Ilnbu3t4kRsAISWFBLuZI",
         "reference" : "<strong>American Immigration Council</strong><p>1331 G St NW #200, Washington, DC 20005<p> The American Immigration Council, a 501(c)(3) nonprofit, is a powerful voice in promoting laws, policies, and attitudes that honor our proud history as a nation of immigrants. Through research and policy analysis, litigation and communications, and international exchange, the Council seeks to shape a twenty-first century vision of the American immigrant experience."
     },





       { 
         
          "title": "Families USA",
           "icon": "point",
          "cat":"community",
          "focus":"health","group":"8",

          
"id" : "3b1eaa169b64eb07e412aa566213494a7b6272f8",
         "place_id" : "ChIJ92Ilnbu3t4kRsAISWFBLuZI",
         "reference" : "<strong>Families USA</strong><p>1201 New York Ave NW # 1100, Washington, DC 20005<p> Our vision is a nation where the best health and health care is equally accessible to all."
     },








       { 
         
          "title": "Partnership for Public Service",
           "icon": "point",
          "cat":"community",
          "focus":"civiclife","group":"9",

          
"id" : "3b1eaa169b64eb07e412aa566213494a7b6272f8",
         "place_id" : "ChIJ92Ilnbu3t4kRsAISWFBLuZI",
         "reference" : "<strong>Partnership for Public Service</strong><p>1100 New York Ave NW #200, Washington, DC 20005<p> So in 2001, Heyman founded the Partnership for Public Service to revitalize the federal civil service. Since that time the Partnership has worked to restore pride in government service and to attract the country’s most talented, intelligent and committed workers to serve the American people.<p>Some super crazy heavyweight coorporate and political players, but the mission is interesting and there are some great people on the board as well."
     },







       { 
         
          "title": "Campaign for the Fair Sentencing of Youth",
           "icon": "point",
          "cat":"community",
          "focus":"justice","group":"1",

          
"id" : "3b1eaa169b64eb07e412aa566213494a7b6272f8",
         "place_id" : "ChIJ92Ilnbu3t4kRsAISWFBLuZI",
         "reference" : "<strong>Campaign for the Fair Sentencing of Youth</strong><p>1319 F St NW Suite 303, Washington, DC 20004"
     },












       { 
         
          "title": "The ONE Campaign",
           "icon": "point",
          "cat":"community",
          "focus":"health","group":"8",

          
"id" : "3b1eaa169b64eb07e412aa566213494a7b6272f8",
         "place_id" : "ChIJ92Ilnbu3t4kRsAISWFBLuZI",
         "reference" : "<strong>The ONE Campaign</strong><p>1299 Pennsylvania Ave NW #400, Washington, DC 20004"
     },








       { 
         
          "title": "ACEEE",
           "icon": "point",
          "cat":"community",
          "focus":"economic","group":"3",

          
"id" : "3b1eaa169b64eb07e412aa566213494a7b6272f8",
         "place_id" : "ChIJ92Ilnbu3t4kRsAISWFBLuZI",
         "reference" : "<strong>ACEEE (American Council for an Energy-Efficient Economy)</strong><p>National Press Building, 529 14th St NW, Washington, DC 20045<p>The American Council for an Energy-Efficient Economy (ACEEE), a nonprofit, 501(c)(3) organization, acts as a catalyst to advance energy efficiency policies, programs, technologies, investments, and behaviors. We believe that the United States can harness the full potential of energy efficiency to achieve greater economic prosperity, energy security, and environmental protection for all its people."
     },










       { 
          "title": "Truman National Security Project",
           "icon": "point",
          "cat":"community",
          "focus":"peace","group":"16",

          
"id" : "3b1eaa169b64eb07e412aa566213494a7b6272f8",
         "place_id" : "ChIJ92Ilnbu3t4kRsAISWFBLuZI",
         "reference" : "<strong>Truman National Security Project</strong><p>1250 I St NW #500, Washington, DC 20005<p>Heavyweight D board. Effective American leadership in the 21st century requires us to employ every tool of global engagement to seize opportunities for progress and resolve complex challenges. Truman refers to this as the 4-D approach – where America leverages its Defense, Diplomatic, Development and Democratic engagement tools to lead towards a safer, more prosperous world."
     },











       { 
         
          "title": "NAFSA",
           "icon": "point",
          "cat":"community",
          "focus":"humanrights","group":"17",

          
"id" : "3b1eaa169b64eb07e412aa566213494a7b6272f8",
         "place_id" : "ChIJ92Ilnbu3t4kRsAISWFBLuZI",
         "reference" : "<strong>NAFSA</strong><p>1307 New York Ave NW # 8, Washington, DC 20005<p>"
     },








       { 
          "title": "Electric Power Research Institute",
           "icon": "point",
          "cat":"questionable",
          "focus":"energy","group":"13",

          
"id" : "3b1eaa169b64eb07e412aa566213494a7b6272f8",
         "place_id" : "ChIJ92Ilnbu3t4kRsAISWFBLuZI",
         "reference" : "<strong>Electric Power Research Institute</strong><p>1325 G St NW #1080, Washington, DC 20036<p>Mission for reducing carbon and promoting innovative power solutions, so the impact of their research and influence can be good at times. But they have a pretty harsh board too, so it is hard to tell if they are really all in on alternative energy."
     },











       { 
         
          "title": "Posse Foundation D.C.",
           "icon": "point",
          "cat":"community",
          "focus":"education","group":"5",

          
"id" : "3b1eaa169b64eb07e412aa566213494a7b6272f8",
         "place_id" : "ChIJ92Ilnbu3t4kRsAISWFBLuZI",
         "reference" : "<strong>Posse Foundation D.C.</strong><p>1319 F St NW #604, Washington, DC 20004<p>"
     },






       { 
         
          "title": "Housing Works",
           "icon": "point",
          "cat":"community",
          "focus":"economic","group":"3",

          
"id" : "3b1eaa169b64eb07e412aa566213494a7b6272f8",
         "place_id" : "ChIJ92Ilnbu3t4kRsAISWFBLuZI",
         "reference" : "<strong>Housing Works</strong><p>727 15th St NW # 200, Washington, DC 20005<p>"
     },






       { 
         
          "title": "Coalition For Non Profit Housing and Economic Development",
           "icon": "point",
          "cat":"community",
          "focus":"economic","group":"3",

          
"id" : "3b1eaa169b64eb07e412aa566213494a7b6272f8",
         "place_id" : "ChIJ92Ilnbu3t4kRsAISWFBLuZI",
         "reference" : "<strong>Coalition For Non Profit Housing and Economic Development</strong><p>727 15th St NW #600, Washington, DC 20005<p>"
     },

 



       { 
         
          "title": "The Literacy Lab",
           "icon": "point",
          "cat":"community",
          "focus":"education","group":"5",

          
"id" : "3b1eaa169b64eb07e412aa566213494a7b6272f8",
         "place_id" : "ChIJ92Ilnbu3t4kRsAISWFBLuZI",
         "reference" : "<strong>The Literacy Lab</strong><p>1003 K St NW Suite 500, Washington, DC <p>We believe that all children deserve to learn how to read and that literacy is a human right. We reflect the urgency of this issue in our mission and core values."
     },






       { 
         
          "title": "Greenpeace",
           "icon": "point",
          "cat":"community",
          "focus":"environment","group":"4",

          
"id" : "3b1eaa169b64eb07e412aa566213494a7b6272f8",
         "place_id" : "ChIJ92Ilnbu3t4kRsAISWFBLuZI",
         "reference" : "<strong>Greenpeace</strong><p>702 H St NW #300, Washington, DC 20001<p>"
     },








       { 
         
          "title": "Wildlife Conservation Society",
           "icon": "point",
          "cat":"community",
          "focus":"environment","group":"4",

          
"id" : "3b1eaa169b64eb07e412aa566213494a7b6272f8",
         "place_id" : "ChIJ92Ilnbu3t4kRsAISWFBLuZI",
         "reference" : "<strong>Wildlife Conservation Society</strong><p>750 9th St NW #525, Washington, DC 20001<p>Main office in NYC. WCS uses science to discover and understand the natural world. This knowledge helps us engage and inspire decision-makers, communities, and millions of supporters to take action with us to protect the wildlife and wild places we all care about."
     },










       { 
         
          "title": "Truth Initiative",
           "icon": "point",
          "cat":"community",
          "focus":"opengov","group":"7",

          
"id" : "3b1eaa169b64eb07e412aa566213494a7b6272f8",
         "place_id" : "ChIJ92Ilnbu3t4kRsAISWFBLuZI",
         "reference" : "<strong>Truth Initiative</strong><p>900 G St NW, Washington, DC 20001<p>The anti-tobacco campaign everyone has seen."
     },






       { 
         
          "title": "Catholic Charities",
           "icon": "point",
          "cat":"community_sm",
          "focus":"humanrights","group":"17",

          
"id" : "3b1eaa169b64eb07e412aa566213494a7b6272f8",
         "place_id" : "ChIJ92Ilnbu3t4kRsAISWFBLuZI",
         "reference" : "<strong>Catholic Charities</strong><p>924 G St NW, Washington, DC 20004<p>Catholic Charities of the Archdiocese of Washington."
     },







       { 
          "title": "Coin Center",
           "icon": "point",
          "cat":"community",
          "focus":"economic","group":"3",

          
"id" : "3b1eaa169b64eb07e412aa566213494a7b6272f8",
         "place_id" : "ChIJ92Ilnbu3t4kRsAISWFBLuZI",
         "reference" : "<strong>Coin Center</strong><p>718 7th St NW, Washington, DC 20001<p>Based in Washington, D.C., Coin Center is the leading non-profit research and advocacy center focused on the public policy issues facing cryptocurrency and decentralized computing technologies like Bitcoin and Ethereum."
     },







       { 
         
          "title": "Stewards of Affordable Housing for the Future",
           "icon": "point",
          "cat":"community",
          "focus":"economic","group":"3",

          
"id" : "3b1eaa169b64eb07e412aa566213494a7b6272f8",
         "place_id" : "ChIJ92Ilnbu3t4kRsAISWFBLuZI",
         "reference" : "<strong>Stewards of Affordable Housing for the Future</strong><p>750 9th St NW #650, Washington, DC 20001<p>SAHF’s mission is to lead policy innovation and advance excellence in the delivery of affordable rental homes that expand opportunity and promote dignity for residents."
     },











       { 
          "title": "SoundExchange",
           "icon": "point",
          "cat":"community",
          "focus":"arts","group":"2",

          
"id" : "3b1eaa169b64eb07e412aa566213494a7b6272f8",
         "place_id" : "ChIJ92Ilnbu3t4kRsAISWFBLuZI",
         "reference" : "<strong>SoundExchange</strong><p>733 10th St NW, Washington, DC 20001<p>SoundExchange helps the music and creative community thrive in the digital age. SoundExchange is the independent nonprofit collective management organization that collects and distributes digital performance royalties to featured artists and copyright holders."
     },










       { 
          "title": "FRESHFARM Markets",
           "icon": "point",
          "cat":"community_sm",
          "focus":"civiclife","group":"9",

          
"id" : "3b1eaa169b64eb07e412aa566213494a7b6272f8",
         "place_id" : "ChIJ92Ilnbu3t4kRsAISWFBLuZI",
         "reference" : "<strong>FRESHFARM Markets</strong><p>945 G St NW, Washington, DC 20001<p>SAHF is a nonprofit collaborative of thirteen exemplary multi-state nonprofit affordable housing providers who own more than 130,000 affordable rental homes."
     },











       { 
          "title": "Enroll America",
           "icon": "point",
          "cat":"community_sm",
          "focus":"health","group":"8",

          
"id" : "3b1eaa169b64eb07e412aa566213494a7b6272f8",
         "place_id" : "ChIJ92Ilnbu3t4kRsAISWFBLuZI",
         "reference" : "<strong>Enroll America</strong><p>1225 New York Ave NW #750, Washington, DC 20005<p>Has no website, so not sure if it is on the up and up."
     },





       { 
          "title": "NORML",
           "icon": "point",
          "cat":"community",
          "focus":"justice","group":"1",

          
"id" : "3b1eaa169b64eb07e412aa566213494a7b6272f8",
         "place_id" : "ChIJ92Ilnbu3t4kRsAISWFBLuZI",
         "reference" : "<strong>NORML</strong><p>Washington Gas Building, 1100 H St NW #830, Washington, DC 20005<p>NORML's mission is to move public opinion sufficiently to legalize the responsible use of marijuana by adults, and to serve as an advocate for consumers to assure they have access to high quality marijuana that is safe, convenient and affordable."
     },









       { 
         
          "title": "DC Vote",
           "icon": "point",
          "cat":"community_sm",
          "focus":"civiclife","group":"9",

          
"id" : "3b1eaa169b64eb07e412aa566213494a7b6272f8",
         "place_id" : "ChIJ92Ilnbu3t4kRsAISWFBLuZI",
         "reference" : "<strong>DC Vote</strong><p>1100 H St NW, Washington, DC 20005<p>Founded in 1998, DC Vote is a national citizen engagement and advocacy organization dedicated to strengthening democracy and securing equality for all in the District of Columbia."
     },






       { 
          "title": "The Education Trust",
           "icon": "point",
          "cat":"community",
          "focus":"education","group":"5",

          
"id" : "3b1eaa169b64eb07e412aa566213494a7b6272f8",
         "place_id" : "ChIJ92Ilnbu3t4kRsAISWFBLuZI",
         "reference" : "<strong>The Education Trust</strong><p>1250 H St NW #700, Washington, DC 20005<p>Fierce advocates for the high academic achievement of all students — particularly those of color or living in poverty."
     },







       { 
         
          "title": "Cultural Vistas",
           "icon": "point",
          "cat":"community",
          "focus":"civiclife","group":"9",

          
"id" : "3b1eaa169b64eb07e412aa566213494a7b6272f8",
         "place_id" : "ChIJ92Ilnbu3t4kRsAISWFBLuZI",
         "reference" : "<strong>Cultural Vistas</strong><p>1250 H St NW #300, Washington, DC 20005<p>Founded in 1963, Cultural Vistas is a nonprofit exchange organization promoting global understanding and collaboration among individuals and institutions. We develop international professional experiences that create more informed, skilled, and engaged citizens. Our programs empower people to drive positive change in themselves, their organizations, and society.<h2><a href='http://culturalvistas.org/annualreport/' target='blank'>invested in a scrolly annual report: </a></h2>"
     },







       { 
         
          "title": "The Root Cause Coalition",
           "icon": "point",
          "cat":"community",
          "focus":"health","group":"8",

          
"id" : "3b1eaa169b64eb07e412aa566213494a7b6272f8",
         "place_id" : "ChIJ92Ilnbu3t4kRsAISWFBLuZI",
         "reference" : "<strong>The Root Cause Coalition</strong><p>1120 G St NW #1000, Washington, DC 20005<p>We are a national, member-driven, nonprofit organization dedicated to addressing the root causes of health disparities by focusing on hunger and other social determinants to reverse the nationwide epidemic of preventable chronic health conditions."
     },






       { 
         
          "title": "Latino Victory Project",
           "icon": "point",
          "cat":"community",
          "focus":"civiclife","group":"9",

          
"id" : "3b1eaa169b64eb07e412aa566213494a7b6272f8",
         "place_id" : "ChIJ92Ilnbu3t4kRsAISWFBLuZI",
         "reference" : "<strong>Latino Victory Project</strong><p>700 14th St NW, Washington, DC 20005<p>Latino Victory Project is a movement that builds power in the Latino community so the voices and values of Latinos are reflected at every level of government and in the policies that drive our country forward."
     },






       { 
         
          "title": "Sunlight Foundation",
           "icon": "point",
          "cat":"community",
          "focus":"opengov","group":"7",

          
"id" : "3b1eaa169b64eb07e412aa566213494a7b6272f8",
         "place_id" : "ChIJ92Ilnbu3t4kRsAISWFBLuZI",
         "reference" : "<strong>Sunlight Foundation</strong><p>1440 G St NW, Washington, DC 20005<p>Making government & politics more accountable & transparent."
     },








       { 
         
          "title": "Tax Foundation",
           "icon": "point",
          "cat":"questionable",
          "focus":"economic","group":"3",

          
"id" : "3b1eaa169b64eb07e412aa566213494a7b6272f8",
         "place_id" : "ChIJ92Ilnbu3t4kRsAISWFBLuZI",
         "reference" : "<strong>Tax Foundation</strong><p>1325 G St NW #950, Washington, DC 20005<p>The Tax Foundation is the nation’s leading independent tax policy nonprofit. Since 1937, our principled research, insightful analysis, and engaged experts have improved lives through smarter tax policy."
     },








       { 
          "title": "The Data Quality Campaign",
           "icon": "point",
          "cat":"community",
          "focus":"education","group":"5",

          
"id" : "3b1eaa169b64eb07e412aa566213494a7b6272f8",
         "place_id" : "ChIJ92Ilnbu3t4kRsAISWFBLuZI",
         "reference" : "<strong>The Data Quality Campaign</strong><p>1341 G St NW, Washington, DC 20005<p>DQC strives to ensure that everyone with a stake in education—especially families and educators—can access and use quality student data to raise achievement for all students. We are the nation’s foremost organization advocating for effective data policy and use."
     },









       { 
         
          "title": "Heart Rhythm Society",
           "icon": "point",
          "cat":"community",
          "focus":"health","group":"8",

          
"id" : "3b1eaa169b64eb07e412aa566213494a7b6272f8",
         "place_id" : "ChIJ92Ilnbu3t4kRsAISWFBLuZI",
         "reference" : "<strong>Heart Rhythm Society</strong><p>1325 G St NW #400, Washington, DC 20005<p>The Heart Rhythm Society (HRS) is a leading resource on cardiac pacing and electrophysiology. This <a href='http://www.hrsonline.org/About-HRS#sthash.dx7u8efw.dpuf' target='_blank'>specialty organization represents medical, allied health, and science professionals from more than 70 countries who specialize in cardiac rhythm disorders</a>."
     },









       { 
          "title": "American Association for Justice",
           "icon": "point",
          "cat":"community",
          "focus":"justice","group":"1",

          
"id" : "3b1eaa169b64eb07e412aa566213494a7b6272f8",
         "place_id" : "ChIJ92Ilnbu3t4kRsAISWFBLuZI",
         "reference" : "<strong>American Association for Justice</strong><p>777 6th St NW #200, Washington, DC 20001<p>Trade Association for trial lawyers."
     },






 







       { 
         
          "title": "Cato Institute",
           "icon": "point",
          "cat":"questionable",

          
"id" : "3b1eaa169b64eb07e412aa566213494a7b6272f8",
         "place_id" : "ChIJ92Ilnbu3t4kRsAISWFBLuZI",
         "reference" : "<strong>Cato Institute</strong><p>1000 Massachusetts Ave NW, Washington, DC 20001<p>The Jeffersonian philosophy that animates Cato's work has increasingly come to be called <em>libertarianism</em> or <em>market liberalism</em>. It combines an appreciation for entrepreneurship, the market process, and lower taxes with strict respect for civil liberties and skepticism about the benefits of both the welfare state and foreign military adventurism."
     },





       { 
         
          "title": "Milken Institute",
           "icon": "point",
          "cat":"questionable",
          "focus":"economic","group":"3",

          
"id" : "3b1eaa169b64eb07e412aa566213494a7b6272f8",
         "place_id" : "ChIJ92Ilnbu3t4kRsAISWFBLuZI",
         "reference" : "<strong>Milken Institute</strong><p>1101 New York Ave NW, Washington, DC 20005<p>Sketchy because Mike Milken is the founder, and he's pretty sketchy. Michael Robert Milken (born July 4, 1946) is an American former financier and philanthropist. He is noted for his role in the development of the market for high-yield bonds (junk bonds), for his conviction following a guilty plea on felony charges for violating U.S. securities laws, and for his charitable giving."
     },




       { 
         
          "title": "Atlas Network",
           "icon": "point",
          "cat":"questionable",
          "focus":"economic","group":"3",

          
"id" : "3b1eaa169b64eb07e412aa566213494a7b6272f8",
         "place_id" : "ChIJ92Ilnbu3t4kRsAISWFBLuZI",
         "reference" : "<strong>Atlas Network</strong><p>1201 L St NW, Washington, DC 20005"
     },





       { 
          "title": "Nuclear Energy Institute",
           "icon": "point",
          "cat":"questionable",
          "focus":"energy","group":"13",

          
"id" : "3b1eaa169b64eb07e412aa566213494a7b6272f8",
         "place_id" : "ChIJ92Ilnbu3t4kRsAISWFBLuZI",
         "reference" : "<strong>Nuclear Energy Institute</strong><p>1201 F St NW, Washington, DC 20004"
     },





      { 
         
          "title": "Threespot Media",
           "icon": "point",
          "cat":"home",
          "focus":"home",
           "focus":"services","group":"6",


         "id" : "1e775ac7188479c04d861987f5e11ca5793aa655",
         "place_id" : "ChIJ_QqXvr63t4kRx6tGXpv2Oms",
         "reference" : "<h1>Threespot Media</h1>806 7th St NW #201, Washington, DC 20001"
     },


 
       { 
         
          "title": "Center For American Progress",
           "icon": "point",
          "cat":"community",
          "focus":"civiclife","group":"9",

          
"id" : "3b1eaa169b64eb07e412aa566213494a7b6272f8",
         "place_id" : "ChIJ92Ilnbu3t4kRsAISWFBLuZI",
         "reference" : "<strong>Center For American Progress</strong><p>1333 H St NW Washington, DC 20005"
     }

,




       { 
         
          "title": "FrameWorks Institute",
           "icon": "point",
          "cat":"community",
          "focus":"bestpractice","group":"11",

          
"id" : "3b1eaa169b64eb07e412aa566213494a7b6272f8",
         "place_id" : "ChIJ92Ilnbu3t4kRsAISWFBLuZI",
         "reference" : "<strong>FrameWorks Institute</strong><p>1333 H St NW Washington, DC 20005"
     }



,


 


       { 
         
          "title": "Legal Aid Society",
           "icon": "point",
          "cat":"community_sm",
          "focus":"justice","group":"1",

          
"id" : "3b1eaa169b64eb07e412aa566213494a7b6272f8",
         "place_id" : "ChIJ92Ilnbu3t4kRsAISWFBLuZI",
         "reference" : "<strong>Legal Aid Society</strong><p>1331 H St NW, Washington, DC 20005"
     }






,



       { 
          "title": "National Committee for Responsive Philanthropy",
           "icon": "point",
          "cat":"community",
          "focus":"bestpractice","group":"11",

          
"id" : "3b1eaa169b64eb07e412aa566213494a7b6272f8",
         "place_id" : "ChIJ92Ilnbu3t4kRsAISWFBLuZI",
         "reference" : "<strong>National Committee for Responsive Philanthropy</strong><p>1900 L St NW Suite #825, Washington, DC 20036"
     }





,



       { 

           
          "title": "National Association-Gifted Children",
           "icon": "point",
          "cat":"community",
          "focus":"education","group":"5",

          
"id" : "3b1eaa169b64eb07e412aa566213494a7b6272f8",
         "place_id" : "ChIJ92Ilnbu3t4kRsAISWFBLuZI",
         "reference" : "<strong>National Association-Gifted Children</strong><p>1331 H St NW #1001, Washington, DC 20005"
     }











,



       { 
           
          "title": "Enough Project",
           "icon": "point",
          "cat":"community",
          "focus":"humanrights","group":"17",

          
"id" : "3b1eaa169b64eb07e412aa566213494a7b6272f8",
         "place_id" : "ChIJ92Ilnbu3t4kRsAISWFBLuZI",
         "reference" : "<strong>Enough Project</strong><p>1420 K St NW, Washington, DC 20005"
     }





,



       { 
          "title": "Hoover Institution in Washington",
           "icon": "point",
          "cat":"questionable",
          "focus":"peace","group":"16",

          
"id" : "3b1eaa169b64eb07e412aa566213494a7b6272f8",
         "place_id" : "ChIJ92Ilnbu3t4kRsAISWFBLuZI",
         "reference" : "<strong>Hoover Institution in Washington</strong><p>1399 New York Ave NW #500, Washington, DC 20005"
     }





,



       { 
            
          "title": "National Community Reinvestment Coalition (NCRC)",
           "icon": "point",
          "cat":"community",
          "focus":"economic","group":"3",

          
"id" : "3b1eaa169b64eb07e412aa566213494a7b6272f8",
         "place_id" : "ChIJ92Ilnbu3t4kRsAISWFBLuZI",
         "reference" : "<strong>National Community Reinvestment Coalition (NCRC)</strong><p>727 15th St NW, Washington, DC 20005"
     }





,



       { 
            
          "title": "National Gay & Lesbian Chamber of Commerce (NGLCC) Global",
           "icon": "point",
          "cat":"community",
          "focus":"humanrights","group":"17",

          
"id" : "3b1eaa169b64eb07e412aa566213494a7b6272f8",
         "place_id" : "ChIJ92Ilnbu3t4kRsAISWFBLuZI",
         "reference" : "<strong>National Gay & Lesbian Chamber of Commerce (NGLCC) Global</strong><p>729 15th St NW, Washington, DC 20005"
     }








,



       { 
            
          "title": "New America",
           "icon": "point",
          "cat":"community",
          "focus":"opengov","group":"7",

          
"id" : "3b1eaa169b64eb07e412aa566213494a7b6272f8",
         "place_id" : "ChIJ92Ilnbu3t4kRsAISWFBLuZI",
         "reference" : "<strong>New America</strong><p>740 15th St NW #900, Washington, DC 20005"
     }

 






,



       { 
            
          "title": "Human Rights First",
           "icon": "point",
          "cat":"community",
          "focus":"humanrights","group":"17",

          
"id" : "3b1eaa169b64eb07e412aa566213494a7b6272f8",
         "place_id" : "ChIJ92Ilnbu3t4kRsAISWFBLuZI",
         "reference" : "<strong>Human Rights First</strong><p>805 15th St NW Suite 900, Washington, DC 20005"
     }

 



,



       { 
            
          "title": "Coalition To Stop Gun Violence",
           "icon": "point",
          "cat":"community",
          "focus":"health","group":"8",

          
"id" : "3b1eaa169b64eb07e412aa566213494a7b6272f8",
         "place_id" : "ChIJ92Ilnbu3t4kRsAISWFBLuZI",
         "reference" : "<strong>Coalition To Stop Gun Violence</strong><p>805 15th St NW #700, Washington, DC 20005"
     }

 






,



       { 
            
          "title": "Common Cause",
           "icon": "point",
          "cat":"community",
          "focus":"opengov","group":"7",

          
"id" : "3b1eaa169b64eb07e412aa566213494a7b6272f8",
         "place_id" : "ChIJ92Ilnbu3t4kRsAISWFBLuZI",
         "reference" : "<strong>Common Cause</strong><p>805 15th St NW, Washington, DC 20005"
     }

 


,



       { 
            
          "title": "Bipartisan Policy Center",
           "icon": "point",
          "cat":"community",
          "focus":"opengov","group":"7",


          
"id" : "3b1eaa169b64eb07e412aa566213494a7b6272f8",
         "place_id" : "ChIJ92Ilnbu3t4kRsAISWFBLuZI",
         "reference" : "<strong>Bipartisan Policy Center</strong><p>1225 I St NW #1000, Washington, DC 20005"
     }

 




,



       { 
            
          "title": "Habitat For Humanity International",
           "icon": "point",
          "cat":"community",
          "focus":"economic","group":"3",

          
"id" : "3b1eaa169b64eb07e412aa566213494a7b6272f8",
         "place_id" : "ChIJ92Ilnbu3t4kRsAISWFBLuZI",
         "reference" : "<strong>Habitat For Humanity International</strong><p>1424 K St NW, Washington, DC 20005"
     }

 



,



       { 
             
          "title": "Drug Policy Alliance",
           "icon": "point",
          "cat":"community",
          "focus":"justice","group":"1",

          
"id" : "3b1eaa169b64eb07e412aa566213494a7b6272f8",
         "place_id" : "ChIJ92Ilnbu3t4kRsAISWFBLuZI",
         "reference" : "<strong>Drug Policy Alliance</strong><p>1620 I St NW #925, Washington, DC 20006"
     }

 


,



       { 

             
          "title": "Grameen Foundation",
           "icon": "point",
          "cat":"community",
          "focus":"health","group":"8",

          
"id" : "3b1eaa169b64eb07e412aa566213494a7b6272f8",
         "place_id" : "ChIJ92Ilnbu3t4kRsAISWFBLuZI",
         "reference" : "<strong>Grameen Foundation</strong><p>1400 K St NW #550, Washington, DC 20005"
     }

 



,



       { 



             
          "title": "Center For Democracy & Technology",
           "icon": "point",
          "cat":"community",
          "focus":"civilliberties","group":"12",

          
"id" : "3b1eaa169b64eb07e412aa566213494a7b6272f8",
         "place_id" : "ChIJ92Ilnbu3t4kRsAISWFBLuZI",
         "reference" : "<strong>Center For Democracy & Technology</strong><p>Tower Building, 1401 K St NW #200, Washington, DC 20005"
     }

 



,



       { 
             
          "title": "Democratic Legislative Campaign",
           "icon": "point",
          "cat":"community",
          "focus":"civiclife","group":"9",

          
"id" : "3b1eaa169b64eb07e412aa566213494a7b6272f8",
         "place_id" : "ChIJ92Ilnbu3t4kRsAISWFBLuZI",
         "reference" : "<strong>Democratic Legislative Campaign</strong><p>1625 Eye Street, #1250, Washington, DC 20005"
     }

 







,



       { 
             
          "title": "Campaign Legal Center",
           "icon": "point",
          "cat":"community",
          "focus":"justice","group":"1",

          
"id" : "3b1eaa169b64eb07e412aa566213494a7b6272f8",
         "place_id" : "ChIJ92Ilnbu3t4kRsAISWFBLuZI",
         "reference" : "<strong>Campaign Legal Center</strong><p>1411 K St NW, Washington, DC 20005"
     }

 




,



       { 
 
             
          "title": "Americans For the Arts",
           "icon": "point",
          "cat":"community",
          "focus":"arts","group":"2",

          
"id" : "3b1eaa169b64eb07e412aa566213494a7b6272f8",
         "place_id" : "ChIJ92Ilnbu3t4kRsAISWFBLuZI",
         "reference" : "<strong>Americans For the Arts</strong><p>1000 Vermont Ave NW # 6, Washington, DC 20005"
     }

 




,



       { 
 
             
          "title": "National Low Income Housing",
           "icon": "point",
          "cat":"community",
          "focus":"economic","group":"3",

          
"id" : "3b1eaa169b64eb07e412aa566213494a7b6272f8",
         "place_id" : "ChIJ92Ilnbu3t4kRsAISWFBLuZI",
         "reference" : "<strong>National Low Income Housing</strong><p>1000 Vermont Ave NW #500, Washington, DC 20005"
     }

 


,



       { 
             
          "title": "US Water Alliance",
           "icon": "point",
          "cat":"community",
          "focus":"environment","group":"4",

          
"id" : "3b1eaa169b64eb07e412aa566213494a7b6272f8",
         "place_id" : "ChIJ92Ilnbu3t4kRsAISWFBLuZI",
         "reference" : "<strong>US Water Alliance</strong><p>1010 Vermont Ave NW #1100, Washington, DC 20005"
     }



,

       { 
 
             
          "title": "World Learning Inc",
           "icon": "point",
          "cat":"community",
          "focus":"education","group":"5",

          
"id" : "3b1eaa169b64eb07e412aa566213494a7b6272f8",
         "place_id" : "ChIJ92Ilnbu3t4kRsAISWFBLuZI",
         "reference" : "<strong>World Learning Inc</strong><p>1015 15th St NW #750, Washington, DC 20005"
     }

 







,

       { 
 
             
          "title": "NGP VAN",
           "icon": "point",
          "cat":"digital",
          "focus":"services","group":"6",

          
"id" : "3b1eaa169b64eb07e412aa566213494a7b6272f8",
         "place_id" : "ChIJ92Ilnbu3t4kRsAISWFBLuZI",
         "reference" : "<strong>NGP VAN</strong><p>1445 New York Ave NW #200, Washington, DC 20005"
     }

 






,

       { 

             
          "title": "OpenGov Hub",
           "icon": "point",
          "cat":"digital",
          "focus":"opengov","group":"7",

          
"id" : "3b1eaa169b64eb07e412aa566213494a7b6272f8",
         "place_id" : "ChIJ92Ilnbu3t4kRsAISWFBLuZI",
         "reference" : "<strong>OpenGov Hub</strong><p>1110 Vermont Ave NW #500, Washington, DC 20005"
     }

 





,

       { 
             
          "title": "Planned Parenthood",
           "icon": "point",
          "cat":"community",
          "focus":"health","group":"8",

          
"id" : "3b1eaa169b64eb07e412aa566213494a7b6272f8",
         "place_id" : "ChIJ92Ilnbu3t4kRsAISWFBLuZI",
         "reference" : "<strong>Planned Parenthood</strong><p>1110 Vermont Ave NW #200, Washington, DC 20005"
     }

 




,

       { 
             
          "title": "Feedback Labs",
           "icon": "point",
          "cat":"community",
          "focus":"civiclife","group":"9",

          
"id" : "3b1eaa169b64eb07e412aa566213494a7b6272f8",
         "place_id" : "ChIJ92Ilnbu3t4kRsAISWFBLuZI",
         "reference" : "<strong>Feedback Labs</strong><p>1110 Vermont Ave NW #500, Washington, DC 20005"
     }

 


,

       { 
             
          "title": "1776 DC",
           "icon": "point",
          "cat":"digital",
          "focus":"innovation","group":"10",

          
"id" : "3b1eaa169b64eb07e412aa566213494a7b6272f8",
         "place_id" : "ChIJ92Ilnbu3t4kRsAISWFBLuZI",
         "reference" : "<strong>1776 DC</strong><p>1133 15th St NW, Washington, DC 20005"
     }

 




,

       { 
 
             
          "title": "Society for Conservation Biology",
           "icon": "point",
          "cat":"community",
          "focus":"environment","group":"4",

          
"id" : "3b1eaa169b64eb07e412aa566213494a7b6272f8",
         "place_id" : "ChIJ92Ilnbu3t4kRsAISWFBLuZI",
         "reference" : "<strong>Society for Conservation Biology</strong><p>1133 15th St NW #300, Washington, DC 20005"
     }

 





,

       { 
 
             
          "title": "Venture Philanthropy Partners",
           "icon": "point",
          "cat":"community",
          "focus":"civiclife","group":"9",

          
"id" : "3b1eaa169b64eb07e412aa566213494a7b6272f8",
         "place_id" : "ChIJ92Ilnbu3t4kRsAISWFBLuZI",
         "reference" : "<strong>Venture Philanthropy Partners</strong><p>1201 15th St NW, Washington, DC 20005"
     }

 

 

 



,

       { 
 
             
          "title": "Better Business Bureau",
           "icon": "point",
          "cat":"community",
          "focus":"bestpractice","group":"11",

          
"id" : "3b1eaa169b64eb07e412aa566213494a7b6272f8",
         "place_id" : "ChIJ92Ilnbu3t4kRsAISWFBLuZI",
         "reference" : "<strong>Better Business Bureau</strong><p>1411 K St NW, Washington, DC 20005"
     }

 

 


,

       { 
 
             
          "title": "GLSEN",
           "icon": "point",
          "cat":"community",
          "focus":"education","group":"5",

          
"id" : "3b1eaa169b64eb07e412aa566213494a7b6272f8",
         "place_id" : "ChIJ92Ilnbu3t4kRsAISWFBLuZI",
         "reference" : "<strong>GLSEN</strong><p>1012 14th St NW #1105, Washington, DC 20005"
     }

 

 

 




,

       { 
 
             
          "title": "Secular Coalition For America",
           "icon": "point",
          "cat":"community",
          "focus":"civilliberties","group":"12",

          
"id" : "3b1eaa169b64eb07e412aa566213494a7b6272f8",
         "place_id" : "ChIJ92Ilnbu3t4kRsAISWFBLuZI",
         "reference" : "<strong>Secular Coalition For America</strong><p>1012 14th St NW, Washington, DC 20005"
     }

 

 

 

,

       { 
 
             
          "title": "Dance/USA",
           "icon": "point",
          "cat":"community",
          "focus":"arts","group":"2",

          
"id" : "3b1eaa169b64eb07e412aa566213494a7b6272f8",
         "place_id" : "ChIJ92Ilnbu3t4kRsAISWFBLuZI",
         "reference" : "<strong>Dance/USA</strong><p>1029 Vermont Ave NW #400, Washington, DC 20005"
     }

 

 

,

       { 
 
             
          "title": "National Quality Forum",
           "icon": "point",
          "cat":"community",
          "focus":"health","group":"8",

          
"id" : "3b1eaa169b64eb07e412aa566213494a7b6272f8",
         "place_id" : "ChIJ92Ilnbu3t4kRsAISWFBLuZI",
         "reference" : "<strong>National Quality Forum</strong><p>1030 15th St NW, Washington, DC 20005"
     }

 

 

 
,

       { 
             
          "title": "Federal City Council",
           "icon": "point",
          "cat":"community",
          "focus":"civiclife","group":"9",


          
"id" : "3b1eaa169b64eb07e412aa566213494a7b6272f8",
         "place_id" : "ChIJ92Ilnbu3t4kRsAISWFBLuZI",
         "reference" : "<strong>Federal City Council</strong><p>1156 15th St NW #600, Washington, DC 20005"
     }

 

 
,

       { 
 
             
          "title": "American Council On Renewable Energy",
           "icon": "point",
          "cat":"questionable",
          "focus":"energy","group":"13",

          
"id" : "3b1eaa169b64eb07e412aa566213494a7b6272f8",
         "place_id" : "ChIJ92Ilnbu3t4kRsAISWFBLuZI",
         "reference" : "<strong>American Council On Renewable Energy</strong><p>1600 K St NW #650, Washington, DC 20006"
     }

 

 

,

       { 
 
             
          "title": "Earthworks",
           "icon": "point",
          "cat":"community",
          "focus":"environment","group":"4",

          
"id" : "3b1eaa169b64eb07e412aa566213494a7b6272f8",
         "place_id" : "ChIJ92Ilnbu3t4kRsAISWFBLuZI",
         "reference" : "<strong>Earthworks</strong><p>1612 K St NW #904, Washington, DC 20006"
     }

 


,

       { 
             
          "title": "Green America",
           "icon": "point",
          "cat":"community",
          "focus":"environment","group":"4",

          
"id" : "3b1eaa169b64eb07e412aa566213494a7b6272f8",
         "place_id" : "ChIJ92Ilnbu3t4kRsAISWFBLuZI",
         "reference" : "<strong>Green America</strong><p>1612 K St NW, Washington, DC 20006"
     }

 

 


,

       { 
             
          "title": "EarthRights International",
           "icon": "point",
          "cat":"community",
          "focus":"environment","group":"4",

          
"id" : "3b1eaa169b64eb07e412aa566213494a7b6272f8",
         "place_id" : "ChIJ92Ilnbu3t4kRsAISWFBLuZI",
         "reference" : "<strong>EarthRights International</strong><p>1612 K St NW #401, Washington, DC 20006"
     }

 

 


,

       { 
 
             
          "title": "Alliance For Biking & Walking",
           "icon": "point",
          "cat":"community_sm",
          "focus":"civiclife","group":"9",


          
"id" : "3b1eaa169b64eb07e412aa566213494a7b6272f8",
         "place_id" : "ChIJ92Ilnbu3t4kRsAISWFBLuZI",
         "reference" : "<strong>Alliance For Biking & Walking</strong><p>1612 K St NW, Washington, DC 20006"
     }

 

,

       { 
 
             
          "title": "LIFT",
           "icon": "point",
          "cat":"community",
          "focus":"economic","group":"3",

          
"id" : "3b1eaa169b64eb07e412aa566213494a7b6272f8",
         "place_id" : "ChIJ92Ilnbu3t4kRsAISWFBLuZI",
         "reference" : "<strong>LIFT</strong><p>1620 I St NW #820, Washington, DC 20006"
     }

 

,

       { 
             
          "title": "AFL-CIO",
           "icon": "point",
          "cat":"community",
          "focus":"economic","group":"3",

          
"id" : "3b1eaa169b64eb07e412aa566213494a7b6272f8",
         "place_id" : "ChIJ92Ilnbu3t4kRsAISWFBLuZI",
         "reference" : "<strong>AFL-CIO</strong><p>815 16th St NW, Washington, DC 20005"
     }

 

 


,

       { 
             
          "title": "U.S. Chamber of Commerce Foundation",
           "icon": "point",
          "cat":"questionable",
          "focus":"civiclife","group":"9",

          
"id" : "3b1eaa169b64eb07e412aa566213494a7b6272f8",
         "place_id" : "ChIJ92Ilnbu3t4kRsAISWFBLuZI",
         "reference" : "<strong>U.S. Chamber of Commerce Foundation</strong><p>1615 H St NW, Washington, DC 20062"
     }

 

 


,

       { 
             
          "title": "Center For Public Integrity",
           "icon": "point",
          "cat":"community",
          "focus":"opengov","group":"7",

          
"id" : "3b1eaa169b64eb07e412aa566213494a7b6272f8",
         "place_id" : "ChIJ92Ilnbu3t4kRsAISWFBLuZI",
         "reference" : "<strong>Center For Public Integrity</strong><p>910 17th St NW #700, Washington, DC 20006"
     }

 

,

       { 
             
          "title": "Foundation Center",
           "icon": "point",
          "cat":"community",
          "focus":"bestpractice","group":"11",

          
"id" : "3b1eaa169b64eb07e412aa566213494a7b6272f8",
         "place_id" : "ChIJ92Ilnbu3t4kRsAISWFBLuZI",
         "reference" : "<strong>Foundation Center</strong><p>1627 K St NW, Washington, DC 20006"
     }

 

 




,

       { 
             
          "title": "Independent Sector",
           "icon": "point",
          "cat":"community",
          "focus":"bestpractice","group":"11",

          
"id" : "3b1eaa169b64eb07e412aa566213494a7b6272f8",
         "place_id" : "ChIJ92Ilnbu3t4kRsAISWFBLuZI",
         "reference" : "<strong>Independent Sector</strong><p>1602 L St NW #900, Washington, DC 20036"
     }

 

 

,

       { 

             
          "title": "Pew Research Center",
           "icon": "point",
          "cat":"community",
          "focus":"civiclife","group":"9",

          
"id" : "3b1eaa169b64eb07e412aa566213494a7b6272f8",
         "place_id" : "ChIJ92Ilnbu3t4kRsAISWFBLuZI",
         "reference" : "<strong>Pew Research Center</strong><p>1615 L St NW #800, Washington, DC 20036"
     }

 

 


 

,

       { 

             
          "title": "Oxfam America",
           "icon": "point",
          "cat":"community",
          "focus":"health","group":"8",

          
"id" : "3b1eaa169b64eb07e412aa566213494a7b6272f8",
         "place_id" : "ChIJ92Ilnbu3t4kRsAISWFBLuZI",
         "reference" : "<strong>Oxfam America</strong><p>1101 17th St NW #1300, Washington, DC 20036"
     }

 

 


 

,

       { 

             
          "title": "International Center for Not-for-Profit Law",
           "icon": "point",
          "cat":"community",
          "focus":"justice","group":"1",

          
"id" : "3b1eaa169b64eb07e412aa566213494a7b6272f8",
         "place_id" : "ChIJ92Ilnbu3t4kRsAISWFBLuZI",
         "reference" : "<strong>International Center for Not-for-Profit Law</strong><p>1126 16th St NW #400, Washington, DC 20036"
     }

 

 

,

       { 
             
          "title": "National Council of La Raza",
           "icon": "point",
          "cat":"community",
          "focus":"immigration","group":"14",

          
"id" : "3b1eaa169b64eb07e412aa566213494a7b6272f8",
         "place_id" : "ChIJ92Ilnbu3t4kRsAISWFBLuZI",
         "reference" : "<strong>National Council of La Raza</strong><p>1126 16th St NW #600, Washington, DC 20036"
     }

 

 





,

       { 
             
          "title": "Leadership Conference On Civil Rights",
           "icon": "point",
          "cat":"community",
          "focus":"justice","group":"1",

          
"id" : "3b1eaa169b64eb07e412aa566213494a7b6272f8",
         "place_id" : "ChIJ92Ilnbu3t4kRsAISWFBLuZI",
         "reference" : "<strong>Leadership Conference On Civil Rights</strong><p>1620 L St NW #1100, Washington, DC 20036"
     }

 

 


,

       { 
             
          "title": "Jump$tart Coalition for Personal Financial Literacy",
           "icon": "point",
          "cat":"community",
          "focus":"finance","group":"15",

          
"id" : "3b1eaa169b64eb07e412aa566213494a7b6272f8",
         "place_id" : "ChIJ92Ilnbu3t4kRsAISWFBLuZI",
         "reference" : "<strong>Jump$tart Coalition for Personal Financial Literacy</strong><p>1001 Connecticut Ave NW #640, Washington, DC 20036"
     }

 


,

       { 
             
          "title": "DKT International",
           "icon": "point",
          "cat":"community",
          "focus":"health","group":"8",

          
"id" : "3b1eaa169b64eb07e412aa566213494a7b6272f8",
         "place_id" : "ChIJ92Ilnbu3t4kRsAISWFBLuZI",
         "reference" : "<strong>DKT International</strong><p>1701 K St NW #900, Washington, DC 20006"
     }

 


,

       { 
             
          "title": "CORE Group",
           "icon": "point",
          "cat":"community",
          "focus":"health","group":"8",

          
"id" : "3b1eaa169b64eb07e412aa566213494a7b6272f8",
         "place_id" : "ChIJ92Ilnbu3t4kRsAISWFBLuZI",
         "reference" : "<strong>CORE Group</strong><p>919 18th St NW #350, Washington, DC 20006"
     }

 


,

       { 
             
          "title": "Defenders of Wildlife",
           "icon": "point",
          "cat":"community",
          "focus":"environment","group":"4",

          
"id" : "3b1eaa169b64eb07e412aa566213494a7b6272f8",
         "place_id" : "ChIJ92Ilnbu3t4kRsAISWFBLuZI",
         "reference" : "<strong>Defenders of Wildlife</strong><p>1130 17th St NW, Washington, DC 20036"
     }

 

 

,

       { 
             
          "title": "Sentencing Project",
           "icon": "point",
          "cat":"community",
          "focus":"justice","group":"1",

          
"id" : "3b1eaa169b64eb07e412aa566213494a7b6272f8",
         "place_id" : "ChIJ92Ilnbu3t4kRsAISWFBLuZI",
         "reference" : "<strong>Sentencing Project</strong><p>1705 Desales St NW, Washington, DC 20004"
     }

 

 




 

,

       { 
             
          "title": "Living Cities",
           "icon": "point",
          "cat":"community",
          "focus":"economic","group":"3",

          
"id" : "3b1eaa169b64eb07e412aa566213494a7b6272f8",
         "place_id" : "ChIJ92Ilnbu3t4kRsAISWFBLuZI",
         "reference" : "<strong>Living Cities</strong><p>1730 M St NW #400, Washington, DC 20036"
     }

 

 


,

       { 
             
          "title": "National Geographic Society",
           "icon": "point",
          "cat":"community",
          "focus":"environment","group":"4",

          
"id" : "3b1eaa169b64eb07e412aa566213494a7b6272f8",
         "place_id" : "ChIJ92Ilnbu3t4kRsAISWFBLuZI",
         "reference" : "<strong>National Geographic Society</strong><p>1145 17th St NW, Washington, DC 20036"
     }

 

 



,

       { 
             
          "title": "Network for Good",
           "icon": "point",
          "cat":"digital",
          "focus":"services","group":"6",

          
"id" : "3b1eaa169b64eb07e412aa566213494a7b6272f8",
         "place_id" : "ChIJ92Ilnbu3t4kRsAISWFBLuZI",
         "reference" : "<strong>Network for Good</strong><p>1140 Connecticut Ave NW #700, Washington, DC 20036"
     }

 

 



,

       { 

             
          "title": "The Aspen Institute",
           "icon": "point",
          "cat":"community",
          "focus":"civiclife","group":"9",

          
"id" : "3b1eaa169b64eb07e412aa566213494a7b6272f8",
         "place_id" : "ChIJ92Ilnbu3t4kRsAISWFBLuZI",
         "reference" : "<strong>The Aspen Institute</strong><p>1 Dupont Cir NW #700, Washington, DC 20036"
     }

 



,

       { 
             
          "title": "Public Citizen",
           "icon": "point",
          "cat":"community",
          "focus":"opengov","group":"7",

          
"id" : "3b1eaa169b64eb07e412aa566213494a7b6272f8",
         "place_id" : "ChIJ92Ilnbu3t4kRsAISWFBLuZI",
         "reference" : "<strong>Public Citizen</strong><p>1600 20th St NW, Washington, DC 20009"
     }

 

 





,

       { 
             
          "title": "Action Without Borders Inc",
           "icon": "point",
          "cat":"community",
          "focus":"bestpractice","group":"11",

          
"id" : "3b1eaa169b64eb07e412aa566213494a7b6272f8",
         "place_id" : "ChIJ92Ilnbu3t4kRsAISWFBLuZI",
         "reference" : "<strong>Action Without Borders Inc</strong><p>1519 Connecticut Ave NW, Washington, DC 20036"
     }

 

 


,

       { 

             
          "title": "PICnet Inc",
           "icon": "point",
          "cat":"digital",
          "focus":"services","group":"6",

          
"id" : "3b1eaa169b64eb07e412aa566213494a7b6272f8",
         "place_id" : "ChIJ92Ilnbu3t4kRsAISWFBLuZI",
         "reference" : "<strong>PICnet Inc</strong><p>1605 Connecticut Ave NW, Washington, DC 20001"
     }

 

 

,

       { 
             
          "title": "Alliance For Justice",
           "icon": "point",
          "cat":"community",
          "focus":"justice","group":"1",

          
"id" : "3b1eaa169b64eb07e412aa566213494a7b6272f8",
         "place_id" : "ChIJ92Ilnbu3t4kRsAISWFBLuZI",
         "reference" : "<strong>Alliance For Justice</strong><p>11 Dupont Cir NW #200, Washington, DC 20036"
     }

 

 

,

       { 
             
          "title": "Carnegie Endowment for International Peace",
           "icon": "point",
          "cat":"community",
          "focus":"peace","group":"16",

          
"id" : "3b1eaa169b64eb07e412aa566213494a7b6272f8",
         "place_id" : "ChIJ92Ilnbu3t4kRsAISWFBLuZI",
         "reference" : "<strong>Carnegie Endowment for International Peace</strong><p>1779 Massachusetts Ave NW, Washington, DC 20036"
     }

 

 



,

       { 
             
          "title": "The Brookings Institution",
           "icon": "point",
          "cat":"community",
          "focus":"peace","group":"16",

          
"id" : "3b1eaa169b64eb07e412aa566213494a7b6272f8",
         "place_id" : "ChIJ92Ilnbu3t4kRsAISWFBLuZI",
         "reference" : "<strong>The Brookings Institution</strong><p>1775 Massachusetts Ave NW, Washington, DC 20036"
     }

 

 


,

       { 
          "title": "American Enterprise Institute",
           "icon": "point",
          "cat":"questionable",
          "focus":"economic","group":"3",

          
"id" : "3b1eaa169b64eb07e412aa566213494a7b6272f8",
         "place_id" : "ChIJ92Ilnbu3t4kRsAISWFBLuZI",
         "reference" : "<strong>American Enterprise Institute</strong><p>1789 Massachusetts Ave NW, Washington, DC 20036"
     }

 

 
,

       { 

             
          "title": "Pulitzer Center on Crisis Reporting",
           "icon": "point",
          "cat":"community",
          "focus":"civiclife","group":"9",

          
"id" : "3b1eaa169b64eb07e412aa566213494a7b6272f8",
         "place_id" : "ChIJ92Ilnbu3t4kRsAISWFBLuZI",
         "reference" : "<strong>Pulitzer Center on Crisis Reporting</strong><p>1779 Massachusetts Ave NW, Washington, DC 20036"
     }

 

 





 
,

       { 
             
          "title": "Secure World Foundation",
           "icon": "point",
          "cat":"community_sm",
          "focus":"peace","group":"16",

          
"id" : "3b1eaa169b64eb07e412aa566213494a7b6272f8",
         "place_id" : "ChIJ92Ilnbu3t4kRsAISWFBLuZI",
         "reference" : "<strong>Secure World Foundation</strong><p>1779 Massachusetts Ave NW #720, Washington, DC 20036"
     }

 

 




 
,

       { 
             
          "title": "Better World Campaign",
           "icon": "point",
          "cat":"community",
          "focus":"peace","group":"16",

          
"id" : "3b1eaa169b64eb07e412aa566213494a7b6272f8",
         "place_id" : "ChIJ92Ilnbu3t4kRsAISWFBLuZI",
         "reference" : "<strong>Better World Campaign</strong><p>1750 Pennsylvania Ave NW #300, Washington, DC 20006"
     }

 

 

 
,

       { 

             
          "title": "Oceana, International Headquarters",
           "icon": "point",
          "cat":"community",
          "focus":"environment","group":"4",

          
"id" : "3b1eaa169b64eb07e412aa566213494a7b6272f8",
         "place_id" : "ChIJ92Ilnbu3t4kRsAISWFBLuZI",
         "reference" : "<strong>Oceana, International Headquarters</strong><p>1350 Connecticut Ave NW, Washington, DC 20036"
     }

 

 

 

 
,

       { 
             
          "title": "International Fund for Animal Welfare",
           "icon": "point",
          "cat":"community",
          "focus":"environment","group":"4",

          
"id" : "3b1eaa169b64eb07e412aa566213494a7b6272f8",
         "place_id" : "ChIJ92Ilnbu3t4kRsAISWFBLuZI",
         "reference" : "<strong>International Fund for Animal Welfare</strong><p>1350 Connecticut Ave NW # 1220, Washington, DC 20036"
     }

 

 


 
,

       { 
             
          "title": "The Ocean Foundation",
           "icon": "point",
          "cat":"community",
          "focus":"environment","group":"4",

          
"id" : "3b1eaa169b64eb07e412aa566213494a7b6272f8",
         "place_id" : "ChIJ92Ilnbu3t4kRsAISWFBLuZI",
         "reference" : "<strong>The Ocean Foundation</strong><p>1320 19th St NW, Washington, DC 20036"
     }

 

 

,

       { 

             
          "title": "Robert F. Kennedy Human Rights",
           "icon": "point",
          "cat":"community",
          "focus":"humanrights","group":"17",

          
"id" : "3b1eaa169b64eb07e412aa566213494a7b6272f8",
         "place_id" : "ChIJ92Ilnbu3t4kRsAISWFBLuZI",
         "reference" : "<strong>Robert F. Kennedy Human Rights</strong><p>1300 19th St NW Suite 750, Washington, DC 20036"
     }

 

 

,

       { 
             
          "title": "Public Knowledge",
           "icon": "point",
          "cat":"community",
          "focus":"civilliberties","group":"12",

          
"id" : "3b1eaa169b64eb07e412aa566213494a7b6272f8",
         "place_id" : "ChIJ92Ilnbu3t4kRsAISWFBLuZI",
         "reference" : "<strong>Public Knowledge</strong><p>1818 N St NW, Washington, DC 20036"
     }

 


,

       { 
             
          "title": "Meyer Foundation",
           "icon": "point",
          "cat":"community",
          "focus":"economic","group":"3",

          
"id" : "3b1eaa169b64eb07e412aa566213494a7b6272f8",
         "place_id" : "ChIJ92Ilnbu3t4kRsAISWFBLuZI",
         "reference" : "<strong>Meyer Foundation</strong><p>1250 Connecticut Ave NW, Washington, DC 20036"
     }

 

 




,

       { 
             
          "title": "Preservation Action",
           "icon": "point",
          "cat":"community",
          "focus":"planning","group":"18",

          
"id" : "3b1eaa169b64eb07e412aa566213494a7b6272f8",
         "place_id" : "ChIJ92Ilnbu3t4kRsAISWFBLuZI",
         "reference" : "<strong>Preservation Action</strong><p>1307 New Hampshire Ave NW, Washington, DC 20036"
     }

 

 


,

       { 

             
          "title": "Urban Institute",
           "icon": "point",
          "cat":"community",
          "focus":"economic","group":"3",

          
"id" : "3b1eaa169b64eb07e412aa566213494a7b6272f8",
         "place_id" : "ChIJ92Ilnbu3t4kRsAISWFBLuZI",
         "reference" : "<strong>Urban Institute</strong><p>2100 M St NW, Washington, DC 20037"
     }

 

 





,

       { 

             
          "title": "U.S. Green Building Council",
           "icon": "point",
          "cat":"community",
          "focus":"planning","group":"18",

          
"id" : "3b1eaa169b64eb07e412aa566213494a7b6272f8",
         "place_id" : "ChIJ92Ilnbu3t4kRsAISWFBLuZI",
         "reference" : "<strong>U.S. Green Building Council</strong><p>2101 L St NW #500, Washington, DC 20037"
     }

 

 
,

       { 
             
          "title": "Urban Land Institute",
           "icon": "point",
          "cat":"community",
          "focus":"planning","group":"18",

          
"id" : "3b1eaa169b64eb07e412aa566213494a7b6272f8",
         "place_id" : "ChIJ92Ilnbu3t4kRsAISWFBLuZI",
         "reference" : "<strong>Urban Land Institute</strong><p>2001 L St NW #200, Washington, DC 20036"
     }

 

 

 
,

       { 

             
          "title": "Club for Growth",
           "icon": "point",
          "cat":"questionable",
          "focus":"economic","group":"3",

          
"id" : "3b1eaa169b64eb07e412aa566213494a7b6272f8",
         "place_id" : "ChIJ92Ilnbu3t4kRsAISWFBLuZI",
         "reference" : "<strong>Club for Growth</strong><p>2001 L St NW #600, Washington, DC 20036"
     }

 

 
,

       { 
             
          "title": "American Forest Foundation",
           "icon": "point",
          "cat":"community",
          "focus":"environment","group":"4",

          
"id" : "3b1eaa169b64eb07e412aa566213494a7b6272f8",
         "place_id" : "ChIJ92Ilnbu3t4kRsAISWFBLuZI",
         "reference" : "<strong>American Forest Foundation</strong><p>2000 M St NW, Washington, DC 20036"
     }

 

 
 
,

       { 

             
          "title": "Guttmacher Institute",
           "icon": "point",
          "cat":"community",
          "focus":"health","group":"8",

          
"id" : "3b1eaa169b64eb07e412aa566213494a7b6272f8",
         "place_id" : "ChIJ92Ilnbu3t4kRsAISWFBLuZI",
         "reference" : "<strong>Guttmacher Institute</strong><p>1301 Connecticut Ave NW, Washington, DC 20036"
     }

 

 
,

       { 
             
          "title": "Exponent Philanthropy",
           "icon": "point",
          "cat":"community",
          "focus":"bestpractice","group":"11",

          
"id" : "3b1eaa169b64eb07e412aa566213494a7b6272f8",
         "place_id" : "ChIJ92Ilnbu3t4kRsAISWFBLuZI",
         "reference" : "<strong>Exponent Philanthropy</strong><p>1720 N St NW, Washington, DC 20036"
     }

 

 




 
,

       { 
             
          "title": "Society For Science & Public",
           "icon": "point",
          "cat":"community",
          "focus":"education","group":"5",

          
"id" : "3b1eaa169b64eb07e412aa566213494a7b6272f8",
         "place_id" : "ChIJ92Ilnbu3t4kRsAISWFBLuZI",
         "reference" : "<strong>Society For Science & Public</strong><p>1719 N St NW, Washington, DC 20036"
     }

 

 

 
,

       { 
          "title": "New Venture Fund",
           "icon": "point",
          "cat":"community",
          "focus":"bestpractice","group":"11",

          
"id" : "3b1eaa169b64eb07e412aa566213494a7b6272f8",
         "place_id" : "ChIJ92Ilnbu3t4kRsAISWFBLuZI",
         "reference" : "<strong>New Venture Fund</strong><p>1201 Connecticut Ave NW #300, Washington, DC 20036"
     }

 

 
 
,

       { 
             
          "title": "ecoAmerica",
           "icon": "point",
          "cat":"community",
          "focus":"environment","group":"4",

          
"id" : "3b1eaa169b64eb07e412aa566213494a7b6272f8",
         "place_id" : "ChIJ92Ilnbu3t4kRsAISWFBLuZI",
         "reference" : "<strong>ecoAmerica</strong><p>1730 Rhode Island Ave NW #200, Washington, DC 20036"
     }

 

 



 
 
,

       { 
             
          "title": "Emily's List",
           "icon": "point",
          "cat":"community",
          "focus":"health","group":"8",

          
"id" : "3b1eaa169b64eb07e412aa566213494a7b6272f8",
         "place_id" : "ChIJ92Ilnbu3t4kRsAISWFBLuZI",
         "reference" : "<strong>Emily's List</strong><p>1800 M St NW, Washington, DC 20036"
     }

 

 



 
 
,

       { 
             
          "title": "Aleethia Foundation",
           "icon": "point",
          "cat":"community_sm",
          "focus":"civiclife","group":"9",

          
"id" : "3b1eaa169b64eb07e412aa566213494a7b6272f8",
         "place_id" : "ChIJ92Ilnbu3t4kRsAISWFBLuZI",
         "reference" : "<strong>Aleethia Foundation</strong><p>1718 M St NW #1170, Washington, DC 20036"
     }

 

 




 
 
,

       { 
             
          "title": "National Council on U.S.-Arab Relations",
           "icon": "point",
          "cat":"community",
          "focus":"peace","group":"16",

          
"id" : "3b1eaa169b64eb07e412aa566213494a7b6272f8",
         "place_id" : "ChIJ92Ilnbu3t4kRsAISWFBLuZI",
         "reference" : "<strong>National Council on U.S.-Arab Relations</strong><p>1730 M St NW #503, Washington, DC 20036"
     }

 

 




 
 
,

       { 

             
          "title": "No Labels",
           "icon": "point",
          "cat":"questionable",
          "focus":"civiclife","group":"9",

          
"id" : "3b1eaa169b64eb07e412aa566213494a7b6272f8",
         "place_id" : "ChIJ92Ilnbu3t4kRsAISWFBLuZI",
         "reference" : "<strong>No Labels</strong><p>1130 Connecticut Ave NW #325, Washington, DC 20036"
     }

 

 
 
,

       { 
             
          "title": "Global Witness",
           "icon": "point",
          "cat":"community",
          "focus":"humanrights","group":"17",

          
"id" : "3b1eaa169b64eb07e412aa566213494a7b6272f8",
         "place_id" : "ChIJ92Ilnbu3t4kRsAISWFBLuZI",
         "reference" : "<strong>Global Witness</strong><p>1100 17th St NW #501, Washington, DC 20036"
     }

 

 


 
,

       { 
             
          "title": "Global Financial Integrity",
           "icon": "point",
          "cat":"community",
          "focus":"economic","group":"3",

          
"id" : "3b1eaa169b64eb07e412aa566213494a7b6272f8",
         "place_id" : "ChIJ92Ilnbu3t4kRsAISWFBLuZI",
         "reference" : "<strong>Global Financial Integrity</strong><p>1100 17th St NW, Washington, DC 20036"
     }

 

 

 
,

       { 

             
          "title": "Free Press",
           "icon": "point",
          "cat":"community",
          "focus":"civiclife","group":"9",

          
"id" : "3b1eaa169b64eb07e412aa566213494a7b6272f8",
         "place_id" : "ChIJ92Ilnbu3t4kRsAISWFBLuZI",
         "reference" : "<strong>Free Press</strong><p>1025 Connecticut Ave NW, Washington, DC 20036"
     }

 

 

 
,

       { 

             
          "title": "Non-Profit CMS",
           "icon": "point",
          "cat":"digital",
          "focus":"services","group":"6",

          
"id" : "3b1eaa169b64eb07e412aa566213494a7b6272f8",
         "place_id" : "ChIJ92Ilnbu3t4kRsAISWFBLuZI",
         "reference" : "<strong>Non-Profit CMS</strong><p>1050 17th St NW #760, Washington, DC 20036"
     }

 

 




 
,

       { 

             
          "title": "Pro Bono Institute",
           "icon": "point",
          "cat":"community",
          "focus":"bestpractice","group":"11",

          
"id" : "3b1eaa169b64eb07e412aa566213494a7b6272f8",
         "place_id" : "ChIJ92Ilnbu3t4kRsAISWFBLuZI",
         "reference" : "<strong>Pro Bono Institute</strong><p>1025 Connecticut Ave NW #205, Washington, DC 20036"
     }

 

 
 
,

       { 

             
          "title": "The Praxis Project",
           "icon": "point",
          "cat":"community",
          "focus":"bestpractice","group":"11",

          
"id" : "3b1eaa169b64eb07e412aa566213494a7b6272f8",
         "place_id" : "ChIJ92Ilnbu3t4kRsAISWFBLuZI",
         "reference" : "<strong>The Praxis Project</strong><p>1001 Connecticut Ave NW Suite 201, Washington, DC 20036"
     }

 

 


 
 
,

       { 
 
             
          "title": "National Family Planning Association",
           "icon": "point",
          "cat":"community",
          "focus":"health","group":"8",

          
"id" : "3b1eaa169b64eb07e412aa566213494a7b6272f8",
         "place_id" : "ChIJ92Ilnbu3t4kRsAISWFBLuZI",
         "reference" : "<strong>National Family Planning Association</strong><p>1627 K St NW #1200, Washington, DC 20006"
     }

 

 

 
,

       { 
             
          "title": "Human Rights Campaign",
           "icon": "point",
          "cat":"community",
          "focus":"humanrights","group":"17",

          
"id" : "3b1eaa169b64eb07e412aa566213494a7b6272f8",
         "place_id" : "ChIJ92Ilnbu3t4kRsAISWFBLuZI",
         "reference" : "<strong>Human Rights Campaign</strong><p>1640 Rhode Island Ave NW, Washington, DC 20036"
     }

 

 

 
,

       { 
             
          "title": "HABRI",
           "icon": "point",
          "cat":"community",
          "focus":"animals","group":"19",

          
"id" : "3b1eaa169b64eb07e412aa566213494a7b6272f8",
         "place_id" : "ChIJ92Ilnbu3t4kRsAISWFBLuZI",
         "reference" : "<strong>HABRI</strong><p>1615 M Street, NW, Washington, DC 20036"
     }

 

 




 
,

       { 
             
          "title": "Smart Growth America",
           "icon": "point",
          "cat":"community",
          "focus":"planning","group":"18",

          
"id" : "3b1eaa169b64eb07e412aa566213494a7b6272f8",
         "place_id" : "ChIJ92Ilnbu3t4kRsAISWFBLuZI",
         "reference" : "<strong>Smart Growth America</strong><p>1152 15th St NW #450, Washington, DC 20005"
     }

 


 
,

       { 
             
          "title": "Special Olympics",
           "icon": "point",
          "cat":"community",
          "focus":"health","group":"8",

          
"id" : "3b1eaa169b64eb07e412aa566213494a7b6272f8",
         "place_id" : "ChIJ92Ilnbu3t4kRsAISWFBLuZI",
         "reference" : "<strong>Special Olympics</strong><p>1133 19th St NW, Washington, DC 20036"
     }

 

 



 
,

       { 
             
          "title": "Mercy Corps",
           "icon": "point",
          "cat":"community",
          "focus":"humanrights","group":"17",

          
"id" : "3b1eaa169b64eb07e412aa566213494a7b6272f8",
         "place_id" : "ChIJ92Ilnbu3t4kRsAISWFBLuZI",
         "reference" : "<strong>Mercy Corps</strong><p>1111 19th St NW #650, Washington, DC 20036"
     }

 

 

 
,

       { 
             
          "title": "TechnoServe",
           "icon": "point",
          "cat":"community",
          "focus":"economic","group":"3",

          
"id" : "3b1eaa169b64eb07e412aa566213494a7b6272f8",
         "place_id" : "ChIJ92Ilnbu3t4kRsAISWFBLuZI",
         "reference" : "<strong>TechnoServe</strong><p>1120 19th Street NW, 8th Floor, Washington, DC 20036"
     }

 

 
 
,

       { 

             
          "title": "National Committee for Responsive Philanthropy",
           "icon": "point",
          "cat":"community",
          "focus":"bestpractice","group":"11",

          
"id" : "3b1eaa169b64eb07e412aa566213494a7b6272f8",
         "place_id" : "ChIJ92Ilnbu3t4kRsAISWFBLuZI",
         "reference" : "<strong>National Committee for Responsive Philanthropy</strong><p>1900 L St NW Suite #825, Washington, DC 20036"
     }

 

 
 
,

       { 
             
          "title": "Rails To Trails Conservancy",
           "icon": "point",
          "cat":"community",
          "focus":"planning","group":"18",

          
"id" : "3b1eaa169b64eb07e412aa566213494a7b6272f8",
         "place_id" : "ChIJ92Ilnbu3t4kRsAISWFBLuZI",
         "reference" : "<strong>Rails To Trails Conservancy</strong><p>2121 Ward Ct NW # 5, Washington, DC 20037"
     }

 

 


 
,

       { 
             
          "title": "Progressive Policy Institute",
           "icon": "point",
          "cat":"community",
          "focus":"civiclife","group":"9",

          
"id" : "3b1eaa169b64eb07e412aa566213494a7b6272f8",
         "place_id" : "ChIJ92Ilnbu3t4kRsAISWFBLuZI",
         "reference" : "<strong>Progressive Policy Institute</strong><p>1200 New Hampshire Ave NW #575, Washington, DC 20036"
     }

 

 



 
,

       { 

             
          "title": "The Becket Fund",
           "icon": "point",
          "cat":"questionable",
          "focus":"civilliberties","group":"12",

          
"id" : "3b1eaa169b64eb07e412aa566213494a7b6272f8",
         "place_id" : "ChIJ92Ilnbu3t4kRsAISWFBLuZI",
         "reference" : "<strong>The Becket Fund</strong><p>1200 New Hampshire Ave NW, Washington, DC 20036"
     }

 


 
,

       { 

             
          "title": "National Law Center on Homelessness & Poverty",
           "icon": "point",
          "cat":"community",
          "focus":"economic","group":"3",

          
"id" : "3b1eaa169b64eb07e412aa566213494a7b6272f8",
         "place_id" : "ChIJ92Ilnbu3t4kRsAISWFBLuZI",
         "reference" : "<strong>National Law Center on Homelessness & Poverty</strong><p>2000 M St NW Suite 210, Washington, DC 20036"
     }

 

 




 
,

       { 

             
          "title": "United We Dream",
           "icon": "point",
          "cat":"community",
          "focus":"immigration","group":"14",

          
"id" : "3b1eaa169b64eb07e412aa566213494a7b6272f8",
         "place_id" : "ChIJ92Ilnbu3t4kRsAISWFBLuZI",
         "reference" : "<strong>United We Dream</strong><p>1900 L St NW #900, Washington, DC 20036"
     }

 

 





 
,

       { 

             
          "title": "Point of Light Institute",
           "icon": "point",
          "cat":"community",
          "focus":"civiclife","group":"9",

          
"id" : "3b1eaa169b64eb07e412aa566213494a7b6272f8",
         "place_id" : "ChIJ92Ilnbu3t4kRsAISWFBLuZI",
         "reference" : "<strong>Point of Light Institute</strong><p>1875 K St NW, Washington, DC 20006"
     }

 

 



 
,

       { 
             
          "title": "National Wildlife Federation",
           "icon": "point",
          "cat":"community",
          "focus":"environment","group":"4",

          
"id" : "3b1eaa169b64eb07e412aa566213494a7b6272f8",
         "place_id" : "ChIJ92Ilnbu3t4kRsAISWFBLuZI",
         "reference" : "<strong>National Wildlife Federation</strong><p>1990 K St NW #430, Washington, DC 20004"
     }

 



 
,

       { 
             
          "title": "USA for UNHCR",
           "icon": "point",
          "cat":"community",
          "focus":"humanrights","group":"17",

          
"id" : "3b1eaa169b64eb07e412aa566213494a7b6272f8",
         "place_id" : "ChIJ92Ilnbu3t4kRsAISWFBLuZI",
         "reference" : "<strong>USA for UNHCR</strong><p>1775 K St NW #580, Washington, DC 20006"
     }

 

 




 
,

       { 
             
          "title": "United Nations Foundation",
           "icon": "point",
          "cat":"community",
          "focus":"humanrights","group":"17",

          
"id" : "3b1eaa169b64eb07e412aa566213494a7b6272f8",
         "place_id" : "ChIJ92Ilnbu3t4kRsAISWFBLuZI",
         "reference" : "<strong>United Nations Foundation</strong><p>1750 Pennsylvania Ave NW #300, Washington, DC 20006"
     }

 

 





 
,

       { 

             
          "title": "American Action Forum",
           "icon": "point",
          "cat":"questionable",
          "focus":"economic","group":"3",

          
"id" : "3b1eaa169b64eb07e412aa566213494a7b6272f8",
         "place_id" : "ChIJ92Ilnbu3t4kRsAISWFBLuZI",
         "reference" : "<strong>American Action Forum</strong><p>1747 Pennsylvania Ave NW, Washington, DC 20006"
     }

 

 


 
,

       {
           

             
          "title": "Freedom House",
           "icon": "point",
          "cat":"community",
          "focus":"civilliberties","group":"12",

          
"id" : "3b1eaa169b64eb07e412aa566213494a7b6272f8",
         "place_id" : "ChIJ92Ilnbu3t4kRsAISWFBLuZI",
         "reference" : "<strong>Freedom House</strong><p>1850 M Street Northwest, Floor 11, Washington, DC 20036"
     }

 

 

 
,

       { 



             
          "title": "CARE",
           "icon": "point",
          "cat":"community",
          "focus":"economic","group":"3",

          
"id" : "3b1eaa169b64eb07e412aa566213494a7b6272f8",
         "place_id" : "ChIJ92Ilnbu3t4kRsAISWFBLuZI",
         "reference" : "<strong>CARE</strong><p>L NW 20006, 1899 International Dr NW #500, Washington, DC 20008"
      }

 

 




 
,

       {
          "title": "International Peace & Security Institute",
           "icon": "point",
          "cat":"community",
          "focus":"economic","group":"3",

          
"id" : "3b1eaa169b64eb07e412aa566213494a7b6272f8",
         "place_id" : "ChIJ92Ilnbu3t4kRsAISWFBLuZI",
         "reference" : "<strong>International Peace & Security Institute</strong><p>1720 N St NW, Washington, DC 20036"
      }

 

 









 
,

       {
          "title": "National Campaign To Prevent Teen and Unplanned Pregnancy",
           "icon": "point",
          "cat":"community",
          "focus":"health","group":"8",

          
"id" : "3b1eaa169b64eb07e412aa566213494a7b6272f8",
         "place_id" : "ChIJ92Ilnbu3t4kRsAISWFBLuZI",
         "reference" : "<strong>National Campaign To Prevent Teen and Unplanned Pregnancy</strong><p>1776 Massachusetts Ave NW #200, Washington, DC 20036"
      }

 

 






 
,

       {
          "title": "Jobs With Justice",
           "icon": "point",
          "cat":"community",
          "focus":"economic","group":"3",

          
"id" : "3b1eaa169b64eb07e412aa566213494a7b6272f8",
         "place_id" : "ChIJ92Ilnbu3t4kRsAISWFBLuZI",
         "reference" : "<strong>Jobs With Justice</strong><p>1616 P St NW, Washington, DC 20036"
      }

 

 
,

       {
          "title": "Food & Water Watch",
           "icon": "point",
          "cat":"community",
          "focus":"environment","group":"4",

          
"id" : "3b1eaa169b64eb07e412aa566213494a7b6272f8",
         "place_id" : "ChIJ92Ilnbu3t4kRsAISWFBLuZI",
         "reference" : "<strong>Food & Water Watch</strong><p>1616 P St NW #300, Washington, DC 20036"
      }

 

 



 
,

       {
          "title": "American Humane",
           "icon": "point",
          "cat":"community",
          "focus":"animals","group":"19",

          
"id" : "3b1eaa169b64eb07e412aa566213494a7b6272f8",
         "place_id" : "ChIJ92Ilnbu3t4kRsAISWFBLuZI",
         "reference" : "<strong>American Humane</strong><p>1400 16th St NW #360, Washington, DC 20036"
      }

 

 


 
,

       { 
          "title": "Worldwatch Institute",
           "icon": "point",
          "cat":"community",
          "focus":"economic","group":"3",

          
"id" : "3b1eaa169b64eb07e412aa566213494a7b6272f8",
         "place_id" : "ChIJ92Ilnbu3t4kRsAISWFBLuZI",
         "reference" : "<strong>Worldwatch Institute</strong><p>1400 16th St NW #360, Washington, DC 20036"
      }

 

 


 
,

       {
         "title": "Earth Day Network",
           "icon": "point",
          "cat":"community",
          "focus":"environment","group":"4",

          
"id" : "3b1eaa169b64eb07e412aa566213494a7b6272f8",
         "place_id" : "ChIJ92Ilnbu3t4kRsAISWFBLuZI",
         "reference" : "<strong>Earth Day Network</strong><p>1616 P St NW #340, Washington, DC 20036"
      }

 

 

 
,

       {
           "title": "Native American Rights Fund",
           "icon": "point",
          "cat":"community",
          "focus":"civilliberties","group":"12",

          
"id" : "3b1eaa169b64eb07e412aa566213494a7b6272f8",
         "place_id" : "ChIJ92Ilnbu3t4kRsAISWFBLuZI",
         "reference" : "<strong>Native American Rights Fund</strong><p>1514 P St NW, Washington, DC 20005"
      }

 

 
 

 
,

       {  "title": "National Indian Education Association",
           "icon": "point",
          "cat":"community",
          "focus":"education","group":"5",

          
"id" : "3b1eaa169b64eb07e412aa566213494a7b6272f8",
         "place_id" : "ChIJ92Ilnbu3t4kRsAISWFBLuZI",
         "reference" : "<strong>National Indian Education Association</strong><p>1514 P St NW Suite B, Washington, DC 20005"
      }

 




 
 

 
,

       { 
          "title": "National Park Foundation",
           "icon": "point",
          "cat":"community",
          "focus":"civiclife","group":"9",

          
"id" : "3b1eaa169b64eb07e412aa566213494a7b6272f8",
         "place_id" : "ChIJ92Ilnbu3t4kRsAISWFBLuZI",
         "reference" : "<strong>National Park Foundation</strong><p>1110 Vermont Ave NW #200, Washington, DC 20005"
      }

 




 
,

       {"title": "League of Women Voters",
           "icon": "point",
          "cat":"community",
          "focus":"civiclife","group":"9",

          
"id" : "3b1eaa169b64eb07e412aa566213494a7b6272f8",
         "place_id" : "ChIJ92Ilnbu3t4kRsAISWFBLuZI",
         "reference" : "<strong>League of Women Voters</strong><p>1101 15th St NW, Washington, DC 20005"
      }

 










      ];

    nodes.forEach(function(d) { 

   /////////////////   d.radius = Math.floor(d.radius * x);
d.radius = (3*4);

      clusters[d.group] = d;
    });

    // Use the pack layout to initialize node positions.
    d3.layout.pack()
        .sort(null)
        .size([width, height])

        .children(function(d) { return d.values; })
        .value(function(d) { return d.radius * d.radius; })
        .nodes({values: d3.nest()
          .key(function(d) { return d.group; })
          .entries(nodes)});

    var force = d3.layout.force()
        .nodes(nodes)
        .size([width, height])
        .gravity(.00006)
        .charge(.00003)
        .on("tick", tick)
        .start();

    var svg = d3.select("#vis").append("svg")

             .attr("class", "dotskis")
   


        .attr("width", width)
        .attr("height", height);
    
    var cgroup = svg.append("g")



        .attr("id", "something");
var title;
    
    var tooltip = d3.select("body")
      .append("div")
          .attr('id', 'tooltip')
      .style("position", "absolute")
      .style("z-index", "99999999")
      .style("color", "#fff")
      .style("font-size", "3vh")
      .style("font-weight", "800")
      .style("background-color", "#000")
      .style("padding", "1em")
      .style("visibility", "hidden")
      .text("a simple tooltip");
    
  
    // Create circles in clusters
    for (var key in clusters) {
   /////////////////     console.log('key : ', key);

      var clusterData = clusters[key],
            clusterNodes = clusterData.parent.children;
      
      cgroup
          .append('g')
          .attr('class', 'cluster')

          .attr('id', key)
 //////     .attr('name', function(d) { return d.title; })
          .selectAll('circle')
            .data(clusterNodes)
            .enter()
            .append('circle')
            .attr('class', 'skill-node')
            .attr('id', function(d) { return d.id; })
            .attr('title', function(d) { return d.title; })
            .style("fill", function(d) { return color(d.group); })
      			.style("opacity", 1)
            .call(force.drag);
    } 
    for (var nameski in clusters) {


    } 

    
    var node = d3.selectAll('circle.skill-node') 
        .on("mouseover", function(d) {
          d3.select(this).style("opacity", .5);
          d3.select(this).style("cursor", "pointer");
          return tooltip.style("visibility", "visible").text(d.title);
    		})                  
    		.on("mouseout", function(d) {
      		d3.select(this).style("opacity", 1);
          return tooltip.style("visibility", "hidden");
    		})
    		.on("mousemove", function(){
          return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px");
        });

    node.transition()
        .duration(350)
        .delay(function(d, i) { return i * 5; })
        .attrTween("r", function(d) {
          var i = d3.interpolate(0, d.radius);
          return function(t) { return d.radius = i(t); };
        });
    
    function tick(e) {
      node
          .each(cluster(10 * e.alpha * e.alpha))
          .each(collide(.5))
          .attr("cx", function(d) { return d.x; })
          .attr("cy", function(d) { return d.y; });
    }

    // Move d to be adjacent to the cluster node.
    function cluster(alpha) {
      return function(d) {
        var cluster = clusters[d.group];
        var title = clusters[d.title];
        if (cluster === d) return;
        var x = d.x - cluster.x,
            y = d.y - cluster.y,
            l = Math.sqrt(x * x + y * y),
            r = d.radius + cluster.radius;
        if (l != r) {
          l = (l - r) / l * alpha;
          d.x -= x *= l;
          d.y -= y *= l;
          cluster.x += x;
          cluster.y += y;
        }
      };
    }

    // Resolves collisions between d and all other circles.
    function collide(alpha) {
      var quadtree = d3.geom.quadtree(nodes);
      return function(d) {
        var r = d.radius + maxRadius + Math.max(padding, clusterPadding),
            nx1 = d.x - r,
            nx2 = d.x + r,
            ny1 = d.y - r,
            ny2 = d.y + r;
        quadtree.visit(function(quad, x1, y1, x2, y2) {
          if (quad.point && (quad.point !== d)) {
            var x = d.x - quad.point.x,
                y = d.y - quad.point.y,
                l = Math.sqrt(x * x + y * y),
                r = d.radius + quad.point.radius + (d.group === quad.point.cluster ? padding : clusterPadding);
            if (l < r) {
              l = (l - r) / l * alpha;
              d.x -= x *= l;
              d.y -= y *= l;
              quad.point.x += x;
              quad.point.y += y;
            }
          }
          return x1 > nx2 || x2 < nx1 || y1 > ny2 || y2 < ny1;
        });
      };
    }
    
    
    
    function resize(e) {
    canvasWidth = canvas.width = window.innerWidth;
    canvasHeight = canvas.height = window.innerHeight;
    context = canvas.getContext('2d');
}

 


//////////////////////////////////////////
////////// remove interactive below

document.removeEventListener('mousemove', mouseMoveP, false);
document.removeEventListener('mousedown', mouseDownP, false);
document.removeEventListener('mouseup', mouseUpP, false);
document.removeEventListener('dblclick', dobuleClickP, false);

////////////////////////////////////////////
////////// Spray dots image turned off
var spots = document.getElementById( 'spots' );
spots.setAttribute("style", "display:none; ");

context.fillStyle = 'black';
context.fillRect(0, 0, canvasWidth, canvasHeight);



/* later */
 
var loop = null;
////window.clearTimeout(pulse);
var pulse = null;



////////////////////////////////////////////
////////// Scroll prompt image turned off
var spotsabout = document.getElementById( 'spotsabout' );
spotsabout.setAttribute("style", "display:none; ");


////////////////////////////////////////////
////////// Scroll prompt image turned off
var strokepaint = document.getElementById( 'strokepaint' );
strokepaint.setAttribute("style", "display:none; ");


   d3.select("svgContainerPaint.parent").selectAll("*").remove();
 d3.select("#strokepaint").selectAll("*").remove();



  }


  


///////
///////




  /**
   *
   *
   */
  function showTitle6() {
 


////////////////////////////////////////////
////////// Scroll prompt image turned off
var spotsabout = document.getElementById( 'spotsabout' );
spotsabout.setAttribute("style", "display:none; ");


////////////////////////////////////////////
////////// Scroll prompt image turned off
var strokepaint = document.getElementById( 'strokepaint' );
strokepaint.setAttribute("style", "display:inline-block; ");



 ////////////////////////////////////////////
////////// Remove interactive from above
 ////////////////////////////////////////////
 d3.select("g.parent").selectAll("*").remove();
 d3.select("svg.parent").selectAll("*").remove();
 d3.select("#vis").select("svg").remove();
 d3.select("#tooltip").remove();
 
////////////////////////////////////////////
////////// Spray dots image turned off
var spots = document.getElementById( 'spots' );
spots.setAttribute("style", "display:inline-block; ");

var vis = document.getElementById( 'vis' );
vis.setAttribute("style", "display:none; ");


/////       window.setTimeout(pulse, 2000);  


document.addEventListener('mousemove', mouseMoveP, false);
document.addEventListener('mousedown', mouseDownP, false);
document.addEventListener('mouseup', mouseUpP, false);
document.addEventListener('dblclick', dobuleClickP, false);



var svgContainerPaint = d3.select("#strokepaint").append("svg")
.style("width", '160px')
.style("height", '153px');
//////.style("background-color","blue");

var clipRectPaint = svgContainerPaint.append('svg:defs')
                .append('svg:clipPath')
                .attr('id', 'shutter-clip')
                .append('rect')
                .attr({
                    x: 0,
                    y: 0,
                    height: 160,
                    width: 153
                })
        
        
 
function strikepaint() {
var imgs = svgContainerPaint.append("svg:image")
    .attr("xlink:href", "images/strike.png")
    .attr("width", "0")
    .attr("height", "0")
    .attr("clip-path", "url(#shutter-clip)")
    
        .transition()
      .duration(66)
      .ease(Math.sqrt)
    .attr("width", "160px")

    .attr("height", "153px");

 


}

      setTimeout(function(){ 
strikepaint();
  clearTimeout();
       }, 366);




//////////////////////////////////////////////////
//////////////////// remove video
 d3.select("#big7.parent").selectAll("*").remove();
 d3.select("this.videoplay.parent").selectAll("*").remove();
videoplay = document.getElementById('bgvid7');
videoplay.setAttribute("style", "display:none; ");






}





///////
///////




  /**
   *
   *
   */
  function showTitle7() {
 
////////////////////////////////////////////
////////// Spray dots image turned off
var spots = document.getElementById( 'spots' );
spots.setAttribute("style", "display:none; ");


////////////////////////////////////////////
////////// Scroll prompt image turned off
var strokepaint = document.getElementById( 'strokepaint' );
strokepaint.setAttribute("style", "display:none; ");


   d3.select("svgContainerPaint.parent").selectAll("*").remove();
 d3.select("#strokepaint").selectAll("*").remove();




////////////////////////////////////////////
////////// Scroll prompt image turned off
var spotsabout = document.getElementById( 'spotsabout' );
spotsabout.setAttribute("style", "display:none; ");


document.removeEventListener('mousemove', mouseMoveP, false);
document.removeEventListener('mousedown', mouseDownP, false);
document.removeEventListener('mouseup', mouseUpP, false);
document.removeEventListener('dblclick', dobuleClickP, false);


context.fillStyle = 'black';
context.fillRect(0, 0, canvasWidth, canvasHeight);


/* later */
var loop = null;
///////window.clearTimeout(pulse);
var pulse = null;



 ////////////////////////////////////////////
 ////////////////////////////////////////////
 ///////// VIDEO ELEMENT EXAMPLE     ////////
 ////////////////////////////////////////////
 
 

var videoplay = document.getElementById('bgvid7');
       videoplay.setAttribute("style", "display:inline-block; ");
       videoplay.setAttribute("style", "z-index:10; ");

var promise = videoplay.play();

// promise won’t be defined in browsers that don't support promisified play()
if (promise === undefined) {
  console.log('Promisified video play() not supported');
} else {
  promise.then(function() {
    console.log('Video playback successfully initiated, returning a promise');
  }).catch(function(error) {
    console.log('Error initiating video playback: ', error);
  });
}

bgvid7.onloadedmetadata = function() {
  var fileName = this.currentSrc.replace(/^.*[\\\/]/, '');
  document.querySelector('#big7');
};

 

 ////////////////////////////////////////////
////////////////////////////////////////////
/////////////////////////////


///////////////////
//////
var CanvasImg = document.getElementById( 'CanvasImg' );
CanvasImg.setAttribute("style", "visibility:hidden; ");

 
}





///////
///////




  /**
   *
   *
   */
  function showTitle8() {
 
 
////////////////document.body.style.backgroundImage = "url(8.jpg)";


//////////////////////////////////////////////////
//////////////////// remove video
 d3.select("#big7.parent").selectAll("*").remove();
 d3.select("this.videoplay.parent").selectAll("*").remove();
videoplay = document.getElementById('bgvid7');
videoplay.setAttribute("style", "display:none; ");

   context.fillStyle = 'black';
    context.fillRect(0, 0, width, height);


  d3.select("svg.parent").selectAll("*").remove();

d3.select("#vis").select("svg").remove();
d3.select("#sequence").select("svg").remove();
  d3.select("#sequence.parent").selectAll("*").remove();

 


///////////////////
//////
var CanvasImg = document.getElementById( 'CanvasImg' );
CanvasImg.setAttribute("style", "visibility:inherit; ");


///////////////////
//////
var vis = document.getElementById( 'vis' );
vis.setAttribute("style", "display:none; ");

var sequence = document.getElementById( 'sequence' );
sequence.setAttribute("style", "display:none; ");

var explanation = document.getElementById( 'explanation' );
explanation.setAttribute("style", "display:none; ");





}





////////////////
/////////////////////////
///////////////////////



///////
///////




  /**
   *
   *
   */
  function showTitle9() {
 
 
///////////////////
//////
var CanvasImg = document.getElementById( 'CanvasImg' );
CanvasImg.setAttribute("style", "visibility:hidden; ");

////////////////document.body.style.backgroundImage = "url(8.jpg)";
 
  d3.select("svg.parent").selectAll("*").remove();

d3.select("#vis").select("svg").remove();

var vis = document.getElementById( 'vis' );
vis.setAttribute("style", "display:inline-block; ");



var sequence = document.getElementById( 'sequence' );
sequence.setAttribute("style", "display:inline-block; ");

var explanation = document.getElementById( 'explanation' );
explanation.setAttribute("style", "display:inline-block; ");










// Dimensions of sunburst.
var width = window.innerWidth;
var height = window.innerHeight;
var radius = Math.min(width, height) / 2;

// Breadcrumb dimensions: width, height, spacing, width of tip/tail.
var b = {
  w: 75, h: 30, s: 3, t: 10
};

// Mapping of step names to colors.
var colors = {
  "home": "#ffd200",
  "product": "#fff",
  "search": "#ff0000",
  "account": "#333",
  "other": "#777",
  "end": "#bbbbbb"
};

// Total size of all segments; we set this later, after loading the data.
var totalSize = 0; 

var vis = d3.select("#vis").append("svg:svg")
    .attr("width", width)
    .attr("height", height/2)
    .append("svg:g")
    .attr("id", "container")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

var partition = d3.layout.partition()
    .size([2 * Math.PI, radius * radius])
    .value(function(d) { return d.size; });

var arc = d3.svg.arc()
    .startAngle(function(d) { return d.x; })
    .endAngle(function(d) { return d.x + d.dx; })
    .innerRadius(function(d) { return Math.sqrt(d.y); })
    .outerRadius(function(d) { return Math.sqrt(d.y + d.dy); });

// Use d3.text and d3.csv.parseRows so that we do not need to have a header
// row, and can receive the csv as an array of arrays.
d3.text("visit-sequences.csv", function(text) {
  var csv = d3.csv.parseRows(text);
  var json = buildHierarchy(csv);
  createVisualization(json);
});

// Main function to draw and set up the visualization, once we have the data.
function createVisualization(json) {

  // Basic setup of page elements.
  initializeBreadcrumbTrail();
  drawLegend();
  d3.select("#togglelegend").on("click", toggleLegend);

  // Bounding circle underneath the sunburst, to make it easier to detect
  // when the mouse leaves the parent g.
  vis.append("svg:circle")
      .attr("r", radius)
      .style("opacity", 0);

  // For efficiency, filter nodes to keep only those large enough to see.
  var nodes = partition.nodes(json)
      .filter(function(d) {
      return (d.dx > 0.005); // 0.005 radians = 0.29 degrees
      });

  var path = vis.data([json]).selectAll("path")
      .data(nodes)
      .enter().append("svg:path")
      .attr("display", function(d) { return d.depth ? null : "none"; })
      .attr("d", arc)
      .attr("fill-rule", "evenodd")
      .style("fill", function(d) { return colors[d.name]; })
      .style("opacity", 1)
      .on("mouseover", mouseover);

  // Add the mouseleave handler to the bounding circle.
  d3.select("#container").on("mouseleave", mouseleave);

  // Get total size of the tree = value of root node from partition.
  totalSize = path.node().__data__.value;
 };

// Fade all but the current sequence, and show it in the breadcrumb trail.
function mouseover(d) {

  var percentage = (100 * d.value / totalSize).toPrecision(3);
  var percentageString = percentage + "%";
  if (percentage < 0.1) {
    percentageString = "< 0.1%";
  }

  d3.select("#percentage")
      .text(percentageString);

  d3.select("#explanation")
      .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")")
    .style("visibility", "");

  var sequenceArray = getAncestors(d);
  updateBreadcrumbs(sequenceArray, percentageString);

  // Fade all the segments.
  d3.selectAll("path")
     .style("cursor", "pointer")
    .style("opacity", 0.3);

  // Then highlight only those that are an ancestor of the current segment.
  vis.selectAll("path")
      .filter(function(node) {
                return (sequenceArray.indexOf(node) >= 0);
              })
      .style("opacity", 1);
}

// Restore everything to full opacity when moving off the visualization.
function mouseleave(d) {

  // Hide the breadcrumb trail
  d3.select("#trail")
      .style("visibility", "hidden");

  // Deactivate all segments during transition.
  d3.selectAll("path").on("mouseover", null);

  // Transition each segment to full opacity and then reactivate it.
  d3.selectAll("path")
      .transition()
      .duration(1000)
      .style("opacity", 1)
      .each("end", function() {
              d3.select(this).on("mouseover", mouseover);
            });

  d3.select("#explanation")
      .style("visibility", "hidden");
}

// Given a node in a partition layout, return an array of all of its ancestor
// nodes, highest first, but excluding the root.
function getAncestors(node) {
  var path = [];
  var current = node;
  while (current.parent) {
    path.unshift(current);
    current = current.parent;
  }
  return path;
}

function initializeBreadcrumbTrail() {
  // Add the svg area.
  var trail = d3.select("#sequence").append("svg:svg")
  
  
      .attr("width", width)
      .attr("height", 50)
      .attr("id", "trail");
  // Add the label at the end, for the percentage.
  trail.append("svg:text")
    .attr("id", "endlabel")
    .style("fill", "#000");
}

// Generate a string that describes the points of a breadcrumb polygon.
function breadcrumbPoints(d, i) {
  var points = [];
  points.push("0,0");
  points.push(b.w + ",0");
  points.push(b.w + b.t + "," + (b.h / 2));
  points.push(b.w + "," + b.h);
  points.push("0," + b.h);
  if (i > 0) { // Leftmost breadcrumb; don't include 6th vertex.
    points.push(b.t + "," + (b.h / 2));
  }
  return points.join(" ");
}

// Update the breadcrumb trail to show the current sequence and percentage.
function updateBreadcrumbs(nodeArray, percentageString) {

  // Data join; key function combines name and depth (= position in sequence).
  var g = d3.select("#trail")
      .selectAll("g")
      .data(nodeArray, function(d) { return d.name + d.depth; });

  // Add breadcrumb and label for entering nodes.
  var entering = g.enter().append("svg:g");

  entering.append("svg:polygon")
      .attr("points", breadcrumbPoints)
      .style("fill", function(d) { return colors[d.name]; });

  entering.append("svg:text")
      .attr("x", (b.w + b.t) / 2)
      .attr("y", b.h / 2)
      .attr("dy", "0.3em")
      .attr("text-anchor", "middle")
          .style("fill", "#000")

      .text(function(d) { return d.name; });

  // Set position for entering and updating nodes.
  g.attr("transform", function(d, i) {
    return "translate(" + i * (b.w + b.s) + ", 0)";
  });

  // Remove exiting nodes.
  g.exit().remove();

  // Now move and update the percentage at the end.
  d3.select("#trail").select("#endlabel")
      .attr("x", (nodeArray.length + 0.5) * (b.w + b.s))
      .attr("y", b.h / 2)
      .attr("dy", "0.35em")
      .attr("text-anchor", "middle");
 ///////////////////////////////     .text(percentageString)

  // Make the breadcrumb trail visible, if it's hidden.
  d3.select("#trail")
      .style("visibility", "");

}

function drawLegend() {

  // Dimensions of legend item: width, height, spacing, radius of rounded rect.
  var li = {
    w: 75, h: 30, s: 3, r: 3
  };

  var legend = d3.select("#legend").append("svg:svg")
      .attr("width", li.w)
      .attr("height", d3.keys(colors).length * (li.h + li.s));

  var g = legend.selectAll("g")
      .data(d3.entries(colors))
      .enter().append("svg:g")
      .attr("transform", function(d, i) {
              return "translate(0," + i * (li.h + li.s) + ")";
           });

  g.append("svg:rect")
      .attr("rx", li.r)
      .attr("ry", li.r)
      .attr("width", li.w)
      .attr("height", li.h)
      .style("fill", function(d) { return d.value; });

  g.append("svg:text")
      .attr("x", li.w / 2)
      .attr("y", li.h / 2)
      .attr("dy", "0.35em")
      .attr("text-anchor", "middle")
      .text(function(d) { return d.key; });
}

function toggleLegend() {
  var legend = d3.select("#legend");
  if (legend.style("visibility") == "hidden") {
    legend.style("visibility", "");
  } else {
    legend.style("visibility", "hidden");
  }
}

// Take a 2-column CSV and transform it into a hierarchical structure suitable
// for a partition layout. The first column is a sequence of step names, from
// root to leaf, separated by hyphens. The second column is a count of how 
// often that sequence occurred.
function buildHierarchy(csv) {
  var root = {"name": "root", "children": []};
  for (var i = 0; i < csv.length; i++) {
    var sequence = csv[i][0];
    var size = +csv[i][1];
    if (isNaN(size)) { // e.g. if this is a header row
      continue;
    }
    var parts = sequence.split("-");
    var currentNode = root;
    for (var j = 0; j < parts.length; j++) {
      var children = currentNode["children"];
      var nodeName = parts[j];
      var childNode;
      if (j + 1 < parts.length) {
   // Not yet at the end of the sequence; move down the tree.
 	var foundChild = false;
 	for (var k = 0; k < children.length; k++) {
 	  if (children[k]["name"] == nodeName) {
 	    childNode = children[k];
 	    foundChild = true;
 	    break;
 	  }
 	}
  // If we don't already have a child node for this branch, create it.
 	if (!foundChild) {
 	  childNode = {"name": nodeName, "children": []};
 	  children.push(childNode);
 	}
 	currentNode = childNode;
      } else {
 	// Reached the end of the sequence; create a leaf node.
 	childNode = {"name": nodeName, "size": size};
 	children.push(childNode);
      }
    }
  }
  return root;
};




//////
//////

window.addEventListener("resize", onResizer, false);


function onResizer() {
   height = window.innerHeight;
   width = window.innerWidth;
var heighthalf = height/2;
var widthhalf = width/2;

 d3.select("#vis").select("svg")
    .attr("width", width)
    .attr("height", (height/2));


 d3.select("g#container")
 
 
     
    .attr("transform", "translate(" + widthhalf + "," + heighthalf + ")");


 



 
}



///////////////////
//////
var CanvasImgB = document.getElementById( 'CanvasImgB' );
CanvasImgB.setAttribute("style", "visibility:hidden; ");



}




///////
///////




  /**
   *
   *
   */
  function showTitle10() {
 

  d3.select("svg.parent").selectAll("*").remove();

d3.select("#vis").select("svg").remove();
d3.select("#sequence").select("svg").remove();
  d3.select("#sequence.parent").selectAll("*").remove();

 

///////////////////
//////
var CanvasImgB = document.getElementById( 'CanvasImgB' );
CanvasImgB.setAttribute("style", "visibility:inherit; ");


///////////////////
//////


var sequence = document.getElementById( 'sequence' );
sequence.setAttribute("style", "display:none; ");

var explanation = document.getElementById( 'explanation' );
explanation.setAttribute("style", "display:none; ");

 
 var vis = document.getElementById( 'vis' );
vis.setAttribute("style", "display:inline-block; ");



//////////////////////////////////////////////////
////////////////////  
 
 
   var width = window.innerWidth,
    height = window.innerHeight;
      var w = window.innerWidth,
          h = window.innerHeight,
          margin = { top: 0, right: 0, bottom: 0, left: 0 },
          radius = 36;

  var cx, cy;  
      var svg = d3.select("#vis").append("svg").attr({
        width: w,
        height: h
      });


var color = d3.scale.category20();


      var dataset = [
        { x: (width-(width/2.7)), y: (height-(height/(2+Math.random())  )), name:'eric schoenborn' },
        { x: (width-(width/1.8)), y: (height-(height/(1.3+Math.random()))), name:'eric schoenborn'  },
        { x: (width-(width/5.5)), y: (height-(height/(1.4+Math.random())  )), name:'eric schoenborn'  }
      ];
     
      
      // We're passing in a function in d3.max to tell it what we're maxing (x value)
      var xScale = d3.scale.linear()
          .domain([0, d3.max(dataset, function (d) { return d.x + 10; })])
          .range([margin.left, w - margin.right]);  // Set margins for x specific

      // We're passing in a function in d3.max to tell it what we're maxing (y value)
      var yScale = d3.scale.linear()
          .domain([0, d3.max(dataset, function (d) { return d.y + 10; })])
          .range([margin.top, h - margin.bottom]);  // Set margins for y specific

      // Add a X and Y Axis (Note: orient means the direction that ticks go, not position)
      var xAxis = d3.svg.axis().scale(xScale).orient("top");
      var yAxis = d3.svg.axis().scale(yScale).orient("left");



   // New circles will start at 0,0
      var circleInitialAttrs = {
          cx: 0,
          cy:0,
     ////     cx: xScale(0),
    //////      cy: yScale(0),
          r: 1
      };
      
      
       // Sets circles attributes
      var circleAttrs = {
  
  

        cx: function(d) { return xScale(d.x); },
          cy: function(d) { return yScale(d.y); },
          r: radius
      };
 
 


    var drag = d3.behavior.drag()
        .on("drag", function(d,i) {
            d.x += d3.event.dx
            d.y += d3.event.dy
            d3.select(this).attr("transform", function(d,i){
                return "translate(" + [ d.x,d.y ] + ")"
            })
            
            



        });




      
  
      var circles = svg.selectAll("circle")
          .data(dataset)
          .enter().append("circle")
          .attr(circleInitialAttrs)  // Get attributes from circleInitialAttrs var          
.on("touchstart", nozoom)
.on("touchmove", nozoom)
   
 //////   .data(data)
////////  .enter().append("circle")
 .attr(circleInitialAttrs)  // Get attributes from circleInitialAttrs var
  
  //                 .attr("transform", "translate(" + d.x + "," + d.y + ")")
/// 
   .attr("r", 3)
    .style("fill", "#ffd200")
    .style("cursor", "pointer")
    .on("click", clicked)
    .call(drag);

 

       ///   .on("mouseover", handleMouseOver)
         ///// .on("mouseout", handleMouseOut);

      circles.transition()  // Gives the fly out from the center effect
          .delay(function (d, i){
              return i * 36;  // Gives a slight delay with 100 ms spacing
          })
          .duration(666)
          .ease("elastic")
   .attr("r", 106)
                            .attr("transform", function(d) { return "translate(" + [d.x , d.y] + ")"; });
    
          
////          .attr(circleAttrs);




function dragged(d) {
//////////  d[0] = d3.event.x, d[1] = d3.event.y;
  d.x == d3.event.x, d.y == d3.event.y;


  if (this.nextSibling) this.parentNode.appendChild(this);
  d3.select(this).attr("transform", "translate(" + d.x + "," + d.y + ")");
}

 

function clicked(d, i) {
  if (d3.event.defaultPrevented) return; // dragged





  d3.select(this).transition()
      .style("fill", "black")
      .attr("r", 64)
    .transition()
    
 
      .attr("r", 166)
      
        //////.append("text")
	    .attr("dx", function(d){return -20})
	    .text(function(d){return d.name})
   /////////  .style("fill", color(i));
      .style("fill", "#fff");
 ////////////     console.log(d.name);
}

function nozoom() {
  d3.event.preventDefault();
}






}





////////////////
/////////////////////////
///////////////////////







  /**
   * UPDATE FUNCTIONS
   *
   * These will be called within a section
   * as the user scrolls through it.
   *
   * We use an immediate transition to
   * update visual elements based on
   * how far the user has scrolled
   *
   */

  /**



  /**
   * DATA FUNCTIONS
   *
   * Used to coerce the data into the
   * formats we need to visualize
   *
   */
 
  

  /**
   * activate -
   *
   * @param index - index of the activated section
   */
  chart.activate = function(index) {
    activeIndex = index;
    var sign = (activeIndex - lastIndex) < 0 ? -1 : 1;
    var scrolledSections = d3.range(lastIndex + sign, activeIndex + sign, sign);
    scrolledSections.forEach(function(i) {
      activateFunctions[i]();
    });
    lastIndex = activeIndex;
  };

  /**
   * update
   *
   * @param index
   * @param progress
   */
  chart.update = function(index, progress) {
    updateFunctions[index](progress);
  };

  // return chart function
  return chart;
};


/**
 * display - called once data
 * has been loaded.
 * sets up the scroller and
 * displays the visualization.
 *
 * @param data - loaded tsv data
 */
function display() {
  // create a new plot and
  // display it
  var plot = scrollVis();
  d3.select("#vis")
  ////  .datum(data)
    .call(plot);

  // setup scroll functionality
  var scroll = scroller()
    .container(d3.select('#graphic'));

  // pass in .step selection as the steps
  scroll(d3.selectAll('.step'));

  // setup event handling
  scroll.on('active', function(index) {
    // highlight current step text
    d3.selectAll('.step')
      .style('opacity',  function(d,i) { return i == index ? 1 : 0; });


////////////////document.body.style.backgroundImage = "url("+index+".jpg)";

 d3.selectAll('#container'+index)
       .style('display',  function(d,i) { return i == index ? 'none' : 'inline-block'; });

    
 d3.selectAll('#container'+(index-1))
      .style('display',  function(d,i) { return i == index ? 'inline-block' : 'none'; });

    
 d3.selectAll('#container'+(index+1))
      .style('display',  function(d,i) { return i == index ? 'inline-block' : 'none'; });

    
 ///////////var getBG = document.getElementById( 'container'+index );
 ///////    getBG.setAttribute("style", "background-image:url("+index+".jpg); "  );



 ///////// console.log(index);

 
    // activate current section
    plot.activate(index);
  });

  scroll.on('progress', function(index, progress){
    plot.update(index, progress);
  });
}

// load data and display
display();




//////
//////

window.addEventListener("resize", onResize);


function onResize(h) {
  var height = window.windowHeight;
  var width = window.windowWidth;

  var eBG = document.getElementById('bg'+h);
  /////eBG.style.height = eBG.parentElement.clientHeight;




 
}


 

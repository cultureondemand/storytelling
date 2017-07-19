////////////////////////////////////
/////// set renderers


var rendererGLF = new THREE.WebGLRenderer();
rendererGLF.setSize( window.innerWidth, window.innerHeight );

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



    // updateFunctions are called while
    // in a particular section to update
    // the scroll progress in that section.
    // Most sections do not need to be updated
    // for all scrolling and so are set to
    // no-op functions.
    for(var i = 0; i < (numrows+1); i++) {
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
vis.setAttribute("style", "display:inline-block; ");



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


 
 ////////////////////////////////////////////
 ////////////////////////////////////////////
 ///////// VIDEO ELEMENT EXAMPLE     ////////
 ////////////////////////////////////////////
 
/*

var videoplay = document.getElementById('bgvid0');
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

bgvid0.onloadedmetadata = function() {
  var fileName = this.currentSrc.replace(/^.*[\\\/]/, '');
  document.querySelector('#big0');
};

*/

 ////////////////////////////////////////////
////////////////////////////////////////////
/////////////////////////////


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

function mousemovecircles(event) {






  sketch.append("custom:circle")
      .attr("x", event.clientX)
      .attr("y", event.clientY)
      .attr("radius", 0)
      .attr("strokeStyle", "#ffd200")
    .transition()
      .duration(666)
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
      window.addEventListener("resize", redraw, false);

 });
};



 document.addEventListener("mousemove", mousemovecircles, false);

 


  
 
 ////////////////////////////////////////////////
 /////////// remove custom interactive below




this.sceneGL = null;
this.cameraGL = null;
 this.containerGL = null;
document.removeEventListener("mousemove", this.onDocumentMouseMove, false);
cancelAnimationFrame(this.animateGL);
d3.select("#big1").select("canvas").remove();
 d3.select("#big1").select("context").remove();
this.mouseXo='';
this.mouseYo='';




  }

  /**
   *
   */
  function showTitle1() {

 
 
//////////////////////////////////////////////// 
 
////////////////////////////////////////////
////////// Video item to turn off
//////////
///////// var videoplay = document.getElementById('bgvid0');
///////// videoplay.setAttribute("style", "display:none; ");
///////////////////////////////////////////

/////////////////////////////////////////////////
///////// remove custom interactive above
document.removeEventListener("mousemove", this.mousemovecircles);
window.removeEventListener("resize", this.redraw, false);
 
 this.contextX = null;
 this.canvasX = null;
d3.select("#big0").select("canvas").remove();
d3.select("#big0").select("sketch").remove();


    contextX.fillStyle = 'black';
    contextX.fillRect(0, 0, width, height);



////////////////////////////////////////////
////////// Scroll prompt image turned off
var scrollimg = document.getElementById( 'scrollimg' );
scrollimg.setAttribute("style", "display:none; ");


////////////////////////////////////////////
////////// Spray flag image turned off
var flag = document.getElementById( 'flag' );
flag.setAttribute("style", "display:none; ");


/////////////////////////////////////////////
////////// drop in new custom interactive


      var mouseXo = 0, mouseYo = 0,

      windowHalfX = window.innerWidth / 2,
      windowHalfY = window.innerHeight / 2,

      SEPARATION = 200,
      AMOUNTX = 10,
      AMOUNTY = 10,

      cameraGL, sceneGL;

        var xcontainerGL,containerGL, separation = 100, amountX = 50, amountY = 50,
        particles, particle;

var containerGLlink ="big1";

      initGL();
      animateGL();



      function initGL() {


var rendererGL = new THREE.CanvasRenderer();
rendererGL.setPixelRatio( window.devicePixelRatio );
rendererGL.setSize( window.innerWidth, window.innerHeight );


      //  xcontainerGL = document.createElement('div');
      /// xcontainerGL.setAttribute("style", "display:block; position:absolute; width:100%; height:100%;margin:0; ");
      ///  document.body.appendChild(xcontainerGL);

        containerGL = document.getElementById( 'big1' );
       /////////////  document.body.containerGL.appendChild(containerGL);

        cameraGL = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 10000 );
        cameraGL.position.z = 100;

        sceneGL = new THREE.Scene();


containerGL.appendChild( rendererGLF.domElement );



        // particles

        var PI2 = Math.PI * 2;
        var material = new THREE.SpriteCanvasMaterial( {

          color: 0xffd200,
          program: function ( context ) {

            context.beginPath();
            context.arc( 0, 0, 0.5, 0, PI2, true );
            context.fill();

          }

        } );

        var geometry = new THREE.Geometry();

        for ( var i = 0; i < 100; i ++ ) {

          particle = new THREE.Sprite( material );
          particle.position.x = Math.random() * 2 - 1;
          particle.position.y = Math.random() * 2 - 1;
          particle.position.z = Math.random() * 2 - 1;
          particle.position.normalize();
          particle.position.multiplyScalar( Math.random() * 10 + 450 );
          particle.scale.x = particle.scale.y = 10;
          sceneGL.add( particle );

          geometry.vertices.push( particle.position );

        }

        // lines

        var line = new THREE.Line( geometry, new THREE.LineBasicMaterial( { color: 0xffffff, opacity: 0.5 } ) );
        sceneGL.add( line );



      }

      function onWindowResize() {

        windowHalfX = window.innerWidth / 2;
        windowHalfY = window.innerHeight / 2;

        cameraGL.aspect = window.innerWidth / window.innerHeight;
        cameraGL.updateProjectionMatrix();

        rendererGL.setSize( window.innerWidth, window.innerHeight );

      }

      //

      function onDocumentMouseMove(event) {

        mouseXo = event.clientX - windowHalfX;
        mouseYo = event.clientY - windowHalfY;

      }

      function onDocumentTouchStart( event ) {

        if ( event.touches.length > 1 ) {

          event.preventDefault();

          mouseXo = event.touches[ 0 ].pageX - windowHalfX;
          mouseYo = event.touches[ 0 ].pageY - windowHalfY;

        }

      }

      function onDocumentTouchMove( event ) {

        if ( event.touches.length == 1 ) {

          event.preventDefault();

          mouseXo = event.touches[ 0 ].pageX - windowHalfX;
          mouseYo = event.touches[ 0 ].pageY - windowHalfY;

        }

      }

      //

      function animateGL() {


        requestAnimationFrame( animateGL );
///////////////////////////////        renderGL();
 
        cameraGL.position.x += ( mouseXo - cameraGL.position.x ) * .05;
        cameraGL.position.y += ( - mouseYo + 200 - cameraGL.position.y ) * .05;
        cameraGL.lookAt( sceneGL.position );

        rendererGL.render( sceneGL, cameraGL );


      }

      function renderGL() {

      }



document.addEventListener( 'mousemove', onDocumentMouseMove, false );

     

////////////////////////////////////////////
////////// Remove SVG from below
d3.select("g.parent").selectAll("*").remove();
d3.select("#vis").select("svg").remove();

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


///////////////////////////////////////
/////// remove custom canvas from above
this.sceneGL = null;
this.cameraGL = null;
this.rendererGL = null;
this.containerGL = null;
document.removeEventListener("mousemove", this.onDocumentMouseMove);
window.cancelAnimationFrame(this.animateGL);
d3.select("#big1").select("canvas").remove();
d3.select("#big1").select("context").remove();
this.mouseXo='';
this.mouseYo='';

 
//////////////////////////////////////////////// 
//////////////////////////////////////////
///////////// remove interactive below
////////////////////////////////////////////
d3.select("g.parent").selectAll("*").remove();
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




 


 
 var containerGLX = d3.select('#vis')
  .append('svg')
        .attr("class", "network")
        .attr("opacity", "1")
     ///   .attr("viewBox", "0 0 1000 540")
   /////     .attr("preserveAspectRatio", "xMinYMin meet")

        .attr("width", width)
        .attr("height", height);




var forceX = d3.layout.force()
    .linkDistance(18)
         .theta(0.01)
  
        .gravity(0.01)   
    .charge(-1000)    
    .friction(0.8)   



     .size([width, height]);
 




 

var linkX = containerGLX.selectAll(".link"),
    nodeX = containerGLX.selectAll(".node");

d3.json("data/graph.json", function(error, json) {
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
      .attr("r", function(d) { return Math.sqrt(d.size) / 1.55 || 4.5; });





  nodeEnter.append("text")
      .attr("dy", ".35em")
      .style("fill", "#5e5e5e")


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
  return d._children ? "#ff0000" // collapsed package
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



  }



/////////////
//////////



  /**
   *
   */
  function showTitle3() {

////////////////////////////////////////////
////////// Remove SVG from above

d3.select("#vis").select("svg").remove();
d3.select("g.parent").selectAll("*").remove();

this.rootX = null;
this.nodesX = null;
this.forceX = null;
this.linkX = null;
this.containerGLX = null;

////////////////////////////////////////////
////////// Remove SVG from below


 

  
 ///////////////////////////////////////////
////////// Force directed US MAP

var width = window.innerWidth, height = window.innerHeight, rootX;




var path = d3.geo.path(),

    force = d3.layout.force().size([width, height]);

var svg = d3.select('#vis').append("svg")

    .attr("width", width)
    .attr("height", height);

d3.json("data/us.json", function(error, us) {
  if (error) throw error;

 
  var states = topojson.feature(us, us.objects.states),
      nodes = [],
      links = [];

  states.features.forEach(function(d, i) {
    if (d.id === 2 || d.id === 15 || d.id === 72) return; // lower 48
    var centroid = path.centroid(d);
    if (centroid.some(isNaN)) return;
    centroid.x = centroid[0];
    centroid.y = centroid[1];
    centroid.feature = d;
    nodes.push(centroid);
  });

  d3.geom.voronoi().links(nodes).forEach(function(link) {
    var dx = link.source.x - link.target.x,
        dy = link.source.y - link.target.y;
    link.distance = Math.sqrt(dx * dx + dy * dy);
    links.push(link);
  });

  force
      .gravity(.00001)
    ///  .charge(.001)
      .nodes(nodes)
      .links(links)
      .linkDistance(function(d) { return d.distance; })
      .start();

  var link = svg.selectAll("line")
      .data(links)
    .enter().append("line")
      .attr("x1", function(d) { return d.source.x; })
      .attr("y1", function(d) { return d.source.y; })
      .attr("x2", function(d) { return d.target.x; })
      .attr("y2", function(d) { return d.target.y; });

  var node = svg.selectAll("g")
      .data(nodes)
    .enter().append("g")
      .attr("transform", function(d) { return "translate(" + -d.x + "," + -d.y + ")"; })
      .call(force.drag)
    .append("path")
      .attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; })
      .attr("d", function(d) { return path(d.feature); });

  force.on("tick", function(d) {
    link.attr("x1", function(d) { return d.source.x; })
        .attr("y1", function(d) { return d.source.y; })
        .attr("x2", function(d) { return d.target.x; })
        .attr("y2", function(d) { return d.target.y; });

    node.attr("transform", function(d) {
      return "translate(" + d.x + "," + d.y + ")";
    });
  });
});




////////////////////////////////////////////
///// remove interactive below

 this.containerGLF = null;
this.rendererGLF = null;

this.sceneGLF = null;
window.removeEventListener("mousemove", this.onDocumentMouseMoveGLF, false);
cancelAnimationFrame(this.animateGLF);
this.animateGLF = undefined;

d3.select("#big4").select("canvas").remove();
this.cameraGLF = null;
this.geometryGLF = null;
this.materialGLF= null;
this.mouseX = null;
this.mouseY = null;
   }


///////
///////




  /**
   *
   *
   */
  function showTitle4() {
 


 ////////////////////////////////////////////
////////// Remove interactive from above
 ////////////////////////////////////////////
d3.select("g.parent").selectAll("*").remove();
 d3.select("#vis").select("svg").remove();
 
 
this.root = null;
this.node = null;
this.force = null;
this.link = null;
this.states = null;
this.path = null;


////////////////////////////////////////////
/////// D3 + 3JS globe



      var mouseX = 0, mouseY = 0,

      windowHalfX = window.innerWidth / 2,
      windowHalfY = window.innerHeight / 2,

      AMOUNTX = 50,
      AMOUNTY = 50,

      cameraGLF, sceneGLF;

        var containerGLF,cameraGLF, separation = 100, amountX = 50, amountY = 50,
        particles, particle;

 
  initGLF();


      animateGLF();

      function initGLF() {

        containerGLF = document.getElementById( 'big4' );



      /// containerGLF = document.createElement('div');
      /////// document.body.appendChild(containerGLF);

        cameraGLF = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 10000 );
        cameraGLF.position.z = 600;

        sceneGLF = new THREE.Scene();

containerGLF.appendChild( rendererGLF.domElement );


        // particles
   
 


var geometryGLF = new THREE.SphereGeometry(2666, 25, 15);  

var uniforms = {  
  texture: { type: 't', value: new THREE.TextureLoader().load( "images/0ancient_stardust.jpg") }
};

var materialGLF = new THREE.ShaderMaterial( {  
  uniforms:       uniforms,
  vertexShader:   document.getElementById('sky-vertex').textContent,
  fragmentShader: document.getElementById('sky-fragment').textContent
});

var skyBox = new THREE.Mesh(geometryGLF, materialGLF);  
skyBox.scale.set(-1, 1, 1); 
skyBox.rotation.y = -2.3;
 
sceneGLF.add(skyBox);







        window.addEventListener( 'mousemove', onDocumentMouseMoveGLF, false );
        window.addEventListener( 'resize', onWindowResizeGLF, false );
      ///// document.addEventListener( 'touchstart', onDocumentTouchStartGLF, false );
      ////  document.addEventListener( 'touchmove', onDocumentTouchMoveGLF, false );

        //


      }

       
    
function onWindowResizeGLF() {

        windowHalfX = window.innerWidth / 2;
        windowHalfY = window.innerHeight / 2;

        cameraGLF.aspect = window.innerWidth / window.innerHeight;
        cameraGLF.updateProjectionMatrix();

        this.rendererGLF.setSize( window.innerWidth, window.innerHeight );

      }

      //

      function onDocumentMouseMoveGLF(event) {

        mouseX = event.clientX - windowHalfX;
        mouseY = event.clientY - windowHalfY;

      }

      function onDocumentTouchStartGLF( event ) {

        if ( event.touches.length > 1 ) {

          event.preventDefault();

          mouseX = event.touches[ 0 ].pageX - windowHalfX;
          mouseY = event.touches[ 0 ].pageY - windowHalfY;

        }

      }

      function onDocumentTouchMoveGLF( event ) {

        if ( event.touches.length == 1 ) {

          event.preventDefault();

          mouseX = event.touches[ 0 ].pageX - windowHalfX;
          mouseY = event.touches[ 0 ].pageY - windowHalfY;

        }

      }

      //

        //

      function animateGLF() {

        requestAnimationFrame( animateGLF );

  ////////////////////////      renderGLF();

        cameraGLF.position.x += ( mouseX - cameraGLF.position.x ) * .05;
        cameraGLF.position.y += ( - mouseY + 200 - cameraGLF.position.y ) * .05;
        cameraGLF.lookAt( sceneGLF.position );

        rendererGLF.render( sceneGLF, cameraGLF );

      }

      function renderGLF() {
 
      }







  }





/////
////////


  /**
   *
   */
  function showTitle5() {
  

//////////////////////////////////////////

////////////////////////////////////////////
///// remove interactive below


this.sceneGLF = null;
this.containerGLF = null;
this.rendererGLF = null;
window.removeEventListener("mousemove", this.onDocumentMouseMoveGLF, false);
window.cancelAnimationFrame(this.animateGLF);
this.animateGLF = undefined;

d3.select("#big4").select("canvas").remove();
this.cameraGLF = null;
this.geometryGLF = null;
this.materialGLF= null;
this.mouseX = null;
this.mouseY = null;


/////////// mapping network molecule style

var width = window.innerWidth,
      height = window.innerHeight,
    rootX;

 
 





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


 

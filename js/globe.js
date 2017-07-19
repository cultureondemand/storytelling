
var width = window.innerWidth,
    height = window.innerHeight;



var proj = d3.geo.orthographic()
    .scale(220)
    .translate([width / 2, height / 2])
    .clipAngle(90);


var path = d3.geo.path().projection(proj).pointRadius(1.5);

var graticule = d3.geo.graticule();

var svgGLH = d3.select("#containerGLH").append("svg")
            .attr("width", width)
            .attr("height", height)
                .on("mousemove", mousemoveGLH)
    .on("mouseup", mouseupGLH)

            .on("mousedown", mousedownGLH);

            

queue()
    .defer(d3.json, "world-110m.json")
    .defer(d3.json, "places.json")
    .await(ready);

function ready(error, world, places) {
  var ocean_fill = svgGLH.append("defs").append("radialGradient")
          .attr("id", "ocean_fill")
          .attr("cx", "75%")
          .attr("cy", "25%");
      ocean_fill.append("stop").attr("offset", "5%").attr("stop-color", "#e3e3e3");
      ocean_fill.append("stop").attr("offset", "100%").attr("stop-color", "#555");

  var globe_highlight = svgGLH.append("defs").append("radialGradient")
        .attr("id", "globe_highlight")
        .attr("cx", "75%")
        .attr("cy", "25%");
      globe_highlight.append("stop")
        .attr("offset", "5%").attr("stop-color", "#ffd")
        .attr("stop-opacity","0.6");
      globe_highlight.append("stop")
        .attr("offset", "100%").attr("stop-color", "#ba9")
        .attr("stop-opacity","0.2");

  var globe_shading = svgGLH.append("defs").append("radialGradient")
        .attr("id", "globe_shading")
        .attr("cx", "50%")
        .attr("cy", "40%");
      globe_shading.append("stop")
        .attr("offset","50%").attr("stop-color", "#9ab")
        .attr("stop-opacity","0")
      globe_shading.append("stop")
        .attr("offset","100%").attr("stop-color", "#3e6184")
        .attr("stop-opacity","0.3")

  var drop_shadow = svgGLH.append("defs").append("radialGradient")
        .attr("id", "drop_shadow")
        .attr("cx", "50%")
        .attr("cy", "50%");
      drop_shadow.append("stop")
        .attr("offset","20%").attr("stop-color", "#000")
        .attr("stop-opacity",".5")
      drop_shadow.append("stop")
        .attr("offset","100%").attr("stop-color", "#000")
        .attr("stop-opacity","0")  

    svgGLH.append("ellipse")
        .attr("cx", 440).attr("cy", 450)
        .attr("rx", proj.scale()*.90)
        .attr("ry", proj.scale()*.25)
        .attr("class", "noclicks")
        .style("fill", "url(#drop_shadow)");

    svgGLH.append("circle")
        .attr("cx", width / 2).attr("cy", height / 2)
        .attr("r", proj.scale())
        .attr("class", "noclicks")
        .style("fill", "url(#ocean_fill)");
    
    svgGLH.append("path")
        .datum(topojson.object(world, world.objects.land))
        .attr("class", "land")
        .attr("d", path);

    svgGLH.append("path")
        .datum(graticule)
        .attr("class", "graticule noclicks")
        .attr("d", path);

    svgGLH.append("circle")
        .attr("cx", width / 2).attr("cy", height / 2)
        .attr("r", proj.scale())
        .attr("class","noclicks")
        .style("fill", "url(#globe_highlight)");

    svgGLH.append("circle")
        .attr("cx", width / 2).attr("cy", height / 2)
        .attr("r", proj.scale())
        .attr("class","noclicks")
        .style("fill", "url(#globe_shading)");

    svgGLH.append("g").attr("class","points")
        .selectAll("text").data(places.features)
      .enter().append("path")
        .attr("class", "point")
        .attr("d", path);

    svgGLH.append("g").attr("class","labels")
        .selectAll("text").data(places.features)
      .enter().append("text")
      .attr("class", "label")
      .text(function(d) { return d.properties.name })

    // uncomment for hover-able country outlines

    // svgGLH.append("g").attr("class","countries")
    //   .selectAll("path")
    //     .data(topojson.object(world, world.objects.countries).geometries)
    //   .enter().append("path")
    //     .attr("d", path); 

    position_labels();
}


function position_labels() {
  var centerPos = proj.invert([width/2,height/2]);

  var arc = d3.geo.greatArc();

  svgGLH.selectAll(".label")
    .attr("text-anchor",function(d) {
      var x = proj(d.geometry.coordinates)[0];
      return x < width/2-20 ? "end" :
             x < width/2+20 ? "middle" :
             "start"
    })
    .attr("transform", function(d) {
      var loc = proj(d.geometry.coordinates),
        x = loc[0],
        y = loc[1];
      var offset = x < width/2 ? -5 : 5;
      return "translate(" + (x+offset) + "," + (y-2) + ")"
    })
    .style("display",function(d) {
      var d = arc.distance({source: d.geometry.coordinates, target: centerPos});
      return (d > 1.57) ? 'none' : 'inline';
    })
    
}

// modified from http://bl.ocks.org/1392560
var m0, o0;
function mousedownGLH() {
  m0 = [d3.event.pageX, d3.event.pageY];
  o0 = proj.rotate();
  d3.event.preventDefault();
  
}
function mousemoveGLH() {
  if (m0) {
    var m1 = [d3.event.pageX, d3.event.pageY]
      , o1 = [o0[0] + (m1[0] - m0[0]) / 6, o0[1] + (m0[1] - m1[1]) / 6];
    o1[1] = o1[1] > 30  ? 30  :
            o1[1] < -30 ? -30 :
            o1[1];
    proj.rotate(o1);
    refresh();
  }
}
function mouseupGLH() {
  if (m0) {
    mousemoveGLH();
    m0 = null;
  }
}

function refresh() {
  svgGLH.selectAll(".land").attr("d", path);
  svgGLH.selectAll(".countries path").attr("d", path);
  svgGLH.selectAll(".graticule").attr("d", path);
  svgGLH.selectAll(".point").attr("d", path);
  position_labels();
}

 
 
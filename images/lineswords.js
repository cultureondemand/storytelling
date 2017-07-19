
			var mouseX = 0, mouseY = 0,

			windowHalfX = window.innerWidth / 2,
			windowHalfY = window.innerHeight / 2,

			SEPARATION = 200,
			AMOUNTX = 10,
			AMOUNTY = 10,

			cameraGL, sceneGL, rendererGL, controlsGL;

				var xcontainerGL,containerGL, separation = 100, amountX = 50, amountY = 50,
				particles, particle;


var containerGLW,canvasW,canvasGL;
var scatterPlot;

var words = [
  'service 1', 'service 1', 'of', 'dynamically building',
  'a texture atlas', 'to', 'render', 'unique sprites', 'and share',
  'as much', 'GPU memory', 'as possible!'
];


// Do need a canvas to determine the text size
 // but its size doesn't matter at all, so save some memory:

// Settings for the text we're creating:
var fontStyle = "Bold 90px 'Segoe UI', 'Lucida Grande', 'Tahoma', 'Calibri', 'Roboto', sans-serif";
// A bit of space around the text to try to avoid hitting the edges:
var xPadding = 15;
var yPadding = 5;
// Shift the text rendering up or down:
var yOffset = -5;
var size;
//////var meshW = buildSprites(words);

var spriteWW;
var group;
var containerGLlink ="big1";
var heightW, widthW;

 var containerGLW = document.getElementById('container1');
var canvasW = document.createElement('canvas');
canvasW.width = canvasW.height = 1;

/////canvasGLH.id = 'GLH'; 
 containerGLW.appendChild(canvasW);

var spriteMap = new THREE.TextureLoader().load( "images/3spotstrategy.png" );
var spriteMaterial = new THREE.SpriteMaterial( { map: spriteMap, color: 0xffffff } );

      initGL();

    ///////  animateGL();


			function initGL() {


console.log('lines');

			//	xcontainerGL = document.createElement('div');
			///	xcontainerGL.setAttribute("style", "display:block; position:absolute; width:100%; height:100%;margin:0; ");
			///	 document.body.appendChild(xcontainerGL);




////////////	var containerGL = document.getElementById( 'big1' );
/////////////	document.body.containerGL.appendChild(containerGL);
 
        size = size || 96;
  





 containerGL = document.getElementById('big1');
/////////////////////     var canvasGLH = document.getElementById('GLH');
//canvasGL = document.createElement('canvas');
/////canvasGLH.id = 'GLH'; 
///containerGL.appendChild(canvasGL);

   




				cameraGL = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 10000 );
				cameraGL.position.z = 100;

				sceneGL = new THREE.Scene();

				rendererGL = new THREE.CanvasRenderer();
			///////////	rendererGL.setPixelRatio( window.devicePixelRatio );
				rendererGL.setSize( window.innerWidth, window.innerHeight );
				containerGL.appendChild( rendererGL.domElement );


////
////

////
////
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
group = new THREE.Object3D();
sceneGL.add(group);

  /////  scatterPlot.rotation.y = 0;

function v(x, y, z) {
return new THREE.Vector3(x, y, z);
    }

var unfiltered = [],
    lowPass = [],
    highPass = [];
        
       
// For convenience I'm grouping all the sprites together
/// var group = new THREE.Group();
////			sceneGL.add( group );

// For each word, make a sprite, and put it in the group
  words.forEach(function(text) {
// Calculate the width of the text
///  var widthW = widthOfText(text) + xPadding;
// You base this height on your font size (may take some fiddling)
////  var heightW = 120 + yPadding;


 
////	 	for ( var i = 0; i < 30; i ++ ) {


					particle = new THREE.Sprite( material );
					particle.position.x = Math.random() * 2 - 1;
					particle.position.y = Math.random() * 2 - 1;
					particle.position.z = Math.random() * 2 - 1;
					particle.position.normalize();
					particle.position.multiplyScalar( Math.random() * 10 + 450 );
					particle.scale.x = particle.scale.y = 33;
					group.add( particle );


//// canvas contents will be used for a texture
////	var texture = new THREE.Texture(canvasW) 
////	texture.needsUpdate = true;

/////	var spriteMaterial = new THREE.SpriteMaterial( 
////		{ map: texture } );

var spriteW = new THREE.Sprite( spriteMaterial );
spriteW.position.set(particle.position.x, particle.position.y+10, particle.position.z);

//////	spriteW.scale.set(100,50,1.0);
spriteW.scale.x = spriteW.scale.y =1;
scene.add( spriteW );

 

 

 
 

					geometry.vertices.push( particle.position );
					geometry.vertices.push( spriteW.position );

			/////	}

				// lines

				var line = new THREE.Line( geometry, new THREE.LineBasicMaterial( { color: 0xffffff, opacity: 0.5 } ) );
				sceneGL.add( line );
console.log(spriteMaterial);
console.log(spriteW.position);
console.log(particle.position);
console.log(spriteW);
 

  });


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

				mouseX = event.clientX - windowHalfX;
				mouseY = event.clientY - windowHalfY;
 
			}
	
			//

			function onDocumentMouseMoveB(event) {

				mouseX = (event.clientX - windowHalfX)/2.3;
				mouseY = (event.clientY - windowHalfY)*2.2;
 
			}

			function onDocumentTouchStart( event ) {

				if ( event.touches.length > 0 ) {

					event.preventDefault();

					mouseX = event.touches[ 0 ].pageX - windowHalfX;
					mouseY = event.touches[ 0 ].pageY - windowHalfY;

				}

			}

	
 
			function onDocumentTouchMove( event ) {

				if ( event.touches.length == 1 ) {

					event.preventDefault();

					mouseX = event.touches[ 0 ].pageX - windowHalfX;
					mouseY = event.touches[ 0 ].pageY - windowHalfY;

				}

			}

			//


			function renderGL() {

			

			}
			
			
			
			
		
function makeTextSprite( text, parameters )
{
	if ( parameters === undefined ) parameters = {};
	
	var fontface = parameters.hasOwnProperty("fontface") ? 
		parameters["fontface"] : "HelveticaNeue";
	
	var fontsize = parameters.hasOwnProperty("fontsize") ? 
		parameters["fontsize"] : 24;
	
	var borderThickness = parameters.hasOwnProperty("borderThickness") ? 
		parameters["borderThickness"] : 1;
	
	var borderColor = parameters.hasOwnProperty("borderColor") ?
		parameters["borderColor"] : { r:33, g:66, b:99, a:1.0 };
	
	var backgroundColor = parameters.hasOwnProperty("backgroundColor") ?
		parameters["backgroundColor"] : { r:255, g:255, b:255, a:1.0 };

//////	var spriteAlignment = THREE.SpriteAlignment.topLeft;
		
 	var contextW = canvasW.getContext('2d');
	contextW.font = "Bold " + fontsize + "px " + fontface;
    
	// get size data (height depends only on font size)
	var metrics = contextW.measureText( text );
	var textWidth = metrics.width;
	
	// background color
	contextW.fillStyle   = "rgba(" + backgroundColor.r + "," + backgroundColor.g + ","
								  + backgroundColor.b + "," + backgroundColor.a + ")";
	// border color
	contextW.strokeStyle = "rgba(" + borderColor.r + "," + borderColor.g + ","
								  + borderColor.b + "," + borderColor.a + ")";

	contextW.lineWidth = borderThickness;
	//////////roundRect(context, borderThickness/2, borderThickness/2, textWidth + borderThickness, fontsize * 1.4 + borderThickness, 6);
	// 1.4 is extra height factor for text below baseline: g,j,p,q.
	
	// text color
	contextW.fillStyle = "rgba(0, 0, 0, 1.0)";

	contextW.fillText( text, borderThickness, fontsize + borderThickness);


	console.log(fontface);
	console.log(fontsize);
	console.log(metrics);
	console.log(textWidth);
	


	
	// canvas contents will be used for a texture
	var texture = new THREE.Texture(canvasW) 
	texture.needsUpdate = true;

	var spriteMaterial = new THREE.SpriteMaterial( 
		{ map: texture } );
	var spriteW = new THREE.Sprite( spriteMaterial );
	spriteW.scale.set(100,50,1.0);
	return spriteW;	
	

}
	
			
 


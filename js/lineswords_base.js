
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
  




containerGLW = document.getElementById('big1');
/////////////////////     var canvasGLH = document.getElementById('GLH');
canvasW = document.createElement('canvas');
canvasW.width = canvasW.height = 1;
/////canvasGLH.id = 'GLH'; 
containerGLW.appendChild(canvasW);

containerGL = document.getElementById('big1');
/////////////////////     var canvasGLH = document.getElementById('GLH');
canvasGL = document.createElement('canvas');
/////canvasGLH.id = 'GLH'; 
containerGL.appendChild(canvasGL);

   




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
        
        
        

  var textureManager = new window.threeSpriteAtlasTextureManager(1024);

  // If set to true it makes the sprite allocation code render some blue,
  // purple and green borders in the nodes (this helps visualisation).
  textureManager.debug = false;

  // For convenience I'm grouping all the sprites together
 /// var group = new THREE.Group();
	////			sceneGL.add( group );

  // For each word, make a sprite, and put it in the group
  words.forEach(function(text) {
    // Calculate the width of the text
    var width = widthOfText(text) + xPadding;
    // You base this height on your font size (may take some fiddling)
    var height = 120 + yPadding;

    // Allocate a node for the text and draw the contents
    var node = textureManager.allocate(width, height);
    var contextW = node.clipContext();
    contextW.font = fontStyle;
    contextW.textAlign = 'center';
    contextW.textBaseline = 'middle';
    contextW.fillStyle = 'rgb( ' + Math.floor(Math.random() * 155 + 100) + ', ' + Math.floor(Math.random() * 155 + 100) + ', ' + Math.floor(Math.random() * 155 + 100) + ' )';
    contextW.fillText(text, 0, yOffset);
    node.restoreContext();

    // The node is built, now make a Sprite out of it
    var aspectRatio = node.width / node.height;

    var materialW = new THREE.SpriteMaterial({
      map: node.texture,
      transparent: true,
      blending: THREE.AdditiveBlending

  
  });

		////	 	for ( var i = 0; i < 30; i ++ ) {





					particle = new THREE.Sprite( material );
					particle.position.x = Math.random() * 2 - 1;
					particle.position.y = Math.random() * 2 - 1;
					particle.position.z = Math.random() * 2 - 1;
					particle.position.normalize();
					particle.position.multiplyScalar( Math.random() * 10 + 450 );
					particle.scale.x = particle.scale.y = 33;
					sceneGL.add( particle );



    spriteWW = new THREE.Sprite(materialW);
    spriteWW.name = "Label: " + text;

    spriteWW.position.set(particle.position.x, particle.position.y, particle.position.z);
					spriteWW.position.normalize();
					spriteWW.position.multiplyScalar( Math.random() * 10 + 450 );
     spriteWW.scale.set(125 * aspectRatio, 125, 1);
   sceneGL.add(spriteWW);

					geometry.vertices.push( particle.position );
					geometry.vertices.push( spriteWW.position );

			/////	}

				// lines

				var line = new THREE.Line( geometry, new THREE.LineBasicMaterial( { color: 0xffffff, opacity: 0.5 } ) );
				sceneGL.add( line );
console.log(text);
console.log(spriteWW.position);


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
			
			
			
			
			
			
		

// Helper: determine the width required to render the given text. You'll want
// to use the same (relevant) settings as you use when rendering the text,
// particularly the fontStyle.
function widthOfText(text) {
  var contextWW = canvasW.getContext('2d');
  contextWW.font = fontStyle;
  return (Math.floor(contextWW.measureText(text).width));
}




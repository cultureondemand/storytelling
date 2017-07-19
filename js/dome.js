
			var mouseX = 0, mouseY = 0,

			windowHalfX = window.innerWidth / 2,
			windowHalfY = window.innerHeight / 2,

 			AMOUNTX = 50,
			AMOUNTY = 50,

			cameraGLF, sceneGLF, rendererGLF;

				var containerGLF,rendererGLF,cameraGLF, separation = 100, amountX = 50, amountY = 50,
				particles, particle;

 

			function initGLF() {

			  containerGLF = document.getElementById( 'containerGLF' );



			///	containerGLF = document.createElement('div');
			///////	document.body.appendChild(containerGLF);

				cameraGLF = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 10000 );
				cameraGLF.position.z = 600;

				sceneGLF = new THREE.Scene();


             

				rendererGLF = new THREE.WebGLRenderer({antialias:true, preserveDrawingBuffer:true });
 				rendererGLF.setSize( window.innerWidth, window.innerHeight );
				containerGLF.appendChild( rendererGLF.domElement );

				// particles
   
 


var geometryGLF = new THREE.SphereGeometry(8000, 25, 15);  
var uniforms = {  
  texture: { type: 't', value: new THREE.TextureLoader().load( "ancient_stardust2.jpg") }
};

var materialGLF = new THREE.ShaderMaterial( {  
  uniforms:       uniforms,
  vertexShader:   document.getElementById('sky-vertex').textContent,
  fragmentShader: document.getElementById('sky-fragment').textContent
});

var skyBox = new THREE.Mesh(geometryGLF, materialGLF);  
skyBox.scale.set(-1, 1, 1);  
skyBox.renderDepth = 1000.0;  
sceneGLF.add(skyBox);









			///// document.addEventListener( 'touchstart', onDocumentTouchStartGLF, false );
			////	document.addEventListener( 'touchmove', onDocumentTouchMoveGLF, false );

				//


			}

			 
		
function onWindowResizeGLF() {

				windowHalfX = window.innerWidth / 2;
				windowHalfY = window.innerHeight / 2;

				cameraGLF.aspect = window.innerWidth / window.innerHeight;
				cameraGLF.updateProjectionMatrix();

				rendererGLF.setSize( window.innerWidth, window.innerHeight );

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

				renderGLF();

			}

			function renderGLF() {

				cameraGLF.position.x += ( mouseX - cameraGLF.position.x ) * .05;
				cameraGLF.position.y += ( - mouseY + 200 - cameraGLF.position.y ) * .05;
				cameraGLF.lookAt( sceneGL.position );

				rendererGLF.render( sceneGLF, cameraGLF );

			}





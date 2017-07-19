
			var mouseX = 0, mouseY = 0,

			windowHalfX = window.innerWidth / 2,
			windowHalfY = window.innerHeight / 2,

			SEPARATION = 200,
			AMOUNTX = 10,
			AMOUNTY = 10,

			cameraGL, sceneGL, rendererGL, controlsGL;

				var xcontainerGL,containerGL, separation = 100, amountX = 50, amountY = 50,
				particles, particle;

var containerGLlink ="big1";

      initGL();

    ///////  animateGL();


			function initGL() {


console.log('lines');

			//	xcontainerGL = document.createElement('div');
			///	xcontainerGL.setAttribute("style", "display:block; position:absolute; width:100%; height:100%;margin:0; ");
			///	 document.body.appendChild(xcontainerGL);




			 var containerGL = document.getElementById( 'big1' );
			 /////////////	document.body.containerGL.appendChild(containerGL);






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

				for ( var i = 0; i < 30; i ++ ) {

					particle = new THREE.Sprite( material );
					particle.position.x = Math.random() * 2 - 1;
					particle.position.y = Math.random() * 2 - 1;
					particle.position.z = Math.random() * 2 - 1;
					particle.position.normalize();
					particle.position.multiplyScalar( Math.random() * 10 + 450 );
					particle.scale.x = particle.scale.y = 33;
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
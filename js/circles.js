
			var containerGGL, stats;
			var camera, scene, renderer;

			var raycaster;
			var mouseGGL;

			var PI2 = Math.PI * 2;



			var clientX = 0, clientY = 0,

			windowHalfX = window.innerWidth / 2,
			windowHalfY = window.innerHeight / 2;





			var programFill = function ( context ) {

				context.beginPath();
				context.arc( 0, 0, 0.5, 0, PI2, true );
				context.fill();

			};

			var programStroke = function ( context ) {

				context.lineWidth = 0.025;
				context.beginPath();
				context.arc( 0, 0, 0.5, 0, PI2, true );
				context.stroke();

			};

			var INTERSECTED;

      init();
      animate();

			function init() {

			//////////	containerGGL = document.createElement( 'div' );
			/////////	containerGGL.setAttribute("style", "display:block; position:absolute; width:100%; height:100%;margin:0; ");
			///////// 	document.body.appendChild( containerGGL );





				containerGGL = document.getElementById( 'containerGGL' );







				camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 1, 10000 );
				camera.position.set( 0, 300, 500 );

				scene = new THREE.Scene();

				for ( var i = 0; i < 100; i ++ ) {

					var particle = new THREE.Sprite( new THREE.SpriteCanvasMaterial( { color: Math.random() * 0x808080 + 0x808080, program: programStroke } ) );
					particle.position.x = Math.random() * 800 - 400;
					particle.position.y = Math.random() * 800 - 400;
					particle.position.z = Math.random() * 800 - 400;
					particle.scale.x = particle.scale.y = Math.random() * 20 + 20;
					scene.add( particle );

				}
				
				//
				
				raycaster = new THREE.Raycaster();
				mouseGGL = new THREE.Vector2();

				renderer = new THREE.CanvasRenderer();
				renderer.setClearColor( 0xf0f0f0 );
				renderer.setPixelRatio( window.devicePixelRatio );
				renderer.setSize( window.innerWidth, window.innerHeight );
				containerGGL.appendChild( renderer.domElement );

				////stats = new Stats();
				/////container.appendChild( stats.dom );

			}

			function onWindowResize() {

				camera.aspect = window.innerWidth / window.innerHeight;
				camera.updateProjectionMatrix();

				renderer.setSize( window.innerWidth, window.innerHeight );

			}

			function onDocumentMouseMove( event ) {

				event.preventDefault();

				mouseGGL.x = ( event.clientX / window.innerWidth ) * 2 - 1;
				mouseGGL.y = - ( event.clientY / window.innerHeight ) * 2 + 1;

			}

			//

			function animate() {

				requestAnimationFrame( animate );

				render();
			///////	stats.update();

			}

			var radius = 600;
			var theta = 0;

			function render() {

				// rotate camera

				theta += 0.1;




				camera.position.x += ( mouseGGL.x - camera.position.x ) * radius * Math.sin( THREE.Math.degToRad( theta ) );
				camera.position.y += ( - mouseGGL.y - camera.position.y ) * radius * Math.sin( THREE.Math.degToRad( theta ) );


				camera.position.x = radius * Math.sin( THREE.Math.degToRad( theta ) );
				camera.position.y = radius * Math.sin( THREE.Math.degToRad( theta ) );





				camera.position.z = radius * Math.cos( THREE.Math.degToRad( theta ) );
				camera.lookAt( scene.position );

				camera.updateMatrixWorld();

				// find intersections

				raycaster.setFromCamera( mouseGGL, camera );

				var intersects = raycaster.intersectObjects( scene.children );

				if ( intersects.length > 0 ) {

					if ( INTERSECTED != intersects[ 0 ].object ) {

						if ( INTERSECTED ) INTERSECTED.material.program = programStroke;

						INTERSECTED = intersects[ 0 ].object;
						INTERSECTED.material.program = programFill;

					}

				} else {

					if ( INTERSECTED ) INTERSECTED.material.program = programStroke;

					INTERSECTED = null;

				}

				renderer.render( scene, camera );

			}

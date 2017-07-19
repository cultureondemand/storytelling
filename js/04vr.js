

      var mouseX = 0, mouseY = 0,

      windowHalfX = window.innerWidth / 2,
      windowHalfY = window.innerHeight / 2,

      AMOUNTX = 50,
      AMOUNTY = 50,

      cameraGLF, sceneGLF, rendererGLF;

        var containerGLF,cameraGLF, separation = 100, amountX = 50, amountY = 50,
        particles, particle;

 
  initGLF();



      function initGLF() {

        containerGLF = document.getElementById( 'big4' );

console.log('snowglobe');


      /// containerGLF = document.createElement('div');
      /////// document.body.appendChild(containerGLF);

        cameraGLF = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 10000 );
        cameraGLF.position.z = 366;

        sceneGLF = new THREE.Scene();
  sceneGLF.fog = new THREE.Fog( 0x000000, 3300, 6300 );

        rendererGLF = new THREE.WebGLRenderer({antialias:true });
rendererGLF.setSize( window.innerWidth, window.innerHeight );

containerGLF.appendChild( rendererGLF.domElement );


        // particles
   
 


var skyTex = new THREE.TextureLoader().load( "images/0ancient_stardust.jpg");

 var geometryGLF = new THREE.SphereGeometry( 3666, 25, 25 );
 geometryGLF.applyMatrix( new THREE.Matrix4().makeScale( -1, 1, 1 ) );




var materialGLF = new THREE.MeshBasicMaterial( {
  map: skyTex,
 ///////   map: new THREE.TextureLoader().load( "/stories/grand/grand1.jpg" ),
  color: 0xffffff,
  side: THREE.DoubleSide
 } );

var skyBox = new THREE.Mesh(geometryGLF, materialGLF);  
skyBox.scale.set(-1, 1, 1); 
skyBox.rotation.y = 1.3;
 
sceneGLF.add(skyBox);









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

      function onDocumentMouseMoveGLFB(event) {

        mouseX = (event.clientX - windowHalfX)*1.6;
        mouseY = (event.clientY - windowHalfY)*3.1;
 
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

     

      function renderGLF() {
 
      }




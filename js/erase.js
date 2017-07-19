// forked from hyperdash's "forked: Painting" http://jsdo.it/hyperdash/gohv
// forked from akm2's "Painting" http://jsdo.it/akm2/9ZMq
// forked from akm2's "Shodou" http://jsdo.it/akm2/9ClT
/**
 * Using Point class
 * @see http://jsdo.it/akm2/fhMC
 */

var EX_URL = 'SprayDots.png';

var DEFAULT_BRUSH_SIZE = 30; // 筆のデフォルトサイズ
var MAX_BRUSH_SIZE = 50; // 筆のサイズの最大値
var MIN_BRUSH_SIZE = 5; // 筆のサイズ最小値
var INK_AMOUNT = 6; // インクの量, 少ないほどかすれやくなる
var SPLASH_RANGE = 75; // 飛沫が飛ぶ最大範囲
var SPLASH_INK_SIZE = 6; // 飛沫の最大サイズ

var hsla = {
    h: 0,
    s: 80,
    l: 50,
    a: 1,
    toString: function() {
        return 'hsla(' + this.h + ', ' + this.s + '%, ' + this.l + '%, ' + this.a + ')';
    }
};

var width = window.innerWidth,
    height = window.innerHeight;

var canvasWidth = window.innerWidth,
    canvasHeight = window.innerHeight;

var canvasBG;
var ctxBG;
 var ctxBG, containerGLB;

var mouse = new Point();
var isMouseDown = false;
var brush;
var $display;
var move=0;

function init() {

//////containerGLB = document.getElementById( 'big0' );
///////canvas = document.createElement('canvas');



 canvasBG = document.getElementById('cbg');
 ctxBG = canvasBG.getContext('2d');
var img = document.createElement('IMG');
img.onload = function () {
    ctxBG.beginPath();
    ctxBG.drawImage(img, 0, 0);
    ctxBG.closePath();    
    ctxBG.globalCompositeOperation = 'destination-out';    
}
img.src = "https://cultureondemand.com/stories/3./scrollydeck/3.jpg";
    
//////containerGLB.appendChild(canvasBG)



    window.addEventListener('resize', resize, false);
    resize();


 //// var grd = ctxBG.createRadialGradient(p.x, p.y, 0, p.x, p.y, 50);
 ///   grd.addColorStop(0, "rgba(255,255,255,.6)"); 
 ///   grd.addColorStop(1, "transparent"); 
 ////   ctxBG.fillStyle = grd;

  ////  ctxBG.fillStyle = 'black';
    ctxBG.fillRect(0, 0, canvasWidth, canvasHeight);

/////    $display = document.getElementById('display');
/////    $display.innerHTML = 'Brush size: ' + DEFAULT_BRUSH_SIZE;
    
    brush = new Brush(canvasWidth / 2, canvasHeight / 2, DEFAULT_BRUSH_SIZE, INK_AMOUNT, SPLASH_RANGE, SPLASH_INK_SIZE);
    
  
  ////////////// document.addEventListener('keydown', keyDown, false);

        setInterval(loop, 1000 / 60);
       /////  exsample.src = EX_URL;
}

function resize(e) {
    canvasWidth = canvasBG.width = window.innerWidth;
    canvasHeight = canvasBG.height = window.innerHeight;
    ctxBG = canvasBG.getContext('2d');
}

function mouseMoveP(e) {
move=move+1;
if (move < 2) { pulse(); };
    mouse.set(e.clientX, e.clientY);
}

function mouseDownP(e) {
    brush.resetTip();
    isMouseDown = true;
}

function mouseUpP(e) {
    isMouseDown = false;
    hsla.h += 30;
}

function dobuleClickP(e) {
    ctxBG.fillStyle = grd;
    ctxBG.fillRect(0, 0, canvasWidth, canvasHeight);
}

 
function loop() {
    brush.update(mouse);
    if (isMouseDown) brush.draw(ctxBG);
}

 
 
function pulse() {
    brush.update(mouse);

    mouse.set((canvasWidth/2)+6, (canvasHeight/2)+6);
    brush.draw(ctxBG);
     move=2;
     
}

 
 


(function(window) {    
   
   
    /**
     * Brush
     */
    function Brush(x, y, size, inkAmount, splashRange, splashInkSize) {
        Point.call(this, x, y);
        this.size = size;
        this.inkAmount = inkAmount;
        this.splashRange = splashRange;
        this.splashInkSize = splashInkSize;
        
        this.resetTip();

        this._latest = null;
        this._latestStrokeLength = 0;
    }

    Brush.prototype = extend({}, Point.prototype, {
        _hairs: null,
        
        // Override Point set method
        set: function(x, y) {
            if (!this._latest) {
                this._latest = new Point(x, y);
            } else {
                this._latest.set(this);
            }
            Point.prototype.set.call(this, x, y);
        },
        
        resetTip: function() {
            var hairs = this._hairs = [];
            var inkAmount = this.inkAmount;
            var hairNum = this.size * 2;
            
            var range = this.size / 2;
            var rx, ry, c0, x0, y0;
            var c = random(Math.PI * 2), cv, sv, x, y;
            
            for (var i = 0, r; i < hairNum; i++) {
                rx = random(range);
                ry = rx / 2;
                c0 = random(Math.PI * 2);
                x0 = rx * Math.sin(c0);
                y0 = ry * Math.cos(c0);
                cv = Math.cos(c);
                sv = Math.sin(c);
                x = this.x + x0 * cv - y0 * sv;
                y = this.y + x0 * sv + y0 * cv;
                hairs[i] = new Hair(x, y, 10, inkAmount);
            }
        },
        
        update: function(p) {
            this.set(p);
            
            var stroke = this.subtract(this._latest);
            var hairs = this._hairs;
            for (var i = 0, len = hairs.length; i < len; i++) {
                hairs[i].update(stroke);
            }
            
            this._latestStrokeLength = stroke.length();
        },

        draw: function(ctxBG) {
            var hairs = this._hairs;
            for (var i = 0, len = hairs.length; i < len; i++) {
                hairs[i].draw(ctxBG);
            }
            
            if (this._latestStrokeLength > 30) {
                this.splash(ctxBG, this.splashRange, this.splashInkSize);
            }
        },
        
        splash: function(ctxBG, range, maxSize) {
            var num = random(12, 0);
            var c, r, x, y;
            
            ctxBG.save();
            for (var i = 0; i < num; i++) {
                r = random(range, 1);
                c = random(Math.PI * 2);
                x = this.x + r * Math.sin(c);
                y = this.y + r * Math.cos(c);
                dot(ctxBG, { x: x, y: y }, hsla.toString(), random(maxSize, 0));
            }
            ctxBG.restore();
        }
    });


    /**
     * Hair
     */
    function Hair(x, y, lineWidth, inkAmount) {
        Point.call(this, x, y);
        this.lineWidth = lineWidth;
        this.inkAmount = inkAmount;
        
        this._currentLineWidth = this.lineWidth;
        this._latest = this.clone();
    }

    Hair.prototype = extend({}, Point.prototype, {
        // Override Point offset method
        offset: function(p) {
            this._latest.set(this);
            Point.prototype.offset.call(this, p);
        },
        
        update: function(stroke) {
            this._latest.set(this);
            this.offset(stroke);

            var per = clamp(this.inkAmount / stroke.length(), 1, 0);
            this._currentLineWidth = this.lineWidth * per;
        },

        draw: function(ctxBG) {
            ctxBG.save();
            ctxBG.lineCap = 'round';
            line(ctxBG, this._latest, this, hsla.toString(), this._currentLineWidth);
        }
    });
    
    // Draw helpers
    
    function line(ctxBG, p1, p2, color, lineWidth) {
     /////////////   ctxBG.strokeStyle = hsla.toString();

          ctxBG.strokeStyle = '#ffd200';
      
        ctxBG.lineWidth = lineWidth;
        ctxBG.beginPath();
        ctxBG.moveTo(p1.x, p1.y);
        ctxBG.lineTo(p2.x, p2.y);
        ctxBG.stroke();
    }
    
    function dot(ctxBG, p, color, size) {
      /////  ctxBG.fillStyle = hsla.toString();





     var grd = ctxBG.createRadialGradient(p.x, p.y, 0, p.x, p.y, 50);
    grd.addColorStop(0, "rgba(255,255,255,.6)"); 
    grd.addColorStop(1, "transparent"); 
    ctxBG.fillStyle = grd;
    ctxBG.beginPath();
    ctxBG.arc(p.x, p.y,30,0,2 * Math.PI);
    ctxBG.fill();
/////    ctxBG.closePath();
 





   /////         ctxBG.fillStyle = '#ffd200';
///// ctxBG.beginPath();
      /////  ctxBG.arc(p.x, p.y, size / 2, 0, Math.PI * 2, false);
    //////    ctxBG.fill();
    }
    
    window.Brush = Brush;
    
})(window);


// Helpers

function clamp(n, max, min) {
    if (typeof min !== 'number') min = 0;
    return n > max ? max : n < min ? min : n;
}

function random(max, min) {
    if (typeof max !== 'number') {
        return Math.random();
    } else if (typeof min !== 'number') {
        min = 0;
    }
    return Math.random() * (max - min) + min;
}

// Init
window.addEventListener('load', init, false);

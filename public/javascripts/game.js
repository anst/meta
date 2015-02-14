var Tile = function(spriteId) {
	this.object = "nil";
	this.sprite = spriteId;
};

var cameraX = 0;
var cameraY = 0;

var render = function(){
	for(var r = cameraY; r < map.length; r++) {
		for(var c = cameraX; c < map[r].length; c++){
			ctx.drawImage(sprites[tileTypes[map[r][c]].sprite], c * 64, r * 64);
		}
	}
};

var startRendering = function() {
	window.setInterval(render,1000/30);
};


var spriteLoaded = function() {
	spriteCount++;
	if(spriteCount == 2){
		startRendering();
	}
};

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var spriteFileNames = ["background.svg","wall.svg"];
var sprites = [];
var spriteCount = 0;

spriteFileNames.forEach(function(name) {
	var img = new Image();
	img.src = "/images/" + name;
	sprites.push(img);
	spriteLoaded();
});


var tileTypes = [
	new Tile(0),
	new Tile(1)
];

var map = [];

for(var r = 0; r < 12; r++){
	var row = [];
	for(var c = 0; c < 20; c++){
		row.push(Math.floor(Math.random()*2));
	}
	map.push(row);
}


document.addEventListener('keydown', function(event) {
	if(event.keyCode == 37){
		if(cameraX > 0){
			cameraX--;
		}
	}else if(event.keycode == 38){
		if(cameraY > 0){
			cameraY--;
		}
	}else if(event.keycode == 39){
		cameraX++;
	}else if(event.keycode == 40){
		cameraY++;
	}
});

var flakeCount = Math.floor(Math.random() * (6 - 2)) + 2;
var flake = new Object();
var flakes = [];
var background_image = "";
var background_pos = "";
var background_size = "";

var newFlake = function(forCount) {
	flake.x_pos = Math.floor(Math.random() * (90+ 1));
	flake.y_pos = Math.floor(Math.random() * (90+ 1));
	flake.rotation = Math.floor(Math.random() * (360));
	flake.size = Math.floor(Math.random() * (20 - 5)+ 5);
	flake.type = Math.floor(Math.random() * 9) + 1;
	flakes[forCount] = flake;
};


for (i=0; i < flakeCount; i++ ){
	newFlake(i);
	if (i > 0){
		background_image = background_image + ", url(img/snowflake" + flakes[i].type + ".svg)";
		background_pos = background_pos + ", " + flakes[i].x_pos + "% " + flakes[i].y_pos + "%";
		background_size = background_size + ", " + flakes[i].size + "%";
	} else {
		background_image = background_image + "url(img/snowflake" + flakes[i].type + ".svg)";
		background_pos = background_pos + flakes[i].x_pos + "% " + flakes[i].y_pos + "%";
		background_size = background_size + flakes[i].size + "%";
	};
};

document.body.style.backgroundImage = background_image;
document.body.style.backgroundPosition = background_pos;
document.body.style.backgroundSize = background_size;
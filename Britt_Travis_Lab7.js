//alert("JavaScript works!");
// variable
var myVideoGame = function(creator, studio, name, year){
// conection to json file	
	this.creator = creator;
	this.studio = studio;
	this.year = year;
	this.name = name;
	 
};
// first pull
for (var videoGame in jsonData.myGame) {
	
	if (videoGame === 0){
		
		var myFavoriteVideoGame = new myVideoGame(jsondata.myVideoGame[Game].year, jsonData.myVideoGame[Game].name, jsonData.myVideoGame[Game].creator, jsoData.myVidoGame[Game].studio);
		
	}else if (videoGame === 1) {
		
		var mySecondVideoGame = new myVideoGame(jsondata.myVideoGame[Game].year, jsonData.myVideoGame[Game].name, jsonData.myVideoGame[Game].creator, jsoData.myVidoGame[Game].studio);
	};
};
// outputs for coad
myVideoGame();



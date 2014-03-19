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
for (var Game in jsonData.videoGame) {
// else statements
	if (Game == 0){
		
		var myFavoriteGame = new myVideoGame(jsonData.videoGame[Game].year, jsonData.videoGame[Game].name, jsonData.videoGame[Game].creator, jsonData.videoGame[Game].studio);
		
	}else if (Game == 1) {
		
		var myLeastFavoriteGame = new myVideoGame(jsonData.videoGame[Game].year, jsonData.videoGame[Game].name, jsonData.videoGame[Game].creator, jsonData.videoGame[Game].studio);
	};
};
// outputs for code
myVideoGame();

console.log("The game I love to play the most in my spare time is " + myFavoriteGame.studio + ". It was made by " + myFavoriteGame.name + " in the year of " + myFavoriteGame.creator + ". The studio that was responsible for creating it was " + myFavoriteGame.year);

console.log("The game I realy dont like to play is " + myLeastFavoriteGame.studio + ". It was made by " + myLeastFavoriteGame.name + ", in the year of " + myLeastFavoriteGame.creator + ". The studio that was responsible for creating it was " + myLeastFavoriteGame.year); 



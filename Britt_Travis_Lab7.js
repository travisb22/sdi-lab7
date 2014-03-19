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
// else statements
	if (videoGame === 0){
		
		var myFavoriteVideoGame = new myVideoGame(jsondata.myVideoGame[Game].year, jsonData.myVideoGame[Game].name, jsonData.myVideoGame[Game].creator, jsoData.myVidoGame[Game].studio);
		
	}else if (videoGame === 1) {
		
		var myLeastFavoriteVideoGame = new myVideoGame(jsondata.myVideoGame[Game].year, jsonData.myVideoGame[Game].name, jsonData.myVideoGame[Game].creator, jsoData.myVidoGame[Game].studio);
	};
};
// outputs for code
myVideoGame();

console.log("The game I love to play the most in my spare time is" + myFavoriteVideoGame.title + ". It was made by" + myFavoriteVideoGame.developer + " in the year of" + myFavoriteVideoGame.year + ". The studio that was responsible for helping create it was " + myVideoGame.studio);

console.log("The game I realy dont like to play is" + myLeastFavoriteVideoGame.title + ". It was made by" + myLeastFavoriteVideGame.developer + ", in the year of" + myLeastFavoriteVideoGame.year + ". The studio that was responsible for helping create it was " + myLeastFavoriteVideoGame.studio); 



//Javascript Test Review
//Mark Demesillo 
//11.23

var knight = "Gawain"
var maiden = "Morgana"
var monster = "Loch Ness"

var weaponChest = ["Mace", "Sorcerer's Stone", "Excalibur"]

var hero = []

function swordInTheStone(worthy){
	if(worthy == "Arthur"){
		console.log("We have found our King " + worthy + ".")
	}else{
		console.log("We must keep searching, for " + worthy + " is unworthy.")
	}
}

swordInTheStone("Gawain");
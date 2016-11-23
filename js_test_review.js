//Javascript Test Review
//Mark Demesillo 
//11.23

var knight = "Gawain";
var maiden = "Morgana";
var monster = "Loch Ness";

var weaponChest = ["Mace", "Sorcerer's Stone", "Excalibur"];
var hero = [
	wizard = "Merlin",
	power = 50,
	weapon = weaponChest[0]
];

function swordInTheStone(worthy){
	if(worthy == "Arthur"){
		console.log("We have found our King " + worthy + ".")
	}else{
		console.log("We must keep searching, for " + worthy + " is unworthy.")
	}
}

swordInTheStone("Gawain");

function trueLove(king, queen){	
	if(queen == "Quinevere" && king == "Arthur"){
		console.log("On this day, our " + king + " and  " + queen + " shall rule happily ever after.")
	}else{
		console.log("We must keep searching, for true love must reign over Camelot.")
	}
}

trueLove(knight, maiden);

function epicBattle(wizard, enemy, power){
	if(power <= 15){
		console.log("Our " + wizard + " has fallen.")
	}else if(power >= 16 && power >= 40){
		console.log(wizard + " has almost slain " + enemy + ".")
	}else{
		console.log("Our " + wizard + " has slain the " + enemy + ".")
	}
}

epicBattle(wizard, monster, power);
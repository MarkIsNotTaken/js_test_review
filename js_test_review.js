/*Javascript Test Review
Mark Demesillo 
*/

var knight = "Gawain";
var maiden = "Morgana";
var monster = "Bob Marley";

var weaponChest = ["Mace", "Sorcerer's Stone", "Excalibur"];
var hero = {
	wizard : "Merlin",
	power : 50,
	weapon : weaponChest[0]
};

function swordInTheStone(worthy){
	if(worthy == "Arthur"){
		console.log("We have found our King " + worthy + ".")
	}else{
		console.log("We must keep searching, for " + worthy + " is unworthy.")
	}
}

swordInTheStone(knight);

function trueLove(king, queen){	
	if(queen == "Guinevere" && king == "Arthur"){
		console.log("On this day, our " + king + " and  " + queen + " shall rule happily ever after.")
	}else{
		console.log("We must keep searching, for true love must reign over Camelot.")
	}
}

trueLove(knight, maiden);

function epicBattle(wizard, enemy, power){
	if(hero.power <= 15){
		console.log("Our " + hero.wizard + " has fallen.")
	}else if(hero.power >= 16 || hero.power >= 40){
		console.log(hero.wizard + " has almost slain " + enemy + ".")
	}else{
		console.log("Our " + hero.wizard + " has slain the " + enemy + ".")
		console.log("You really do deserve the eyes of your father, " + hero.wizard)
	}
}

epicBattle(hero.wizard, monster, hero.power);
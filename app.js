/*You attack the first alien ship
If the ship survives, it attacks you
If you survive, you attack the ship again
If it survives, it attacks you again ... etc
If you destroy the ship, you have the option to attack the next ship or to retreat
If you retreat, the game is over, perhaps leaving the game open for further developments or options
You win the game if you destroy all of the aliens
You lose the game if you are destroyed*/

class spaceship{
    constructor(name,hull,firepower,accuracy){
        this.name = name;
        this.hull = 20;
        this.firepower = 5;
        this.accuracy = 0.7;
    }
    attack(){
        if(this.accuracy > alien.accuracy)
    }

class alienShips {
        constructor(number, hull, power, accuracy) {
          this.number = number;
          this.hull = hull;
          this.power = power;
          this.accuracy = accuracy;
        }
      }
let aliensNum = []; 
let alienHull = [3, 4, 5, 6]; 
let alienFire = [2, 3, 4]; 
let alienAccu = [0.6, 0.7, 0.8];

/*const alienShips = [alienship1, alienship2, alienship3, alienship4, alienship5, alienship6]
let attack  = spaceship.firepower - alienship1.hull

attack() {
    if (spaceship.hull > alienship1.hull) {
        console.log(alienship1.hull)
    }


//console.log(alienShips)
//remove from array
//let a= alienShips.shift()
//console.log(a)
/*console.log(alienShips)*/
//let attack = spaceship.firepower - alienship1.hull
//console.log(attack)
//attack hull ship1
//let s1hull = alienShips[0].hull
//console.log(s1hull)
////attack hull ship1
//console.log(s1hull-attack)
//console.log(alienShips[0].hull)
////if hull < 0, remove from array = if statement
//if(alienShips[0].hull < 0){
////then remove s1 from array
//alienShips.shift()
//console.log(alienShips[0].hull)
//}
//console.log(alienShips)

/*let btn = document.querySelector('#attack');
function attack(){
    alert("you've attacked!");
}
btn.addEventListener('click', attack())*/

/*function attack (){
    if(spaceship.firepower > alienship1.hull){
        console.log(attack)
    }
    }*/

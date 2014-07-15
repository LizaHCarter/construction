var Room = require('./room.js');
var House = require('./house.js');

var r1 = new Room('living',10,12,8,'carpet', 'aqua');
var r2 = new Room('dining',8,10,8,'tile', 'green');
var r3 = new Room('bedroom',9,11,8,'wood', 'orange');

console.log(r1,r2,r3);

var h1 = new House('M-4', 'brick', 1993);
var h2 = new House('M-5', 'stone', 1785);
var h3 = new House('M-6', 'straw', 1832);

h1.rooms.push(r1,r2,r3);

console.log(h1,h2,h3);

console.log('the area of room 1 is', r1.area());
console.log('The cost of room 1 is '+r1.cost());
console.log('The cost of room 2 is '+r2.cost());
console.log('The cost of room 3 is '+r3.cost());

var total = 0;
for(var i = 0; i < h1.rooms.length; i++){
  total = h1.rooms[i].area()+ total;
   }

console.log('Total area of h1 is '+total);
console.log('Total area of h1 is '+h1.area());
console.log('Total cost of h1 is '+h1.cost());

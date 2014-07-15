'use strict';

function House(name,material,year){
  this.name = name;
  this.material= material;
  this.year = parseInt(year);
  this.rooms = [];
}

House.prototype.area = function(){
var total = 0;
for(var i = 0; i < this.rooms.length; i++){
  total = this.rooms[i].area()+ total;
}
return total;
};

House.prototype.cost = function(){
var total = 0;
for(var i = 0; i < this.rooms.length; i++){
  total = this.rooms[i].cost()+ total;
}
return total;
};
module.exports = House;


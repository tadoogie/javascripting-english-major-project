let leonardo, donatello, raphael, michaelangelo, turtles, weapons;
leonardo = {name: "Leonardo", color: "blue", weapon: "katana"};
donatello = {name: "Donatello", color: "purple", weapon: "bo"};
raphael = {name: "Raphael", color: "red", weapon: "sai"};
michaelangelo = {name: "Michaelangelo", color: "yellow", weapon: "nunchaku"};
turtles = [leonardo, donatello, raphael, michaelangelo];

weapons = turtles.forEach(function(turtle){
  weapons = weapons + turtle.weapon + " ";
});

$("#response").html(weapons);

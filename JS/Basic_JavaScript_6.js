


//Step 117: Carnival Ride
function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

//Step 118: Voting Age
function votingAge() {
    var age, can_vote;
    age = document.getElementById('user_age').value;
    can_vote = (age >= 18) ? "You are eligible to vote. Go Bernie!":"You are not yet eligible to vote";
    document.getElementById('vote').innerHTML = can_vote;
}

//Step 122: new and this keywords
function DandD_weapon(name, cost, damage, weight, properties) {
    this.weapon_name = name;
    this.weapon_cost = cost;
    this.weapon_damage = damage;
    this.weapon_weight = weight;
    this.weapon_properties = properties;
}

var club = new DandD_weapon("Club", "1 sp", "1d4 bludgeoning", 2, "Light");
var sickle = new DandD_weapon("Sickle", "1 gp", "1d4 slashing", 2, "Light");
var pike = new DandD_weapon("Pike", "5 gp", "1d10 piercing", 18, "Heavy, reach, two-handed");

function weapon() {
    document.getElementById("New_and_This").innerHTML = "You have purchased the " + pike.weapon_name + " for " + pike.weapon_cost;
}

//Step 124: Object constructor
function sandwich(bread, sauce, cheese, meat, veg) {
    this.bread = bread;
    this.sauce = sauce;
    this.cheese = cheese;
    this.meat = meat;
    this.veg = veg;
}

//Step 127: Nested Function
function concat() {
    document.getElementById('result').innerHTML = concat2();
    function  concat2() {
        var str1 = document.getElementById('userStr').value,
        str2 = " ALSO THE MOON LANDING WAS FAKED!! THE EARTH IS FLAT!! (cue banjo music)"
        var result = str1 + str2;
        return result
        }
}
  
       
        
    



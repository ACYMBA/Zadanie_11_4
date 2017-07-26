function Phone(brand, price, color, height) {
  this.brand = brand;
  this.price = price;
  this.color = color;
  this.height = height;
}

Phone.prototype.summary = "All these phones are smartphone";
Phone.prototype.printInfo = function() {
    console.log("The phone brand is " + this.brand + ", color is " + this.color + " and the price is " + this.price +"and height" + this.height +".");
}
var iPhone6S = new Phone("Apple", 2250, "silver" , 150);
var GalaxyS6 = new Phone("Samsung GalaxyS6", 2000, "black", 252);
var OnePlus = new Phone("OnePlus", 1500, "orange" , 124);

iPhone6S.printInfo();
GalaxyS6.printInfo();
OnePlus.printInfo();

var myPhones = new Phone();
console.log(myPhones.summary);
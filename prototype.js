



var Mobile = function(model_no ){

    // Instance Member 

    this.model = model_no;
    this.price = 8000;
}

var sumsung = new Mobile ( "Galaxy ");
var nokia = new Mobile ( 3310 );

// classname.prototype.key = "value";
// Prototype Member 

Mobile.prototype.color = "White";

document.write(sumsung.color);
console.log ( sumsung);
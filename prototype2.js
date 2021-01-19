

// PROTOTYPE 

function Mobile (){


}

console.log(Mobile.prototype);
var lg = new Mobile();
console.log (lg.__proto__);
 
// verify 

console.log(Mobile.prototype === lg.__proto__);
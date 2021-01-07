

// Concat Method 
document.write("<h1>CONCAT METHOD.</h1>")

var geek = ["Sulaiman" , "Shahroz" , "Maaz"];

// Concat Values ..

// var new_geek = geek.concat(" Saim" , "Mehroz");
// document.write(new_geek);

var geek1 = ["Saim" , "Mehroz"];

//  Concat Array

var new_geek = geek.concat(geek1);
document.write(new_geek + " <br><br> ") ;

// Join Method ..

document.write("<h1>JOIN METHOD..</h1>");
var geek2 = new_geek.join(" / ");
document.write(geek2 + " <br><br> ");




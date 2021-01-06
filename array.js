

// Array 

document.write("<h1>ARRAY</h1>");
var stu = [ "Sulaiman<br>" , "Shahroz<br>" , "Saim<br>" , "Fardeen<br>"];
document.write(stu);
console.log(stu);
document.write( "<br><br>" + "typeof " + typeof(stu));

// Declaration and Initialization of Array
// Using Array With Literal

document.write("<br><br>");

var geek = [];
geek[0] = "Sulaiman";
geek[1] = "Shahroz";
geek[2] = "Saim";
geek[3] = 58;
document.write(geek[3] + "<br><br>");

// Using Array With Constructor

var show = new Array(10,20,30,40);
// modifying array 
 show[2] = 100;

 // updated 

document.write(show + "<br><br>");

// delete array 

delete show[0];
document.write(show + "<br>");

// length property 

document.write(show.length);




// ARRAY WITH LOOP

document.write("<h1>ARRAY WITH LOOP.</h1>")

var show = ["Sulaiman" , "Shahroz" , "Saim" , 45];
// var ln = document.write(show.length);

for (let i = 0; i < show.length ; i++) {
    document.write(i + " = " + show[i] + "<br>");
};

// forEach 

document.write("<h1>forEach..</h1>")

var geek = ["Fardeen" , "Maaz" , "Dawood" , 500];
geek.forEach(function(value , index ) { 
    document.write(value + " " + index + " <br>");
} );


//  for of 
document.write("<h1>for of ...</h1>");

for (let value of geek){
    document.write(value + "<br>");
};
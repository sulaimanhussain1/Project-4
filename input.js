


// taken input from user with array 

// defining array 

document.write("<h2>getting input from user.</h2>")

var elm = prompt ("Enter Elememt NO: ");
var geek = [];

// input 

for(let i = 0; i <= elm; i++){
    geek[i] = prompt ("Enter data.What you want to store in array.");
}

// Display Values ..

for (let value of geek) {
    document.write(value + "<br>");
}
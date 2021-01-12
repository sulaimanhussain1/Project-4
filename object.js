

// object declaration and initialization 

// var fees = {};
// fees.shahroz = 100 ;
// fees.sulaiman = 200 ;
// fees.maaz = 300 ;
// document.write(fees.sulaiman);

// var fees = { Sulaiman:100, Shahroz:300 , Maaz:500};
// document.write(fees.Maaz);

// object literal 

document.write("<h1>OBJECT LITERAL.</h1>");

var fees = {
    Sulaiman:200, 
    Shahroz:300, 
    Maaz:300, 
    total: function() { return(200+300);}};

     // deleting properties 

    delete fees.Sulaiman;
document.write(fees.Shahroz + " <br>" + fees.Sulaiman + " <br>");

// object constructor 


document.write("<h1>OBJECT CONSTRUCTOR.</h1>");

var fees = new Object();
    fees.Sulaiman= 300; 
    fees.Shahroz=300; 
    fees.Maaz=300; 
    fees.total = function() { return(200+300);};
document.write(fees.total());





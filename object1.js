

//     OBJECTS TYPES


// 1)   OBJECTS LITERAL 

var fees = {};
fees.Sulaiman = 500;
fees["Sulaiman"] = 500 ;

// 2) OBJECTS LITERAL DECLARATION AND INITIALIZATION

var fees = {Sulaiman : 500 , Shahroz : 400};

// 3) OBJECTS CONSTRUCTOR 

var fees = new Object();

// 4) FACTORY FUNCTION 

function mobile () {
    return{
        model : "galaxy"
    }
};

var sumsung = mobile();
var lg = mobile();

//  CONSTRUCTOR FUNCTION 

function Mobile () {
    this.model = "galaxy";
    this.price = 5000;
};

var sumsung = new Mobile ();
var lg = new Mobile ();
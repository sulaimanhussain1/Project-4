

// INHERITANCE WITH CONSTRUCTOR 

document.write("<h1>Inheritance With Constructor</h1>");

class Father {
    constructor(money){
        this.Fmoney = money ;
    }
    showFmoney () {
        return this.Fmoney + "FATHER MONEY.<br><br>";
    }
};

class Son extends Father {
    constructor (money) {
        super(money) ;
    }
    showSmoney () {
        return "Son Money ";
    }
};

var s = new Son(100000);
document.write(s.showFmoney());
document.write(s.showSmoney());
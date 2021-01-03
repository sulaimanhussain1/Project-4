

// METHOD OVERRIDDING ...

class father {
    show() {
        return "SUPER CLASS";
    }
};

class Son extends father {
    show() {
        return "SUB CLASS<br><br>";
    }
};

var s = new Son();
document.write(s.show());

// STATIC METHOD .

class Mobile {
   static disp (){
        return " STATIC METHOD . ";
    }
};

document.write(Mobile.disp());
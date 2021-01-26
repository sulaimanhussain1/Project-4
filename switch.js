

//  Switch statement 

alert("Check Working day or Holiday !");
var day = prompt("Enter the name of day.");
switch(day) {
    case "monday" :
    case "Monday" :
        document.write("Working Day.");
        break;

    case "Tuesday" :
    case "tuesday" :
        document.write("Working Day.");
        break;

    case "wednesday" :
    case "Wednesday" :
        document.write("Working Day.");
        break;

    case "Thursday" :
    case "thursday" :
        document.write("Working Day.");
        break;
        
    case "Friday" :
    case "friday"  :
        document.write("Working day");
        break;

    case "Sunday" :
    case "sunday" :
    case "Saturday" :
    case "saturday" :
        document.write("Holiday!");      
        break;

    default:
        document.write("You entered wrong value");



}
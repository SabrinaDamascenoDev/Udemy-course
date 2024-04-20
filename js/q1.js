

function leapYaer(year){
    
    if(year%4 === 0 && year%100 !== 0 && year%400 !== 400){
        return "Leap year.";
    } else {
        return "Not leap year.";
    }


}

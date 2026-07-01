function checkDay(dayNumber){
    let day;
    switch (dayNumber) {
        case 0:
            day= "sunday";
        break;
        case 1:
            day= "monday";
        break;
    case 2:
            day= "tuesday";
        break;
    case 3:
            day= "wednesday";
        break;
    case 4:
            day= "thursday";
        break;
    case 5:
            day= "friday";
        break;
        case 6:
            day= "saturday";
        break;
        default:
            console.log("invalid date");
            break;
    }
return day;
}
console.log(checkDay(4));
console.log(checkDay(6));
console.log(checkDay(8));

// 
function launchBrowser(browserName){
    let browser;
    switch (browser) {
        case "chrome":
            console.log("launch chrome");
            break;

    case "FF":
            console.log("FF");
            break;
            
            case "edge":
            console.log("edge");
            break;
        default:
            console.log("plz pass the right browser");
            break;
    }
}
console.log(launchBrowser("firefox"));

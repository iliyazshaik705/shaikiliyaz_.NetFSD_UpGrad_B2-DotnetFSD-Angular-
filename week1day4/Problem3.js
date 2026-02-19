function trafficSignal(signal){
    switch(signal){
        case "red":
            console.log("stop");
            break;  
        case "yellow":
            console.log("Get Ready");
            break;
        case "green":
            console.log("go");
            break;
        default :
            console.log("Invalid Signal")
                
        }
}

let signal="green"
trafficSignal(signal)
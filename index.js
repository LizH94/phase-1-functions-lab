// Code your solution in this file!
function distanceFromHqInBlocks(someValue){
    if (someValue > 42) {
        return someValue - 42
    }
    else if (someValue < 42){
        return 42 - someValue
    }
}

function distanceFromHqInFeet(someValue){
    return distanceFromHqInBlocks(someValue) * 264
}

function distanceTravelledInFeet(start, destination){
    if (destination > start){
        let distanceTravelled = destination - start;
        let distanceTravelledInFeetVariable = distanceTravelled * 264;
        return distanceTravelledInFeetVariable
    }
    else if (start > destination){
        let distanceTravelled = start - destination;
        let distanceTravelledInFeetVariable = distanceTravelled * 264;
        return distanceTravelledInFeetVariable
    }
}
function calculatesFarePrice(start, destination){
    let distance = distanceTravelledInFeet(start, destination);
        if (distance <= 400){
            let farePrice = 0;
            return farePrice
        }
        else if(distance > 400, distance <= 2000){
            let farePrice = (distance - 400) * .02
            return farePrice
        }
        else if (distance > 2000, distance <= 2500){
            let farePrice = 25;
            return farePrice
        }
        else if (distance > 2500){
            return "cannot travel that far"
        }
}

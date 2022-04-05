const returnFirstTwoDrivers = function(arrayDrivers){
    let newArray = [arrayDrivers[0], arrayDrivers[1]];
    return newArray;
}

const returnLastTwoDrivers = (arrayDrivers) => {
    let newArray = [arrayDrivers[arrayDrivers.length -2], arrayDrivers[arrayDrivers.length -1]];
    return newArray;
}

let selectingDrivers = [returnFirstTwoDrivers, returnFirstTwoDrivers];

function createFareMultiplier(int){
    return function(fare, int){
        return fare * int
    }
}
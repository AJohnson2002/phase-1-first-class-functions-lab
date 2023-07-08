const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
const returnFirstTwoDrivers = (drivers)=>{
    let drivers2 = [...drivers.slice(0,2)];
    return drivers2;
};

const returnLastTwoDrivers = (drivers) => {
    let drivers3 = [...drivers.slice(drivers.length-2)];
    return drivers3;
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = (int)=> {
    return function(fare=4) {
        return fare * int;
    }
};

const fareDoubler = (fare)=> {
    return createFareMultiplier(2)(fare);
};

const fareTripler = (fare)=> {
    return createFareMultiplier(3)(fare);
};

function selectDifferentDrivers(drivers, fn) {
    return fn(drivers);
};

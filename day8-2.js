var leapYear = function(year){
    // leap years happen every 4 years, but not if a century (divided by 100), except when divisable by 400 years.
    if (year % 400 === 0){
        return(true)
    } else if (year % 100 === 0) {
        return(false)
    } else if (year % 4 === 0){
        return(true)
    } else {
        return(false)
    }
}
// console.log(leapYear(2016))
// 2. Write a funciton which, given a year as a number, returns whether that number is a leap year.

let dayNumber = 1;
let dayOfWeek = ["sunday", "monday", "tuesday", "thursday", "friday", "saturday"];

let result = (dayNumber >= 0 || dayNumber < 7)? dayOfWeek[dayNumber] : "corresponding day of the week";
console.log(result);
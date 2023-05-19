///////////////////
// Apple Orchard //
///////////////////

/*
    The data below has been collected over the 
    last week at an apple orchard. You will be 
    using your coding skills to gain insights 
    into its daily operations.

    Below are three arrays each containing 7
    numbers. You will use them and the price
    variables to complete the problems in 
    this file.

    The indexes of the arrays correspond with a 
    day of the week. The associated number value 
    represents the number of acres that were picked 
    that day.

    The first array is named fujiAcres. Notice 
    that the first item in this array is 2, 
    meaning that 2 acres of Fuji apples were 
    picked on Monday of this week.

    The prices are per pound and are written
    in cents. 
*/

const fujiAcres = [2, 3, 3, 2, 2, 2, 1]
const galaAcres = [5, 2, 4, 3, 6, 2, 4]
const pinkAcres = [1, 5, 4, 2, 1, 5, 4]

const fujiPrice = .89 
const galaPrice = .64
const pinkPrice = .55



// PROBLEM 1

/*
    Using for loop, calculate the total number
    of acres picked for the entire week.

    Save the number to a variable called 
    `totalAcres`.

    Log `totalAcres` to the console.
*/

// CODE HERE

// I first realized that the problem asked for total acres, but there were multiple arrays to calculate. I realized I would need to calculate each and add them together in some way. Instead of trying to calculate a sum from 3 different arrays with just one "totalAcres" variable, I decided to create variables for each apple type, then add the subtotals together to get the final "totalAcres" result. Because the variables were separate, I could include iterations from all three apple types in the same loop logic, and I didn't have to do it one at a time with a loop for each apple type. "totalAcres" was calculated simply by adding the other apple type variables together after they were individually counted.

let totalAcresFuji = 0
let totalAcresGala = 0
let totalAcresPink = 0


for (let i = 0; i < fujiAcres.length; i++){
    totalAcresFuji += fujiAcres[i]
    totalAcresGala += galaAcres[i]
    totalAcresPink += pinkAcres[i]
}

console.log("Fuji acres:", totalAcresFuji)
console.log("Gala acres:", totalAcresGala)
console.log("Pink acres:", totalAcresPink)

let totalAcres = totalAcresFuji + totalAcresGala + totalAcresPink

console.log("Tota acres:", totalAcres)

// PROBLEM 2

/*
    Using `totalAcres`, calculate the average 
    number of acres picked per day. 

    Save the answer to a variable called 
    `averageDailyAcres`. 

    Log `averageDailyAcres` to the console.
*/

// CODE HERE

// I'm assuming that the indeces of every array correspond to the days of the same week, so I will be dividing totalAcres by the array length, i.e. the amount of days in one of the arrays (which should be 7).

let averageDailyAcres = totalAcres / fujiAcres.length
console.log("fujiAcres.length", fujiAcres.length)
console.log("Average daily acres:", averageDailyAcres)


// PROBLEM 3

/*
    We have provided 2 variables below. 
    
    The `acresLeft` variable is the number 
    of acres that still have apples left. 
    
    The `days` variable represents how 
    many more days of work are left. It's 
    initialized at 0 because we're going 
    to be using it as a counter.
    
    Write a while loop that will continue to run
    while `acresLeft` is above 0. 
    
    On each iteration of the loop:
    - add 1 to the `days` variable
    - subtract your daily average from the number of acres left

    Outside the loop, log `days` to the console.

    Note: This is not the most efficient way to
    calculate this number. But! It is a great
    way to get a whole number without using 
    any Math methods. 

*/

let acresLeft = 174 
let days = 0

// CODE HERE

// This problem mostly included following the instructions, I just had to think of operators to use to increment the days and sutract averageDailyAcres from acresLeft. I added some logs in the loop to check if my syntax was correct. I realized that "-" by itself wasn't right to change the acresLeft variable (because when I ran it, days were going up infinitely and the acresLeft variable was staying the same), so i changed the operator to "-=" and it worked.

while (acresLeft > 0){
    days++
    acresLeft -= averageDailyAcres
    // console.log(days)
    // console.log(acresLeft)
}

console.log("Days to pick the acres:", days)

// PROBLEM 4

/*
    Your next task is to create 3 arrays
    that list the daily amount of apples 
    picked, in tons, for each variety. 
    
    Each acre yields 6.5 tons of apples.

    Use the variables below to store 
    your new arrays. Make sure that you
    don't modify the original arrays 
    on lines 36 - 38.

    Log each of your arrays to the console.

    Hint: you can use the slice method 
    to make copies of the arrays and 
    then loop the copies. You could also
    make empty arrays, loop the old ones
    and use the push method to add new 
    values to the new arrays.
*/

// CODE HERE


// I decided to declare empty arrays and push the data into them. I also like working with variables instead of hard coded numbers so I declared an acreYield variable. This loop was a lot like adding up the arrays, insofar that each array is iterated on for each loop. This time though I was pushing an equation that multiplied the acres by acreYield.

let acreYield = 6.5
let fujiTons = []
let galaTons = []
let pinkTons = []

for (let i = 0; i < 7; i++){
    fujiTons.push(fujiAcres[i] * acreYield)
    galaTons.push(galaAcres[i] * acreYield)
    pinkTons.push(pinkAcres[i] * acreYield)
}


console.log("fujiAcres tons by day:", fujiTons)
console.log("galaAcres tons by day:", galaTons)
console.log("pinkAcres tons by day:", pinkTons)



// PROBLEM 5

/*
    Next, calculate the total number of 
    pounds picked per variety.

    You'll need to add up the tons per
    each variety and convert the number 
    into pounds -- store that number in
    the variables given below. 

    Log each of the values to the console.

    Hint: there are 2000 pounds in a ton.
*/

// CODE HERE 

// I decided to declare more variables cuz they're much easier to work with. It might have been overkill, but I declared the conversion multiplier from tons to pouns. But like I said, I prefer variables to hard coded numbers when possible. I used the same kind of counting loop as in Problem 1 to calculate total tons, then within the variable declarations I applied the tonsToPounds conversion.

let tonsToPounds = 2000
let fujiTonsTotal = 0
let galaTonsTotal = 0
let pinkTonsTotal = 0

for (let i = 0; i < 7; i++){
    fujiTonsTotal += fujiTons[i]
    galaTonsTotal += galaTons[i]
    pinkTonsTotal += pinkTons[i]
}

let fujiPounds = fujiTonsTotal * tonsToPounds
let galaPounds = galaTonsTotal * tonsToPounds
let pinkPounds = pinkTonsTotal * tonsToPounds

console.log("fuji in pounds:", fujiPounds)
console.log("gala in pounds:", galaPounds)
console.log("pink in pounds:", pinkPounds)






// PROBLEM 6

/*
    Now that you know the total pounds
    per variety, use the prices given 
    at the beginning of this file to 
    figure out how much you'll make 
    from selling each type of apple. 

    The prices are per pound and are 
    written in cents. 

    Log each of the profits to the 
    console. 
*/

// CODE HERE

// These calcualtions were just conversions from pounds to price that were easily done within the variable declaration.

let fujiProfit = fujiPounds * fujiPrice
let galaProfit = galaPounds * galaPrice
let pinkProfit = pinkPounds * pinkPrice

console.log("fujiProfit:", fujiProfit)
console.log("galaProfit:", galaProfit)
console.log("pinkProfit:", pinkProfit)






// PROBLEM 7

/*
    Add up all your profits and save 
    the number to a variable called 
    `totalProfit`.

    Log `totalProfit` to the console.
*/

// CODE HERE

let totalProfit = fujiProfit + galaProfit + pinkProfit

console.log("totalProfit:", totalProfit)
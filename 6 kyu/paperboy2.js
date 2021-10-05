/*
All of sudden you and Stripes find yourselves in a sticky situation. Your paper drop business has grown to the point where it's too much for just Stripes and you to handle. Simply, there are just too many houses and not enough of you. Since your job is to make sure the business runs smoothly, it's up to you to find a solution.

Create a method that returns how many paperboys you need to hire to get the job done in the set amount of time. Remember you and Stripes are already a team of two so you need to return how many extra hands are needed.

You'll be passed four arguments. A neighbourhood, the number of houses to deliver to in that neighbourhood, the amount of time it takes one paperboy to deliver to 50 houses (in minutes), and the time in hours to complete the job.

In this example you have 400 houses to deliver to in Brooklyn Heights. It takes one paperboy (or papergirl) 30 minutes to deliver to 50 houses and you have one hour to complete the job.

var route1 = new Route("Brooklyn Heights", 400, 30, 1); 
route1.paperboysNeeded() //should return "2 paperboys needed for Brooklyn Heights"
In this example you have 100 houses in Highland Park, it takes you 15 minutes to deliver to 50 houses and you have 15 minutes to complete the job.

var route14 = new Route("Highland Park", 100, 15, .25); 
route14.paperboysNeeded() //should return "You and Stripes can handle the work yourselves"
Note: if a paper delivery cannot reach the next house, he does not drop any fraction of a paper for that house.
*/

function Route(neighbourhood, numberOfHouses, minutesPer50Houses, deliveryTimeInHours) { 
   this.paperboysNeeded = function() {
     let helpers = Math.ceil(numberOfHouses / Math.floor(deliveryTimeInHours * 60 / minutesPer50Houses * 50) - 2)
     return helpers === 1 ? `${helpers} paperboy needed for ${neighbourhood}` : helpers > 1 ? `${helpers} paperboys needed for ${neighbourhood}` : "You and Stripes can handle the work yourselves"
   }
  }

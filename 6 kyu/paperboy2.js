function Route(neighbourhood, numberOfHouses, minutesPer50Houses, deliveryTimeInHours) { 
   this.paperboysNeeded = function() {
     let helpers = Math.ceil(numberOfHouses / Math.floor(deliveryTimeInHours * 60 / minutesPer50Houses * 50) - 2)
     return helpers === 1 ? `${helpers} paperboy needed for ${neighbourhood}` : helpers > 1 ? `${helpers} paperboys needed for ${neighbourhood}` : "You and Stripes can handle the work yourselves"
   }
  }

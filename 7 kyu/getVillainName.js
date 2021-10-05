const getVillainName = birthday => {
  const m = ["Evil","Vile","Cruel","Trashy","Despicable","Embarrassing","Disreputable","Atrocious","Twirling","Orange","Terrifying","Awkward"];
  const d = ["Mustache","Pickle","Hood Ornament","Raisin","Recycling Bin","Potato","Tomato","House Cat","Teaspoon","Laundry Basket"];
 
  let firstName = birthday.getMonth()
  let lastName = (birthday.getDate() % 10)
  return (`The ${m[firstName]} ${d[lastName]}`)
}

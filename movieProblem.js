const movieRatings = [
  {
    theTermintator: 8,
  },
  {
    theTermintatorTwo: 9,
  },
  {
    predator: 9,
  },
  {
    lastActionHero: 5,
  },
  {
    trueLies: 8,
  },
  {
    conanTheBarbarian: 9,
  },
]

const ratedMovie = movieRatings
  .filter(movie => Object.values(movie) > 8)
  .map(movie => Object.keys(movie))
  .flat()
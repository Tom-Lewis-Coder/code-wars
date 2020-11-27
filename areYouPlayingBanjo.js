const areYouPlayingBanjo = name => {
   return name.indexOf('R') !== 0 && name.indexOf('r') !== 0 ? `${name} does not play banjo` : `${name} plays banjo` 
  }
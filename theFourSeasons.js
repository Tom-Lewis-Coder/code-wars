const fourSeasons = d => {
  if (d < 80 ) { 
    return "Winter Season" 
    } else if (d < 172) {
      return "Spring Season"
      } else if (d < 264) {
        return "Summer Season"
        } else if (d < 355) {
          return"Autumn Season"
          } else if (d <= 365) {
            return "Winter Season"
            } else {
              return "The year flew by!"
              }
  }
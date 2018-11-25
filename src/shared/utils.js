// the data is initially returned in Kelvin, so we need to subtract the difference to get Celsius
export const formatTemperature = temperature => Math.round(temperature - 273.15)

export const getWindDirection = windAngle => {
  const val =  Math.floor((windAngle / 45) + 0.5)
  const arr = ["N","NE","E", "SE","S","SW","W","NW"]
  return arr[(val % 8)]
}

import { getWindDirection, formatTemperature } from '../src/shared/utils'

describe('utility methods', () => {
  it('should return a wind direction given an angle', () => {
    expect(getWindDirection(0)).toEqual('N')
    expect(getWindDirection(180)).toEqual('S')
    expect(getWindDirection(220)).toEqual('SW')
    expect(getWindDirection(390)).toEqual('NE')
  })

  it('should return a rounded temperature in Celsius given a value in Kelvin', () => {
    expect(formatTemperature(273.15)).toEqual(0)
    expect(formatTemperature(290.95)).toEqual(18)
  })
})

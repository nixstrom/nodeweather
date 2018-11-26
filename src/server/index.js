import express from 'express'
import fetch from 'node-fetch'
import React from 'react'
import { renderToString } from 'react-dom/server'
import App from '../shared/App'
import Html from '../shared/Html'
import path from 'path'

const port = 3000
const server = express()

server.use(express.static('dist'))

server.get('*', (req, res) => {

  let city = req.query.city || 'Copenhagen'

  fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},dk&appid=166d00e26d3ff2c6149e89feccc5c59a`)
    .then(res => res.json())
    .then(json => {
      try {
        const props = {
          city: json.name,
          temperature: json.main.temp,
          humidity: json.main.humidity,
          windSpeed: json.wind.speed,
          windAngle: json.wind.angle,
        }

        const body = renderToString(<App
          city={city}
          temperature={json.main.temp}
          humidity={json.main.humidity}
          windSpeed={json.wind.speed}
          windAngle={json.wind.deg}
        />)
        const title = `🌤 Weather in ${city}`

        res.send(
          Html({
            body,
            title,
            props,
          })
        )
      } catch (ex) {
        throw new Error(ex)
      }
  }).catch(function(ex) {
    console.log('parsing failed', ex)
  })
})

server.listen(port)
console.log(`Serving at http://localhost:${port}`)

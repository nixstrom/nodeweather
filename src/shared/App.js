import React, { PureComponent } from 'react'
import { hydrate } from 'react-dom'
import Form from './Form'
import { getWindDirection, formatTemperature } from './utils'

class App extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      city: 'hulla'
    }

    let initialState
    // props are not persisted between server and client render, so we store it globally
    if (__isBrowser__) {
      initialState = window.__INITIAL_DATA__
      delete window.__INITIAL_DATA__
    } else {
      initialState = props
    }

    this.state = {
      ...initialState,
      errorMessage: ''
    }

    this.cityInput = React.createRef();
  }

  componentDidMount() {
    window.addEventListener('popstate', this.handleCityChange(), false);
  }

  componentWillUnmount() {
    window.removeEventListener('popstate', this.handleCityChange(), false);
  }

  handleCityChange() {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams && urlParams.has('city')) {
      const city = urlParams.get('city')

      fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},dk&appid=166d00e26d3ff2c6149e89feccc5c59a`)
        .then(response => response.json())
        .then(json => {
          try {
            this.setState({
              city: json.name,
              temperature: json.main.temp,
              humidity: json.main.humidity,
              windSpeed: json.wind.speed,
              windAngle: json.wind.deg,
              errorMessage: ''
            })
          } catch (ex) {
            throw new Error(ex);
          }
      }).catch((ex) => {
        console.log('parsing failed', ex)
        this.setState({ errorMessage: 'Something went wrong. Please try again later.' })
      })
    }
  }

  handleSubmit(e) {
    e.preventDefault()
    const city = this.cityInput.current.value

    history.pushState({}, `🌤 Weather in ${city}`, `/?city=${city}`);

    this.handleCityChange(city)
  }

  render() {
    const {
      city,
      temperature,
      windSpeed,
      windAngle,
      humidity,
      errorMessage,
    } = this.state

    return (
      <div className="widget" style={{ margin: '10px', width: '300px' }}>
        <div className="panel panel-info">
          <div className="panel-heading">Weather in <b>{city}</b></div>
          <ul className="list-group">
            <li className="list-group-item">Temperature: <b>{formatTemperature(temperature)}°C</b></li>
            <li className="list-group-item">Humidity: <b>{humidity}%</b></li>
            <li className="list-group-item">Wind: <b>{windSpeed} m/s {getWindDirection(windAngle)}</b></li>
            <li className="list-group-item">
              <Form
                cityInputRef={ this.cityInput }
                onSubmit={ e => this.handleSubmit(e) }
              />
            </li>
            { errorMessage && (<div className="alert alert-danger" role="alert">
                { errorMessage }
              </div>)
            }
          </ul>
        </div>
    </div>
    )
  }
}

export default App

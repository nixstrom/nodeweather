import React from 'react'
import { shallow } from 'enzyme'
//import sinon from 'sinon'

import App from '../src/shared/App'

const initialProps = {
  city: 'Copenhagen',

}

describe('<App />', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(<App
        city="Copenhagen"
        temp={ 276 }
        humidity={ 80 }
        windSpeed={ 5.1 }
        windAngle={ 180 }
      />)
  })
  it('renders App', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('renders App with errorMessage', () => {
    wrapper.setState({ errorMessage: 'An error occured' })
    wrapper.update()

    // in theory one of these two ass is redundant, but as there are opinions
    // for and against each approach, I am demonstrating both
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.find('.alert.alert-danger').length).toBe(1)
  })
})

import React from 'react'
import { shallow } from 'enzyme'
//import sinon from 'sinon'

import Form from '../src/shared/Form'

describe('<Form />', () => {
  const mockSubmitHandler = jest.fn()

  let wrapper
  beforeEach(() => {
    wrapper = shallow(<Form
        onSubmit={mockSubmitHandler}
        cityInputRef={() => {}}
      />)
  })
  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('triggers submit handler', () => {
    wrapper.simulate('submit')
    expect(mockSubmitHandler).toHaveBeenCalled()
  })
})

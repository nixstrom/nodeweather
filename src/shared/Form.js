import React from 'react'

const Form = ({ onSubmit, cityInputRef }) => (
  <form className="form-inline" onSubmit={ onSubmit}>
    <div className="form-group">
      <input type="text" className="form-control" id="city" placeholder="City" ref={cityInputRef} />
    </div>
    <button type="submit" className="btn btn-default">Search</button>
  </form>)


export default Form

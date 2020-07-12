var StageTwo = (props) => (
  <div className="container">
    <form onSubmit={props.handler} className="stage-one-form">
        <div className="form-group">
          <label htmlFor="addressone">Address Line 1</label>
          <input type="text" name="addressone" className="form-control"  placeholder="Enter Address Line 1" />
        </div>
        <div className="form-group">
          <label htmlFor="addresstwo">Address Line 2</label>
          <input type="text" name="addresstwo" className="form-control" placeholder="Enter Address Line 2" />
        </div>
        <div className="form-group">
          <label htmlFor="city">City</label>
          <input type="text" name="city" className="form-control" placeholder="Enter City" />
        </div>
        <div className="form-group">
          <label htmlFor="username">State</label>
          <input type="text" name="state" className="form-control" placeholder="Enter State" />
        </div>
        <div className="form-group">
          <label htmlFor="zip">Zip</label>
          <input type="text" name="zip" className="form-control" placeholder="Enter Zip" />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone</label>
          <input type="text" name="phone" className="form-control" placeholder="Enter Phone" />
        </div>
        <button type="submit" className="btn btn-primary" onClick={props.render}>Submit</button>
      </form>
  </div>
)

export default StageTwo;
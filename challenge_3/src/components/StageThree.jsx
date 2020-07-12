var StageThree = (props) => (
  <div className="container">
    <form onSubmit={props.handler} className="stage-one-form">
        <div className="form-group">
          <label htmlFor="ccnum">Credit Card #</label>
          <input type="text" name="ccnum" className="form-control"  placeholder="1234-5678-9109-1666" />
        </div>
        <div className="form-group">
          <label htmlFor="expiry">Expiration</label>
          <input type="text" name="expiry" className="form-control" placeholder="00/00" />
        </div>
        <div className="form-group">
          <label htmlFor="ccv">CCV</label>
          <input type="text" name="ccv" className="form-control" placeholder="123" />
        </div>
        <div className="form-group">
          <label htmlFor="billingzip">Billing Zip</label>
          <input type="text" name="billingzip" className="form-control" placeholder="Enter Zip" />
        </div>
        <button type="submit" className="btn btn-primary" onClick={props.render}>Submit</button>
      </form>
  </div>
)

export default StageThree;
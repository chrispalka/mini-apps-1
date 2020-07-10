var StageOne = (props) => (
  <div className="container">
    <form className="stage-one-form">
      <div className="form-group">
        <label htmlFor="username">Name</label>
        <input type="text" className="form-control" id="username" placeholder="Enter First Name" />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input type="email" className="form-control" id="email" placeholder="Enter email" />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input type="password" className="form-control" id="password" placeholder="Password" />
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  </div>
)

export default StageOne;
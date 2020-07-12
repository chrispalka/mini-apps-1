class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      stageOneComplete: false,
      stageTwoComplete: false,
      stageThreeComplete: false
    };
    this.handleSubmitStageOne = this.handleSubmitStageOne.bind(this);
    this.handleSubmitStageTwo = this.handleSubmitStageTwo.bind(this);
    this.renderStageTwo = this.renderStageTwo.bind(this);
    this.renderStageThree = this.renderStageThree.bind(this);
    this.renderStagePurchase = this.renderStagePurchase.bind(this);
  }


  handleSubmitStageOne(event) {
    event.preventDefault();
    console.log('Submit from FORM!')
    const data = new FormData(event.target);

    fetch('/submit', {
      method: 'POST',
      body: data
    });
  }
  handleSubmitStageTwo(event) {
    event.preventDefault();
    console.log('Submit from FORM!')
    const data = new FormData(event.target);

    fetch('/submit', {
      method: 'POST',
      body: data
    });
  }

  renderStageTwo() {
    this.setState(state => ( {
      stageOneComplete: !state.stageOneComplete
    }));
  }
  renderStageThree() {
    this.setState(state => ( {
      stageTwoComplete: !state.stageTwoComplete
    }));
  }
  renderStagePurchase() {
    this.setState(state => ( {
      stageThreeComplete: !state.stageThreeComplete
    }));
  }

  render() {
    if (!this.state.stageOneComplete) {
      return(
        <form onSubmit={this.handleSubmitStageOne} className="stage-one-form">
        <div className="form-group">
          <label htmlFor="username">Name</label>
          <input type="text" name="username" className="form-control" id="username" placeholder="Enter First Name" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" className="form-control" id="email" placeholder="Enter email" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" className="form-control" id="password" placeholder="Password" />
        </div>
        <button type="submit" className="btn btn-primary" onClick={this.renderStageTwo}>Submit</button>
      </form>
      )
    } else if (!this.state.stageTwoComplete) {
      return(
        <form onSubmit={this.handleSubmitStageTwo} className="stage-one-form">
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
        <button type="submit" className="btn btn-primary" onClick={this.renderStageThree}>Submit</button>
      </form>
      )
    } else if (!this.state.stageThreeComplete) {
      return (
        <form onSubmit={this.handleSubmit} className="stage-one-form">
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
        <button type="submit" className="btn btn-primary" onClick={this.renderStagePurchase}>Submit</button>
      </form>
      )
    } else {
      return (
        <h1>PURCHASE PAGE!</h1>
      )
    }
  }
}

export default Form;
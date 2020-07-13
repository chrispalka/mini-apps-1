// import StageOne from './StageOne.js'
// import StageTwo from './StageTwo.js';
// import StageThree from './StageThree.js';
import App from './App.js'

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      form: {
        username: '',
        email: '',
        password: '',
        addressone: '',
        addresstwo: '',
        city: '',
        state: '',
        zip: '',
        phone: '',
        ccnum: '',
        expiry: '',
        ccv: '',
        billingzip: '',
      },

      stageOneComplete: false,
      stageTwoComplete: false,
      stageThreeComplete: false,
      finalStageComplete: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.renderStageTwo = this.renderStageTwo.bind(this);
    this.renderStageThree = this.renderStageThree.bind(this);
    this.renderStagePurchase = this.renderStagePurchase.bind(this);
    this.finalStageComplete = this.finalStageComplete.bind(this);
  }


  handleSubmit(e) {
    e.preventDefault();
    const data = new FormData()
    for (var key in this.state.form) {
      data.append(key, this.state.form[key])
    }
    console.log('Submit!!')
    fetch('/submit', {
      method: 'POST',
      body: data
    });
    this.setState(state => ({
      finalStageComplete: !state.finalStageComplete
    }));
  }


  onChange(e) {
    var store = this.state;
    store.form[e.target.name] = e.target.value;
    this.setState(store);
  }

  renderStageTwo() {
    console.log('Stage two state altered!')
    this.setState(state => ({
      stageOneComplete: !state.stageOneComplete
    }));
  }
  renderStageThree() {
    console.log('Stage three state altered!')
    this.setState(state => ({
      stageTwoComplete: !state.stageTwoComplete
    }));
  }
  renderStagePurchase() {
    console.log('Stage purchase state altered!')
    this.setState(state => ({
      stageThreeComplete: !state.stageThreeComplete
    }));
  }
  finalStageComplete() {
    this.setState(state => ({
      finalStageComplete: !state.finalStageComplete
    }));
  }

  render() {
    const { form } = this.state;
    if (!this.state.stageOneComplete) {
      return (
        <div className="container">
          <form className="stage-one-form">
            <div className="form-group">
              <label htmlFor="username">Name</label>
              <input type="text" name="username" value={form.username} onChange={this.onChange} className="form-control" id="username" placeholder="Enter First Name" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" value={form.email} onChange={this.onChange} className="form-control" id="email" placeholder="Enter email" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" value={form.password} onChange={this.onChange} className="form-control" id="password" placeholder="Password" />
            </div>
            <button type="button" className="btn btn-primary" onClick={this.renderStageTwo}>Submit</button>
          </form>
        </div>
      )
    } else if (!this.state.stageTwoComplete) {
      return (
        <div className="container">
          <form className="stage-one-form">
            <div className="form-group">
              <label htmlFor="addressone">Address Line 1</label>
              <input type="text" name="addressone" value={form.addressone} onChange={this.onChange} className="form-control" placeholder="Enter Address Line 1" />
            </div>
            <div className="form-group">
              <label htmlFor="addresstwo">Address Line 2</label>
              <input type="text" name="addresstwo" value={form.addresstwo} onChange={this.onChange} className="form-control" placeholder="Enter Address Line 2" />
            </div>
            <div className="form-group">
              <label htmlFor="city">City</label>
              <input type="text" name="city" value={form.city} onChange={this.onChange} className="form-control" placeholder="Enter City" />
            </div>
            <div className="form-group">
              <label htmlFor="username">State</label>
              <input type="text" name="state" value={form.state} onChange={this.onChange} className="form-control" placeholder="Enter State" />
            </div>
            <div className="form-group">
              <label htmlFor="zip">Zip</label>
              <input type="text" name="zip" value={form.zip} onChange={this.onChange} className="form-control" placeholder="Enter Zip" />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input type="text" name="phone" value={form.phone} onChange={this.onChange} className="form-control" placeholder="Enter Phone" />
            </div>
            <button type="button" className="btn btn-primary" onClick={this.renderStageThree}>Submit</button>
          </form>
        </div>
      )
    } else if (!this.state.stageThreeComplete) {
      return (
        <div className="container">
          <form className="stage-one-form">
            <div className="form-group">
              <label htmlFor="ccnum">Credit Card #</label>
              <input type="text" name="ccnum" value={form.ccnum} onChange={this.onChange} className="form-control" placeholder="1234-5678-9109-1666" />
            </div>
            <div className="form-group">
              <label htmlFor="expiry">Expiration</label>
              <input type="text" name="expiry" value={form.expiry} onChange={this.onChange} className="form-control" placeholder="00/00" />
            </div>
            <div className="form-group">
              <label htmlFor="ccv">CCV</label>
              <input type="text" name="ccv" value={form.ccv} onChange={this.onChange} className="form-control" placeholder="123" />
            </div>
            <div className="form-group">
              <label htmlFor="billingzip">Billing Zip</label>
              <input type="text" name="billingzip" value={form.billingzip} onChange={this.onChange} className="form-control" placeholder="Enter Zip" />
            </div>
            <button type="button" className="btn btn-primary" onClick={this.renderStagePurchase}>Submit</button>
          </form>
        </div>
      )
    } else if(!this.state.finalStageComplete) {
      return (
        <div className="container">
          <form className="stage-one-form" onSubmit={this.handleSubmit}>
            <div className="form-group">
              <p>Name: {form.username}</p>
              <p>Address Line 1: {form.addressone}</p>
              <p>Address Line 2: {form.addresstwo}</p>
              <p>City: {form.city}</p>
              <p>State: {form.state}</p>
              <p>Zip: {form.zip}</p>
              <p>Phone: {form.phone}</p>
              <p>CC#: {form.ccnum}</p>
              <p>Expiration: {form.expiry}</p>
              <p>CCV: {form.ccv}</p>
              <p>Billing Zip: {form.billingzip}</p>
            </div>
            <button type="submit" className="btn btn-primary">Checkout</button>
          </form>
        </div>
      )
    } else {
      return(
        <App />
      )
    }
  }
}

export default Form;
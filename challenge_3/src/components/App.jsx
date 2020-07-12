import StageOne from './StageOne.js'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checkoutInProgress: false
    };
    this.renderStageOne = this.renderStageOne.bind(this);
  };

  renderStageOne() {
    this.setState(state => ( {
      checkoutInProgress: !state.checkoutInProgress
    }));
    console.log('STATE IS NOW: ', this.state.checkoutInProgress)
  }

  render() {
    if (!this.state.checkoutInProgress) {
      return (
        <div className="container">
          <button type="submit" className="btn btn-checkout btn-primary" onClick={this.renderStageOne}>
            Proceed to checkout
          </button>
        </div>
      )
    } else {
      return (
        <div className="container">
          <StageOne />
        </div>
      )
    }
  }
}

export default App;
import StageOne from './StageOne.js'
import StageTwo from './StageTwo.js';
import StageThree from './StageThree.js';

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
    console.log('Submit from Stage One Form Handler!')
    event.preventDefault();
    const data = new FormData(event.target);

    fetch('/submit', {
      method: 'POST',
      body: data
    });
  }
  handleSubmitStageTwo(event) {
    console.log('Submit from Stage Two Form Handler')
    event.preventDefault();
    const data = new FormData(event.target);

    fetch('/submit', {
      method: 'POST',
      body: data
    });
  }
  handleSubmitStageThree(event) {
    console.log('Submit from Stage Three Form Handler')
    event.preventDefault();
    const data = new FormData(event.target);

    fetch('/submit', {
      method: 'POST',
      body: data
    });
  }

  renderStageTwo() {
    console.log('Stage two state altered!')
    this.setState(state => ( {
      stageOneComplete: !state.stageOneComplete
    }));
  }
  renderStageThree() {
    console.log('Stage three state altered!')
    this.setState(state => ( {
      stageTwoComplete: !state.stageTwoComplete
    }));
  }
  renderStagePurchase() {
    console.log('Stage purchase state altered!')
    this.setState(state => ( {
      stageThreeComplete: !state.stageThreeComplete
    }));
  }

  render() {
    if (!this.state.stageOneComplete) {
      return(
        <StageOne handler={this.handleSubmitStageOne} render={this.renderStageTwo} />
      )
    } else if (!this.state.stageTwoComplete) {
      return(
        <StageTwo handler={this.handleSubmitStageTwo} render={this.renderStageThree}/>
      )
    } else if (!this.state.stageThreeComplete) {
      return (
        <StageThree handler={this.handleSubmitStageThree} render={this.renderStagePurchase}/>
      )
    } else {
      return (
        <h1>PURCHASE PAGE!</h1>
      )
    }
  }
}

export default Form;
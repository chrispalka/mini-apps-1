import StageOne from './StageOne.js';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checkoutInProgress: false
    };
    this.renderStageOne = this.renderStageOne.bind(this);
  }

  renderStageOne() {
    this.setState(state => ({
      checkoutInProgress: !state.checkoutInProgress
    }));
    console.log('STATE IS NOW: ', this.state.checkoutInProgress);
  }

  render() {
    if (!this.state.checkoutInProgress) {
      return React.createElement(
        'div',
        { className: 'container' },
        React.createElement(
          'button',
          { type: 'submit', className: 'btn btn-checkout btn-primary', onClick: this.renderStageOne },
          'Proceed to checkout'
        )
      );
    } else {
      return React.createElement(
        'div',
        { className: 'container' },
        React.createElement(StageOne, { name: 'Chris' })
      );
    }
  }
}

export default App;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0FwcC5qc3giXSwibmFtZXMiOlsiU3RhZ2VPbmUiLCJBcHAiLCJSZWFjdCIsIkNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwicHJvcHMiLCJzdGF0ZSIsImNoZWNrb3V0SW5Qcm9ncmVzcyIsInJlbmRlclN0YWdlT25lIiwiYmluZCIsInNldFN0YXRlIiwiY29uc29sZSIsImxvZyIsInJlbmRlciJdLCJtYXBwaW5ncyI6IkFBQUEsT0FBT0EsUUFBUCxNQUFxQixlQUFyQjtBQUNBLE1BQU1DLEdBQU4sU0FBa0JDLE1BQU1DLFNBQXhCLENBQWtDO0FBQ2hDQyxjQUFZQyxLQUFaLEVBQW1CO0FBQ2pCLFVBQU1BLEtBQU47QUFDQSxTQUFLQyxLQUFMLEdBQWE7QUFDWEMsMEJBQW9CO0FBRFQsS0FBYjtBQUdBLFNBQUtDLGNBQUwsR0FBc0IsS0FBS0EsY0FBTCxDQUFvQkMsSUFBcEIsQ0FBeUIsSUFBekIsQ0FBdEI7QUFDRDs7QUFFREQsbUJBQWlCO0FBQ2YsU0FBS0UsUUFBTCxDQUFjSixVQUFXO0FBQ3ZCQywwQkFBb0IsQ0FBQ0QsTUFBTUM7QUFESixLQUFYLENBQWQ7QUFHQUksWUFBUUMsR0FBUixDQUFZLGdCQUFaLEVBQThCLEtBQUtOLEtBQUwsQ0FBV0Msa0JBQXpDO0FBQ0Q7O0FBRURNLFdBQVM7QUFDUCxRQUFJLENBQUMsS0FBS1AsS0FBTCxDQUFXQyxrQkFBaEIsRUFBb0M7QUFDbEMsYUFDRTtBQUFBO0FBQUEsVUFBSyxXQUFVLFdBQWY7QUFDRTtBQUFBO0FBQUEsWUFBUSxNQUFLLFFBQWIsRUFBc0IsV0FBVSw4QkFBaEMsRUFBK0QsU0FBUyxLQUFLQyxjQUE3RTtBQUFBO0FBQUE7QUFERixPQURGO0FBT0QsS0FSRCxNQVFPO0FBQ0wsYUFDRTtBQUFBO0FBQUEsVUFBSyxXQUFVLFdBQWY7QUFDRSw0QkFBQyxRQUFELElBQVUsTUFBTSxPQUFoQjtBQURGLE9BREY7QUFLRDtBQUNGO0FBaEMrQjs7QUFtQ2xDLGVBQWVQLEdBQWYiLCJmaWxlIjoiQXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFN0YWdlT25lIGZyb20gJy4vU3RhZ2VPbmUuanMnXG5jbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgY2hlY2tvdXRJblByb2dyZXNzOiBmYWxzZVxuICAgIH07XG4gICAgdGhpcy5yZW5kZXJTdGFnZU9uZSA9IHRoaXMucmVuZGVyU3RhZ2VPbmUuYmluZCh0aGlzKTtcbiAgfTtcblxuICByZW5kZXJTdGFnZU9uZSgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHN0YXRlID0+ICgge1xuICAgICAgY2hlY2tvdXRJblByb2dyZXNzOiAhc3RhdGUuY2hlY2tvdXRJblByb2dyZXNzXG4gICAgfSkpO1xuICAgIGNvbnNvbGUubG9nKCdTVEFURSBJUyBOT1c6ICcsIHRoaXMuc3RhdGUuY2hlY2tvdXRJblByb2dyZXNzKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGlmICghdGhpcy5zdGF0ZS5jaGVja291dEluUHJvZ3Jlc3MpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1jaGVja291dCBidG4tcHJpbWFyeVwiIG9uQ2xpY2s9e3RoaXMucmVuZGVyU3RhZ2VPbmV9PlxuICAgICAgICAgICAgUHJvY2VlZCB0byBjaGVja291dFxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIClcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICA8U3RhZ2VPbmUgbmFtZT17J0NocmlzJ30gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICApXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDsiXX0=
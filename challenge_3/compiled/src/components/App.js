import Form from './Form.js';

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
          { type: 'button', className: 'btn btn-checkout btn-primary', onClick: this.renderStageOne },
          'Proceed to checkout'
        )
      );
    } else {
      return React.createElement(
        'div',
        { className: 'container' },
        React.createElement(Form, null)
      );
    }
  }
}

export default App;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0FwcC5qc3giXSwibmFtZXMiOlsiRm9ybSIsIkFwcCIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsInN0YXRlIiwiY2hlY2tvdXRJblByb2dyZXNzIiwicmVuZGVyU3RhZ2VPbmUiLCJiaW5kIiwic2V0U3RhdGUiLCJjb25zb2xlIiwibG9nIiwicmVuZGVyIl0sIm1hcHBpbmdzIjoiQUFBQSxPQUFPQSxJQUFQLE1BQWlCLFdBQWpCOztBQUVBLE1BQU1DLEdBQU4sU0FBa0JDLE1BQU1DLFNBQXhCLENBQWtDO0FBQ2hDQyxjQUFZQyxLQUFaLEVBQW1CO0FBQ2pCLFVBQU1BLEtBQU47QUFDQSxTQUFLQyxLQUFMLEdBQWE7QUFDWEMsMEJBQW9CO0FBRFQsS0FBYjtBQUdBLFNBQUtDLGNBQUwsR0FBc0IsS0FBS0EsY0FBTCxDQUFvQkMsSUFBcEIsQ0FBeUIsSUFBekIsQ0FBdEI7QUFDRDs7QUFFREQsbUJBQWlCO0FBQ2YsU0FBS0UsUUFBTCxDQUFjSixVQUFXO0FBQ3ZCQywwQkFBb0IsQ0FBQ0QsTUFBTUM7QUFESixLQUFYLENBQWQ7QUFHQUksWUFBUUMsR0FBUixDQUFZLGdCQUFaLEVBQThCLEtBQUtOLEtBQUwsQ0FBV0Msa0JBQXpDO0FBQ0Q7O0FBRURNLFdBQVM7QUFDUCxRQUFJLENBQUMsS0FBS1AsS0FBTCxDQUFXQyxrQkFBaEIsRUFBb0M7QUFDbEMsYUFDRTtBQUFBO0FBQUEsVUFBSyxXQUFVLFdBQWY7QUFDRTtBQUFBO0FBQUEsWUFBUSxNQUFLLFFBQWIsRUFBc0IsV0FBVSw4QkFBaEMsRUFBK0QsU0FBUyxLQUFLQyxjQUE3RTtBQUFBO0FBQUE7QUFERixPQURGO0FBT0QsS0FSRCxNQVFPO0FBQ0wsYUFDRTtBQUFBO0FBQUEsVUFBSyxXQUFVLFdBQWY7QUFDRSw0QkFBQyxJQUFEO0FBREYsT0FERjtBQUtEO0FBQ0Y7QUFoQytCOztBQW1DbEMsZUFBZVAsR0FBZiIsImZpbGUiOiJBcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRm9ybSBmcm9tICcuL0Zvcm0uanMnXG5cbmNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBjaGVja291dEluUHJvZ3Jlc3M6IGZhbHNlXG4gICAgfTtcbiAgICB0aGlzLnJlbmRlclN0YWdlT25lID0gdGhpcy5yZW5kZXJTdGFnZU9uZS5iaW5kKHRoaXMpO1xuICB9O1xuXG4gIHJlbmRlclN0YWdlT25lKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoc3RhdGUgPT4gKCB7XG4gICAgICBjaGVja291dEluUHJvZ3Jlc3M6ICFzdGF0ZS5jaGVja291dEluUHJvZ3Jlc3NcbiAgICB9KSk7XG4gICAgY29uc29sZS5sb2coJ1NUQVRFIElTIE5PVzogJywgdGhpcy5zdGF0ZS5jaGVja291dEluUHJvZ3Jlc3MpXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgaWYgKCF0aGlzLnN0YXRlLmNoZWNrb3V0SW5Qcm9ncmVzcykge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLWNoZWNrb3V0IGJ0bi1wcmltYXJ5XCIgb25DbGljaz17dGhpcy5yZW5kZXJTdGFnZU9uZX0+XG4gICAgICAgICAgICBQcm9jZWVkIHRvIGNoZWNrb3V0XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgIDxGb3JtIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcHA7Il19
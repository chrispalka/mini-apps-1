
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
          { type: 'submit', className: 'btn btn-checkout btn-primary', onClick: this.renderStageOne },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0FwcC5qc3giXSwibmFtZXMiOlsiRm9ybSIsIkFwcCIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsInN0YXRlIiwiY2hlY2tvdXRJblByb2dyZXNzIiwicmVuZGVyU3RhZ2VPbmUiLCJiaW5kIiwic2V0U3RhdGUiLCJjb25zb2xlIiwibG9nIiwicmVuZGVyIl0sIm1hcHBpbmdzIjoiO0FBQ0EsT0FBT0EsSUFBUCxNQUFpQixXQUFqQjs7QUFHQSxNQUFNQyxHQUFOLFNBQWtCQyxNQUFNQyxTQUF4QixDQUFrQztBQUNoQ0MsY0FBWUMsS0FBWixFQUFtQjtBQUNqQixVQUFNQSxLQUFOO0FBQ0EsU0FBS0MsS0FBTCxHQUFhO0FBQ1hDLDBCQUFvQjtBQURULEtBQWI7QUFHQSxTQUFLQyxjQUFMLEdBQXNCLEtBQUtBLGNBQUwsQ0FBb0JDLElBQXBCLENBQXlCLElBQXpCLENBQXRCO0FBQ0Q7O0FBRURELG1CQUFpQjtBQUNmLFNBQUtFLFFBQUwsQ0FBY0osVUFBVztBQUN2QkMsMEJBQW9CLENBQUNELE1BQU1DO0FBREosS0FBWCxDQUFkO0FBR0FJLFlBQVFDLEdBQVIsQ0FBWSxnQkFBWixFQUE4QixLQUFLTixLQUFMLENBQVdDLGtCQUF6QztBQUNEOztBQUVETSxXQUFTO0FBQ1AsUUFBSSxDQUFDLEtBQUtQLEtBQUwsQ0FBV0Msa0JBQWhCLEVBQW9DO0FBQ2xDLGFBQ0U7QUFBQTtBQUFBLFVBQUssV0FBVSxXQUFmO0FBQ0U7QUFBQTtBQUFBLFlBQVEsTUFBSyxRQUFiLEVBQXNCLFdBQVUsOEJBQWhDLEVBQStELFNBQVMsS0FBS0MsY0FBN0U7QUFBQTtBQUFBO0FBREYsT0FERjtBQU9ELEtBUkQsTUFRTztBQUNMLGFBQ0U7QUFBQTtBQUFBLFVBQUssV0FBVSxXQUFmO0FBQ0UsNEJBQUMsSUFBRDtBQURGLE9BREY7QUFLRDtBQUNGO0FBaEMrQjs7QUFtQ2xDLGVBQWVQLEdBQWYiLCJmaWxlIjoiQXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgRm9ybSBmcm9tICcuL0Zvcm0uanMnXG5cblxuY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGNoZWNrb3V0SW5Qcm9ncmVzczogZmFsc2VcbiAgICB9O1xuICAgIHRoaXMucmVuZGVyU3RhZ2VPbmUgPSB0aGlzLnJlbmRlclN0YWdlT25lLmJpbmQodGhpcyk7XG4gIH07XG5cbiAgcmVuZGVyU3RhZ2VPbmUoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZShzdGF0ZSA9PiAoIHtcbiAgICAgIGNoZWNrb3V0SW5Qcm9ncmVzczogIXN0YXRlLmNoZWNrb3V0SW5Qcm9ncmVzc1xuICAgIH0pKTtcbiAgICBjb25zb2xlLmxvZygnU1RBVEUgSVMgTk9XOiAnLCB0aGlzLnN0YXRlLmNoZWNrb3V0SW5Qcm9ncmVzcylcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBpZiAoIXRoaXMuc3RhdGUuY2hlY2tvdXRJblByb2dyZXNzKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImJ0biBidG4tY2hlY2tvdXQgYnRuLXByaW1hcnlcIiBvbkNsaWNrPXt0aGlzLnJlbmRlclN0YWdlT25lfT5cbiAgICAgICAgICAgIFByb2NlZWQgdG8gY2hlY2tvdXRcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgPEZvcm0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICApXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDsiXX0=
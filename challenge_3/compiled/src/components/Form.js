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
    console.log('Submit from FORM!');
    const data = new FormData(event.target);

    fetch('/submit', {
      method: 'POST',
      body: data
    });
  }
  handleSubmitStageTwo(event) {
    event.preventDefault();
    console.log('Submit from FORM!');
    const data = new FormData(event.target);

    fetch('/submit', {
      method: 'POST',
      body: data
    });
  }

  renderStageTwo() {
    this.setState(state => ({
      stageOneComplete: !state.stageOneComplete
    }));
  }
  renderStageThree() {
    this.setState(state => ({
      stageTwoComplete: !state.stageTwoComplete
    }));
  }
  renderStagePurchase() {
    this.setState(state => ({
      stageThreeComplete: !state.stageThreeComplete
    }));
  }

  render() {
    if (!this.state.stageOneComplete) {
      return React.createElement(
        'form',
        { onSubmit: this.handleSubmitStageOne, className: 'stage-one-form' },
        React.createElement(
          'div',
          { className: 'form-group' },
          React.createElement(
            'label',
            { htmlFor: 'username' },
            'Name'
          ),
          React.createElement('input', { type: 'text', name: 'username', className: 'form-control', id: 'username', placeholder: 'Enter First Name' })
        ),
        React.createElement(
          'div',
          { className: 'form-group' },
          React.createElement(
            'label',
            { htmlFor: 'email' },
            'Email'
          ),
          React.createElement('input', { type: 'email', name: 'email', className: 'form-control', id: 'email', placeholder: 'Enter email' })
        ),
        React.createElement(
          'div',
          { className: 'form-group' },
          React.createElement(
            'label',
            { htmlFor: 'password' },
            'Password'
          ),
          React.createElement('input', { type: 'password', name: 'password', className: 'form-control', id: 'password', placeholder: 'Password' })
        ),
        React.createElement(
          'button',
          { type: 'submit', className: 'btn btn-primary', onClick: this.renderStageTwo },
          'Submit'
        )
      );
    } else if (!this.state.stageTwoComplete) {
      return React.createElement(
        'form',
        { onSubmit: this.handleSubmitStageTwo, className: 'stage-one-form' },
        React.createElement(
          'div',
          { className: 'form-group' },
          React.createElement(
            'label',
            { htmlFor: 'addressone' },
            'Address Line 1'
          ),
          React.createElement('input', { type: 'text', name: 'addressone', className: 'form-control', placeholder: 'Enter Address Line 1' })
        ),
        React.createElement(
          'div',
          { className: 'form-group' },
          React.createElement(
            'label',
            { htmlFor: 'addresstwo' },
            'Address Line 2'
          ),
          React.createElement('input', { type: 'text', name: 'addresstwo', className: 'form-control', placeholder: 'Enter Address Line 2' })
        ),
        React.createElement(
          'div',
          { className: 'form-group' },
          React.createElement(
            'label',
            { htmlFor: 'city' },
            'City'
          ),
          React.createElement('input', { type: 'text', name: 'city', className: 'form-control', placeholder: 'Enter City' })
        ),
        React.createElement(
          'div',
          { className: 'form-group' },
          React.createElement(
            'label',
            { htmlFor: 'username' },
            'State'
          ),
          React.createElement('input', { type: 'text', name: 'state', className: 'form-control', placeholder: 'Enter State' })
        ),
        React.createElement(
          'div',
          { className: 'form-group' },
          React.createElement(
            'label',
            { htmlFor: 'zip' },
            'Zip'
          ),
          React.createElement('input', { type: 'text', name: 'zip', className: 'form-control', placeholder: 'Enter Zip' })
        ),
        React.createElement(
          'div',
          { className: 'form-group' },
          React.createElement(
            'label',
            { htmlFor: 'phone' },
            'Phone'
          ),
          React.createElement('input', { type: 'text', name: 'phone', className: 'form-control', placeholder: 'Enter Phone' })
        ),
        React.createElement(
          'button',
          { type: 'submit', className: 'btn btn-primary', onClick: this.renderStageThree },
          'Submit'
        )
      );
    } else if (!this.state.stageThreeComplete) {
      return React.createElement(
        'form',
        { onSubmit: this.handleSubmit, className: 'stage-one-form' },
        React.createElement(
          'div',
          { className: 'form-group' },
          React.createElement(
            'label',
            { htmlFor: 'ccnum' },
            'Credit Card #'
          ),
          React.createElement('input', { type: 'text', name: 'ccnum', className: 'form-control', placeholder: '1234-5678-9109-1666' })
        ),
        React.createElement(
          'div',
          { className: 'form-group' },
          React.createElement(
            'label',
            { htmlFor: 'expiry' },
            'Expiration'
          ),
          React.createElement('input', { type: 'text', name: 'expiry', className: 'form-control', placeholder: '00/00' })
        ),
        React.createElement(
          'div',
          { className: 'form-group' },
          React.createElement(
            'label',
            { htmlFor: 'ccv' },
            'CCV'
          ),
          React.createElement('input', { type: 'text', name: 'ccv', className: 'form-control', placeholder: '123' })
        ),
        React.createElement(
          'div',
          { className: 'form-group' },
          React.createElement(
            'label',
            { htmlFor: 'billingzip' },
            'Billing Zip'
          ),
          React.createElement('input', { type: 'text', name: 'billingzip', className: 'form-control', placeholder: 'Enter Zip' })
        ),
        React.createElement(
          'button',
          { type: 'submit', className: 'btn btn-primary', onClick: this.renderStagePurchase },
          'Submit'
        )
      );
    } else {
      return React.createElement(
        'h1',
        null,
        'PURCHASE PAGE!'
      );
    }
  }
}

export default Form;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0Zvcm0uanN4Il0sIm5hbWVzIjpbIkZvcm0iLCJSZWFjdCIsIkNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwic3RhdGUiLCJzdGFnZU9uZUNvbXBsZXRlIiwic3RhZ2VUd29Db21wbGV0ZSIsInN0YWdlVGhyZWVDb21wbGV0ZSIsImhhbmRsZVN1Ym1pdFN0YWdlT25lIiwiYmluZCIsImhhbmRsZVN1Ym1pdFN0YWdlVHdvIiwicmVuZGVyU3RhZ2VUd28iLCJyZW5kZXJTdGFnZVRocmVlIiwicmVuZGVyU3RhZ2VQdXJjaGFzZSIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsIkZvcm1EYXRhIiwidGFyZ2V0IiwiZmV0Y2giLCJtZXRob2QiLCJib2R5Iiwic2V0U3RhdGUiLCJyZW5kZXIiLCJoYW5kbGVTdWJtaXQiXSwibWFwcGluZ3MiOiJBQUFBLE1BQU1BLElBQU4sU0FBbUJDLE1BQU1DLFNBQXpCLENBQW1DO0FBQ2pDQyxnQkFBYztBQUNaO0FBQ0EsU0FBS0MsS0FBTCxHQUFhO0FBQ1hDLHdCQUFrQixLQURQO0FBRVhDLHdCQUFrQixLQUZQO0FBR1hDLDBCQUFvQjtBQUhULEtBQWI7QUFLQSxTQUFLQyxvQkFBTCxHQUE0QixLQUFLQSxvQkFBTCxDQUEwQkMsSUFBMUIsQ0FBK0IsSUFBL0IsQ0FBNUI7QUFDQSxTQUFLQyxvQkFBTCxHQUE0QixLQUFLQSxvQkFBTCxDQUEwQkQsSUFBMUIsQ0FBK0IsSUFBL0IsQ0FBNUI7QUFDQSxTQUFLRSxjQUFMLEdBQXNCLEtBQUtBLGNBQUwsQ0FBb0JGLElBQXBCLENBQXlCLElBQXpCLENBQXRCO0FBQ0EsU0FBS0csZ0JBQUwsR0FBd0IsS0FBS0EsZ0JBQUwsQ0FBc0JILElBQXRCLENBQTJCLElBQTNCLENBQXhCO0FBQ0EsU0FBS0ksbUJBQUwsR0FBMkIsS0FBS0EsbUJBQUwsQ0FBeUJKLElBQXpCLENBQThCLElBQTlCLENBQTNCO0FBQ0Q7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QUFBQSxjQUFPLFNBQVEsT0FBZjtBQUFBO0FBQUEsV0FERjtBQUVFLHlDQUFPLE1BQUssTUFBWixFQUFtQixNQUFLLE9BQXhCLEVBQWdDLFdBQVUsY0FBMUMsRUFBMEQsYUFBWSxxQkFBdEU7QUFGRixTQURBO0FBS0E7QUFBQTtBQUFBLFlBQUssV0FBVSxZQUFmO0FBQ0U7QUFBQTtBQUFBLGNBQU8sU0FBUSxRQUFmO0FBQUE7QUFBQSxXQURGO0FBRUUseUNBQU8sTUFBSyxNQUFaLEVBQW1CLE1BQUssUUFBeEIsRUFBaUMsV0FBVSxjQUEzQyxFQUEwRCxhQUFZLE9BQXRFO0FBRkYsU0FMQTtBQVNBO0FBQUE7QUFBQSxZQUFLLFdBQVUsWUFBZjtBQUNFO0FBQUE7QUFBQSxjQUFPLFNBQVEsS0FBZjtBQUFBO0FBQUEsV0FERjtBQUVFLHlDQUFPLE1BQUssTUFBWixFQUFtQixNQUFLLEtBQXhCLEVBQThCLFdBQVUsY0FBeEMsRUFBdUQsYUFBWSxLQUFuRTtBQUZGLFNBVEE7QUFhQTtBQUFBO0FBQUEsWUFBSyxXQUFVLFlBQWY7QUFDRTtBQUFBO0FBQUEsY0FBTyxTQUFRLFlBQWY7QUFBQTtBQUFBLFdBREY7QUFFRSx5Q0FBTyxNQUFLLE1BQVosRUFBbUIsTUFBSyxZQUF4QixFQUFxQyxXQUFVLGNBQS9DLEVBQThELGFBQVksV0FBMUU7QUFGRixTQWJBO0FBaUJBO0FBQUE7QUFBQSxZQUFRLE1BQUssUUFBYixFQUFzQixXQUFVLGlCQUFoQyxFQUFrRCxTQUFTLEtBQUtiLG1CQUFoRTtBQUFBO0FBQUE7QUFqQkEsT0FERjtBQXFCRCxLQXRCTSxNQXNCQTtBQUNMLGFBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQURGO0FBR0Q7QUFDRjtBQWpJZ0M7O0FBb0luQyxlQUFlYixJQUFmIiwiZmlsZSI6IkZvcm0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBGb3JtIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgc3RhZ2VPbmVDb21wbGV0ZTogZmFsc2UsXG4gICAgICBzdGFnZVR3b0NvbXBsZXRlOiBmYWxzZSxcbiAgICAgIHN0YWdlVGhyZWVDb21wbGV0ZTogZmFsc2VcbiAgICB9O1xuICAgIHRoaXMuaGFuZGxlU3VibWl0U3RhZ2VPbmUgPSB0aGlzLmhhbmRsZVN1Ym1pdFN0YWdlT25lLmJpbmQodGhpcyk7XG4gICAgdGhpcy5oYW5kbGVTdWJtaXRTdGFnZVR3byA9IHRoaXMuaGFuZGxlU3VibWl0U3RhZ2VUd28uYmluZCh0aGlzKTtcbiAgICB0aGlzLnJlbmRlclN0YWdlVHdvID0gdGhpcy5yZW5kZXJTdGFnZVR3by5iaW5kKHRoaXMpO1xuICAgIHRoaXMucmVuZGVyU3RhZ2VUaHJlZSA9IHRoaXMucmVuZGVyU3RhZ2VUaHJlZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMucmVuZGVyU3RhZ2VQdXJjaGFzZSA9IHRoaXMucmVuZGVyU3RhZ2VQdXJjaGFzZS5iaW5kKHRoaXMpO1xuICB9XG5cblxuICBoYW5kbGVTdWJtaXRTdGFnZU9uZShldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc29sZS5sb2coJ1N1Ym1pdCBmcm9tIEZPUk0hJylcbiAgICBjb25zdCBkYXRhID0gbmV3IEZvcm1EYXRhKGV2ZW50LnRhcmdldCk7XG5cbiAgICBmZXRjaCgnL3N1Ym1pdCcsIHtcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgYm9keTogZGF0YVxuICAgIH0pO1xuICB9XG4gIGhhbmRsZVN1Ym1pdFN0YWdlVHdvKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zb2xlLmxvZygnU3VibWl0IGZyb20gRk9STSEnKVxuICAgIGNvbnN0IGRhdGEgPSBuZXcgRm9ybURhdGEoZXZlbnQudGFyZ2V0KTtcblxuICAgIGZldGNoKCcvc3VibWl0Jywge1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBib2R5OiBkYXRhXG4gICAgfSk7XG4gIH1cblxuICByZW5kZXJTdGFnZVR3bygpIHtcbiAgICB0aGlzLnNldFN0YXRlKHN0YXRlID0+ICgge1xuICAgICAgc3RhZ2VPbmVDb21wbGV0ZTogIXN0YXRlLnN0YWdlT25lQ29tcGxldGVcbiAgICB9KSk7XG4gIH1cbiAgcmVuZGVyU3RhZ2VUaHJlZSgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHN0YXRlID0+ICgge1xuICAgICAgc3RhZ2VUd29Db21wbGV0ZTogIXN0YXRlLnN0YWdlVHdvQ29tcGxldGVcbiAgICB9KSk7XG4gIH1cbiAgcmVuZGVyU3RhZ2VQdXJjaGFzZSgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHN0YXRlID0+ICgge1xuICAgICAgc3RhZ2VUaHJlZUNvbXBsZXRlOiAhc3RhdGUuc3RhZ2VUaHJlZUNvbXBsZXRlXG4gICAgfSkpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGlmICghdGhpcy5zdGF0ZS5zdGFnZU9uZUNvbXBsZXRlKSB7XG4gICAgICByZXR1cm4oXG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXt0aGlzLmhhbmRsZVN1Ym1pdFN0YWdlT25lfSBjbGFzc05hbWU9XCJzdGFnZS1vbmUtZm9ybVwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInVzZXJuYW1lXCI+TmFtZTwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInVzZXJuYW1lXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgaWQ9XCJ1c2VybmFtZVwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgRmlyc3QgTmFtZVwiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImVtYWlsXCI+RW1haWw8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZW1haWxcIiBuYW1lPVwiZW1haWxcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBpZD1cImVtYWlsXCIgcGxhY2Vob2xkZXI9XCJFbnRlciBlbWFpbFwiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInBhc3N3b3JkXCI+UGFzc3dvcmQ8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBuYW1lPVwicGFzc3dvcmRcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBpZD1cInBhc3N3b3JkXCIgcGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIiBvbkNsaWNrPXt0aGlzLnJlbmRlclN0YWdlVHdvfT5TdWJtaXQ8L2J1dHRvbj5cbiAgICAgIDwvZm9ybT5cbiAgICAgIClcbiAgICB9IGVsc2UgaWYgKCF0aGlzLnN0YXRlLnN0YWdlVHdvQ29tcGxldGUpIHtcbiAgICAgIHJldHVybihcbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e3RoaXMuaGFuZGxlU3VibWl0U3RhZ2VUd299IGNsYXNzTmFtZT1cInN0YWdlLW9uZS1mb3JtXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiYWRkcmVzc29uZVwiPkFkZHJlc3MgTGluZSAxPC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiYWRkcmVzc29uZVwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiICBwbGFjZWhvbGRlcj1cIkVudGVyIEFkZHJlc3MgTGluZSAxXCIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiYWRkcmVzc3R3b1wiPkFkZHJlc3MgTGluZSAyPC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiYWRkcmVzc3R3b1wiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgQWRkcmVzcyBMaW5lIDJcIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJjaXR5XCI+Q2l0eTwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImNpdHlcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBwbGFjZWhvbGRlcj1cIkVudGVyIENpdHlcIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ1c2VybmFtZVwiPlN0YXRlPC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwic3RhdGVcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBwbGFjZWhvbGRlcj1cIkVudGVyIFN0YXRlXCIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiemlwXCI+WmlwPC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiemlwXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCJFbnRlciBaaXBcIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwaG9uZVwiPlBob25lPC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwicGhvbmVcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBwbGFjZWhvbGRlcj1cIkVudGVyIFBob25lXCIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiIG9uQ2xpY2s9e3RoaXMucmVuZGVyU3RhZ2VUaHJlZX0+U3VibWl0PC9idXR0b24+XG4gICAgICA8L2Zvcm0+XG4gICAgICApXG4gICAgfSBlbHNlIGlmICghdGhpcy5zdGF0ZS5zdGFnZVRocmVlQ29tcGxldGUpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXt0aGlzLmhhbmRsZVN1Ym1pdH0gY2xhc3NOYW1lPVwic3RhZ2Utb25lLWZvcm1cIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJjY251bVwiPkNyZWRpdCBDYXJkICM8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJjY251bVwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiICBwbGFjZWhvbGRlcj1cIjEyMzQtNTY3OC05MTA5LTE2NjZcIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJleHBpcnlcIj5FeHBpcmF0aW9uPC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiZXhwaXJ5XCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCIwMC8wMFwiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImNjdlwiPkNDVjwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImNjdlwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHBsYWNlaG9sZGVyPVwiMTIzXCIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiYmlsbGluZ3ppcFwiPkJpbGxpbmcgWmlwPC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiYmlsbGluZ3ppcFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgWmlwXCIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiIG9uQ2xpY2s9e3RoaXMucmVuZGVyU3RhZ2VQdXJjaGFzZX0+U3VibWl0PC9idXR0b24+XG4gICAgICA8L2Zvcm0+XG4gICAgICApXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxoMT5QVVJDSEFTRSBQQUdFITwvaDE+XG4gICAgICApXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZvcm07Il19
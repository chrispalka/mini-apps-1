// import StageOne from './StageOne.js'
// import StageTwo from './StageTwo.js';
// import StageThree from './StageThree.js';
import App from './App.js';

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
        billingzip: ''
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
    const data = new FormData();
    for (var key in this.state.form) {
      data.append(key, this.state.form[key]);
    }
    console.log('Submit!!');
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
    console.log('Stage two state altered!');
    this.setState(state => ({
      stageOneComplete: !state.stageOneComplete
    }));
  }
  renderStageThree() {
    console.log('Stage three state altered!');
    this.setState(state => ({
      stageTwoComplete: !state.stageTwoComplete
    }));
  }
  renderStagePurchase() {
    console.log('Stage purchase state altered!');
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
      return React.createElement(
        'div',
        { className: 'container' },
        React.createElement(
          'form',
          { className: 'stage-one-form' },
          React.createElement(
            'div',
            { className: 'form-group' },
            React.createElement(
              'label',
              { htmlFor: 'username' },
              'Name'
            ),
            React.createElement('input', { type: 'text', name: 'username', value: form.username, onChange: this.onChange, className: 'form-control', id: 'username', placeholder: 'Enter First Name' })
          ),
          React.createElement(
            'div',
            { className: 'form-group' },
            React.createElement(
              'label',
              { htmlFor: 'email' },
              'Email'
            ),
            React.createElement('input', { type: 'email', name: 'email', value: form.email, onChange: this.onChange, className: 'form-control', id: 'email', placeholder: 'Enter email' })
          ),
          React.createElement(
            'div',
            { className: 'form-group' },
            React.createElement(
              'label',
              { htmlFor: 'password' },
              'Password'
            ),
            React.createElement('input', { type: 'password', name: 'password', value: form.password, onChange: this.onChange, className: 'form-control', id: 'password', placeholder: 'Password' })
          ),
          React.createElement(
            'button',
            { type: 'button', className: 'btn btn-primary', onClick: this.renderStageTwo },
            'Submit'
          )
        )
      );
    } else if (!this.state.stageTwoComplete) {
      return React.createElement(
        'div',
        { className: 'container' },
        React.createElement(
          'form',
          { className: 'stage-one-form' },
          React.createElement(
            'div',
            { className: 'form-group' },
            React.createElement(
              'label',
              { htmlFor: 'addressone' },
              'Address Line 1'
            ),
            React.createElement('input', { type: 'text', name: 'addressone', value: form.addressone, onChange: this.onChange, className: 'form-control', placeholder: 'Enter Address Line 1' })
          ),
          React.createElement(
            'div',
            { className: 'form-group' },
            React.createElement(
              'label',
              { htmlFor: 'addresstwo' },
              'Address Line 2'
            ),
            React.createElement('input', { type: 'text', name: 'addresstwo', value: form.addresstwo, onChange: this.onChange, className: 'form-control', placeholder: 'Enter Address Line 2' })
          ),
          React.createElement(
            'div',
            { className: 'form-group' },
            React.createElement(
              'label',
              { htmlFor: 'city' },
              'City'
            ),
            React.createElement('input', { type: 'text', name: 'city', value: form.city, onChange: this.onChange, className: 'form-control', placeholder: 'Enter City' })
          ),
          React.createElement(
            'div',
            { className: 'form-group' },
            React.createElement(
              'label',
              { htmlFor: 'username' },
              'State'
            ),
            React.createElement('input', { type: 'text', name: 'state', value: form.state, onChange: this.onChange, className: 'form-control', placeholder: 'Enter State' })
          ),
          React.createElement(
            'div',
            { className: 'form-group' },
            React.createElement(
              'label',
              { htmlFor: 'zip' },
              'Zip'
            ),
            React.createElement('input', { type: 'text', name: 'zip', value: form.zip, onChange: this.onChange, className: 'form-control', placeholder: 'Enter Zip' })
          ),
          React.createElement(
            'div',
            { className: 'form-group' },
            React.createElement(
              'label',
              { htmlFor: 'phone' },
              'Phone'
            ),
            React.createElement('input', { type: 'text', name: 'phone', value: form.phone, onChange: this.onChange, className: 'form-control', placeholder: 'Enter Phone' })
          ),
          React.createElement(
            'button',
            { type: 'button', className: 'btn btn-primary', onClick: this.renderStageThree },
            'Submit'
          )
        )
      );
    } else if (!this.state.stageThreeComplete) {
      return React.createElement(
        'div',
        { className: 'container' },
        React.createElement(
          'form',
          { className: 'stage-one-form' },
          React.createElement(
            'div',
            { className: 'form-group' },
            React.createElement(
              'label',
              { htmlFor: 'ccnum' },
              'Credit Card #'
            ),
            React.createElement('input', { type: 'text', name: 'ccnum', value: form.ccnum, onChange: this.onChange, className: 'form-control', placeholder: '1234-5678-9109-1666' })
          ),
          React.createElement(
            'div',
            { className: 'form-group' },
            React.createElement(
              'label',
              { htmlFor: 'expiry' },
              'Expiration'
            ),
            React.createElement('input', { type: 'text', name: 'expiry', value: form.expiry, onChange: this.onChange, className: 'form-control', placeholder: '00/00' })
          ),
          React.createElement(
            'div',
            { className: 'form-group' },
            React.createElement(
              'label',
              { htmlFor: 'ccv' },
              'CCV'
            ),
            React.createElement('input', { type: 'text', name: 'ccv', value: form.ccv, onChange: this.onChange, className: 'form-control', placeholder: '123' })
          ),
          React.createElement(
            'div',
            { className: 'form-group' },
            React.createElement(
              'label',
              { htmlFor: 'billingzip' },
              'Billing Zip'
            ),
            React.createElement('input', { type: 'text', name: 'billingzip', value: form.billingzip, onChange: this.onChange, className: 'form-control', placeholder: 'Enter Zip' })
          ),
          React.createElement(
            'button',
            { type: 'button', className: 'btn btn-primary', onClick: this.renderStagePurchase },
            'Submit'
          )
        )
      );
    } else if (!this.state.finalStageComplete) {
      return React.createElement(
        'div',
        { className: 'container' },
        React.createElement(
          'form',
          { className: 'stage-one-form', onSubmit: this.handleSubmit },
          React.createElement(
            'div',
            { className: 'form-group' },
            React.createElement(
              'p',
              null,
              'Name: ',
              form.username
            ),
            React.createElement(
              'p',
              null,
              'Address Line 1: ',
              form.addressone
            ),
            React.createElement(
              'p',
              null,
              'Address Line 2: ',
              form.addresstwo
            ),
            React.createElement(
              'p',
              null,
              'City: ',
              form.city
            ),
            React.createElement(
              'p',
              null,
              'State: ',
              form.state
            ),
            React.createElement(
              'p',
              null,
              'Zip: ',
              form.zip
            ),
            React.createElement(
              'p',
              null,
              'Phone: ',
              form.phone
            ),
            React.createElement(
              'p',
              null,
              'CC#: ',
              form.ccnum
            ),
            React.createElement(
              'p',
              null,
              'Expiration: ',
              form.expiry
            ),
            React.createElement(
              'p',
              null,
              'CCV: ',
              form.ccv
            ),
            React.createElement(
              'p',
              null,
              'Billing Zip: ',
              form.billingzip
            )
          ),
          React.createElement(
            'button',
            { type: 'submit', className: 'btn btn-primary' },
            'Checkout'
          )
        )
      );
    } else {
      return React.createElement(App, null);
    }
  }
}

export default Form;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0Zvcm0uanN4Il0sIm5hbWVzIjpbIkFwcCIsIkZvcm0iLCJSZWFjdCIsIkNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwic3RhdGUiLCJmb3JtIiwidXNlcm5hbWUiLCJlbWFpbCIsInBhc3N3b3JkIiwiYWRkcmVzc29uZSIsImFkZHJlc3N0d28iLCJjaXR5IiwiemlwIiwicGhvbmUiLCJjY251bSIsImV4cGlyeSIsImNjdiIsImJpbGxpbmd6aXAiLCJzdGFnZU9uZUNvbXBsZXRlIiwic3RhZ2VUd29Db21wbGV0ZSIsInN0YWdlVGhyZWVDb21wbGV0ZSIsImZpbmFsU3RhZ2VDb21wbGV0ZSIsImhhbmRsZVN1Ym1pdCIsImJpbmQiLCJvbkNoYW5nZSIsInJlbmRlclN0YWdlVHdvIiwicmVuZGVyU3RhZ2VUaHJlZSIsInJlbmRlclN0YWdlUHVyY2hhc2UiLCJlIiwicHJldmVudERlZmF1bHQiLCJkYXRhIiwiRm9ybURhdGEiLCJrZXkiLCJhcHBlbmQiLCJjb25zb2xlIiwibG9nIiwiZmV0Y2giLCJtZXRob2QiLCJib2R5Iiwic2V0U3RhdGUiLCJzdG9yZSIsInRhcmdldCIsIm5hbWUiLCJ2YWx1ZSIsInJlbmRlciJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0EsT0FBT0EsR0FBUCxNQUFnQixVQUFoQjs7QUFFQSxNQUFNQyxJQUFOLFNBQW1CQyxNQUFNQyxTQUF6QixDQUFtQztBQUNqQ0MsZ0JBQWM7QUFDWjtBQUNBLFNBQUtDLEtBQUwsR0FBYTtBQUNYQyxZQUFNO0FBQ0pDLGtCQUFVLEVBRE47QUFFSkMsZUFBTyxFQUZIO0FBR0pDLGtCQUFVLEVBSE47QUFJSkMsb0JBQVksRUFKUjtBQUtKQyxvQkFBWSxFQUxSO0FBTUpDLGNBQU0sRUFORjtBQU9KUCxlQUFPLEVBUEg7QUFRSlEsYUFBSyxFQVJEO0FBU0pDLGVBQU8sRUFUSDtBQVVKQyxlQUFPLEVBVkg7QUFXSkMsZ0JBQVEsRUFYSjtBQVlKQyxhQUFL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QUFBO0FBQUE7QUFBV1AsbUJBQUtRO0FBQWhCLGFBUEY7QUFRRTtBQUFBO0FBQUE7QUFBQTtBQUFTUixtQkFBS1M7QUFBZCxhQVJGO0FBU0U7QUFBQTtBQUFBO0FBQUE7QUFBZ0JULG1CQUFLVTtBQUFyQixhQVRGO0FBVUU7QUFBQTtBQUFBO0FBQUE7QUFBU1YsbUJBQUtXO0FBQWQsYUFWRjtBQVdFO0FBQUE7QUFBQTtBQUFBO0FBQWlCWCxtQkFBS1k7QUFBdEI7QUFYRixXQURGO0FBY0U7QUFBQTtBQUFBLGNBQVEsTUFBSyxRQUFiLEVBQXNCLFdBQVUsaUJBQWhDO0FBQUE7QUFBQTtBQWRGO0FBREYsT0FERjtBQW9CRCxLQXJCTSxNQXFCQTtBQUNMLGFBQ0Usb0JBQUMsR0FBRCxPQURGO0FBR0Q7QUFDRjtBQXpMZ0M7O0FBNExuQyxlQUFlakIsSUFBZiIsImZpbGUiOiJGb3JtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IFN0YWdlT25lIGZyb20gJy4vU3RhZ2VPbmUuanMnXG4vLyBpbXBvcnQgU3RhZ2VUd28gZnJvbSAnLi9TdGFnZVR3by5qcyc7XG4vLyBpbXBvcnQgU3RhZ2VUaHJlZSBmcm9tICcuL1N0YWdlVGhyZWUuanMnO1xuaW1wb3J0IEFwcCBmcm9tICcuL0FwcC5qcydcblxuY2xhc3MgRm9ybSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGZvcm06IHtcbiAgICAgICAgdXNlcm5hbWU6ICcnLFxuICAgICAgICBlbWFpbDogJycsXG4gICAgICAgIHBhc3N3b3JkOiAnJyxcbiAgICAgICAgYWRkcmVzc29uZTogJycsXG4gICAgICAgIGFkZHJlc3N0d286ICcnLFxuICAgICAgICBjaXR5OiAnJyxcbiAgICAgICAgc3RhdGU6ICcnLFxuICAgICAgICB6aXA6ICcnLFxuICAgICAgICBwaG9uZTogJycsXG4gICAgICAgIGNjbnVtOiAnJyxcbiAgICAgICAgZXhwaXJ5OiAnJyxcbiAgICAgICAgY2N2OiAnJyxcbiAgICAgICAgYmlsbGluZ3ppcDogJycsXG4gICAgICB9LFxuXG4gICAgICBzdGFnZU9uZUNvbXBsZXRlOiBmYWxzZSxcbiAgICAgIHN0YWdlVHdvQ29tcGxldGU6IGZhbHNlLFxuICAgICAgc3RhZ2VUaHJlZUNvbXBsZXRlOiBmYWxzZSxcbiAgICAgIGZpbmFsU3RhZ2VDb21wbGV0ZTogZmFsc2VcbiAgICB9O1xuICAgIHRoaXMuaGFuZGxlU3VibWl0ID0gdGhpcy5oYW5kbGVTdWJtaXQuYmluZCh0aGlzKTtcbiAgICB0aGlzLm9uQ2hhbmdlID0gdGhpcy5vbkNoYW5nZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMucmVuZGVyU3RhZ2VUd28gPSB0aGlzLnJlbmRlclN0YWdlVHdvLmJpbmQodGhpcyk7XG4gICAgdGhpcy5yZW5kZXJTdGFnZVRocmVlID0gdGhpcy5yZW5kZXJTdGFnZVRocmVlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5yZW5kZXJTdGFnZVB1cmNoYXNlID0gdGhpcy5yZW5kZXJTdGFnZVB1cmNoYXNlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5maW5hbFN0YWdlQ29tcGxldGUgPSB0aGlzLmZpbmFsU3RhZ2VDb21wbGV0ZS5iaW5kKHRoaXMpO1xuICB9XG5cblxuICBoYW5kbGVTdWJtaXQoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBkYXRhID0gbmV3IEZvcm1EYXRhKClcbiAgICBmb3IgKHZhciBrZXkgaW4gdGhpcy5zdGF0ZS5mb3JtKSB7XG4gICAgICBkYXRhLmFwcGVuZChrZXksIHRoaXMuc3RhdGUuZm9ybVtrZXldKVxuICAgIH1cbiAgICBjb25zb2xlLmxvZygnU3VibWl0ISEnKVxuICAgIGZldGNoKCcvc3VibWl0Jywge1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBib2R5OiBkYXRhXG4gICAgfSk7XG4gICAgdGhpcy5zZXRTdGF0ZShzdGF0ZSA9PiAoe1xuICAgICAgZmluYWxTdGFnZUNvbXBsZXRlOiAhc3RhdGUuZmluYWxTdGFnZUNvbXBsZXRlXG4gICAgfSkpO1xuICB9XG5cblxuICBvbkNoYW5nZShlKSB7XG4gICAgdmFyIHN0b3JlID0gdGhpcy5zdGF0ZTtcbiAgICBzdG9yZS5mb3JtW2UudGFyZ2V0Lm5hbWVdID0gZS50YXJnZXQudmFsdWU7XG4gICAgdGhpcy5zZXRTdGF0ZShzdG9yZSk7XG4gIH1cblxuICByZW5kZXJTdGFnZVR3bygpIHtcbiAgICBjb25zb2xlLmxvZygnU3RhZ2UgdHdvIHN0YXRlIGFsdGVyZWQhJylcbiAgICB0aGlzLnNldFN0YXRlKHN0YXRlID0+ICh7XG4gICAgICBzdGFnZU9uZUNvbXBsZXRlOiAhc3RhdGUuc3RhZ2VPbmVDb21wbGV0ZVxuICAgIH0pKTtcbiAgfVxuICByZW5kZXJTdGFnZVRocmVlKCkge1xuICAgIGNvbnNvbGUubG9nKCdTdGFnZSB0aHJlZSBzdGF0ZSBhbHRlcmVkIScpXG4gICAgdGhpcy5zZXRTdGF0ZShzdGF0ZSA9PiAoe1xuICAgICAgc3RhZ2VUd29Db21wbGV0ZTogIXN0YXRlLnN0YWdlVHdvQ29tcGxldGVcbiAgICB9KSk7XG4gIH1cbiAgcmVuZGVyU3RhZ2VQdXJjaGFzZSgpIHtcbiAgICBjb25zb2xlLmxvZygnU3RhZ2UgcHVyY2hhc2Ugc3RhdGUgYWx0ZXJlZCEnKVxuICAgIHRoaXMuc2V0U3RhdGUoc3RhdGUgPT4gKHtcbiAgICAgIHN0YWdlVGhyZWVDb21wbGV0ZTogIXN0YXRlLnN0YWdlVGhyZWVDb21wbGV0ZVxuICAgIH0pKTtcbiAgfVxuICBmaW5hbFN0YWdlQ29tcGxldGUoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZShzdGF0ZSA9PiAoe1xuICAgICAgZmluYWxTdGFnZUNvbXBsZXRlOiAhc3RhdGUuZmluYWxTdGFnZUNvbXBsZXRlXG4gICAgfSkpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgZm9ybSB9ID0gdGhpcy5zdGF0ZTtcbiAgICBpZiAoIXRoaXMuc3RhdGUuc3RhZ2VPbmVDb21wbGV0ZSkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJzdGFnZS1vbmUtZm9ybVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwidXNlcm5hbWVcIj5OYW1lPC9sYWJlbD5cbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInVzZXJuYW1lXCIgdmFsdWU9e2Zvcm0udXNlcm5hbWV9IG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlfSBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBpZD1cInVzZXJuYW1lXCIgcGxhY2Vob2xkZXI9XCJFbnRlciBGaXJzdCBOYW1lXCIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZW1haWxcIj5FbWFpbDwvbGFiZWw+XG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZW1haWxcIiBuYW1lPVwiZW1haWxcIiB2YWx1ZT17Zm9ybS5lbWFpbH0gb25DaGFuZ2U9e3RoaXMub25DaGFuZ2V9IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIGlkPVwiZW1haWxcIiBwbGFjZWhvbGRlcj1cIkVudGVyIGVtYWlsXCIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicGFzc3dvcmRcIj5QYXNzd29yZDwvbGFiZWw+XG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBuYW1lPVwicGFzc3dvcmRcIiB2YWx1ZT17Zm9ybS5wYXNzd29yZH0gb25DaGFuZ2U9e3RoaXMub25DaGFuZ2V9IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIGlkPVwicGFzc3dvcmRcIiBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCIgb25DbGljaz17dGhpcy5yZW5kZXJTdGFnZVR3b30+U3VibWl0PC9idXR0b24+XG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIClcbiAgICB9IGVsc2UgaWYgKCF0aGlzLnN0YXRlLnN0YWdlVHdvQ29tcGxldGUpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwic3RhZ2Utb25lLWZvcm1cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImFkZHJlc3NvbmVcIj5BZGRyZXNzIExpbmUgMTwvbGFiZWw+XG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJhZGRyZXNzb25lXCIgdmFsdWU9e2Zvcm0uYWRkcmVzc29uZX0gb25DaGFuZ2U9e3RoaXMub25DaGFuZ2V9IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgQWRkcmVzcyBMaW5lIDFcIiAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJhZGRyZXNzdHdvXCI+QWRkcmVzcyBMaW5lIDI8L2xhYmVsPlxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiYWRkcmVzc3R3b1wiIHZhbHVlPXtmb3JtLmFkZHJlc3N0d299IG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlfSBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBwbGFjZWhvbGRlcj1cIkVudGVyIEFkZHJlc3MgTGluZSAyXCIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiY2l0eVwiPkNpdHk8L2xhYmVsPlxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiY2l0eVwiIHZhbHVlPXtmb3JtLmNpdHl9IG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlfSBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBwbGFjZWhvbGRlcj1cIkVudGVyIENpdHlcIiAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ1c2VybmFtZVwiPlN0YXRlPC9sYWJlbD5cbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInN0YXRlXCIgdmFsdWU9e2Zvcm0uc3RhdGV9IG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlfSBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBwbGFjZWhvbGRlcj1cIkVudGVyIFN0YXRlXCIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiemlwXCI+WmlwPC9sYWJlbD5cbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInppcFwiIHZhbHVlPXtmb3JtLnppcH0gb25DaGFuZ2U9e3RoaXMub25DaGFuZ2V9IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgWmlwXCIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicGhvbmVcIj5QaG9uZTwvbGFiZWw+XG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJwaG9uZVwiIHZhbHVlPXtmb3JtLnBob25lfSBvbkNoYW5nZT17dGhpcy5vbkNoYW5nZX0gY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCJFbnRlciBQaG9uZVwiIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiIG9uQ2xpY2s9e3RoaXMucmVuZGVyU3RhZ2VUaHJlZX0+U3VibWl0PC9idXR0b24+XG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIClcbiAgICB9IGVsc2UgaWYgKCF0aGlzLnN0YXRlLnN0YWdlVGhyZWVDb21wbGV0ZSkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJzdGFnZS1vbmUtZm9ybVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiY2NudW1cIj5DcmVkaXQgQ2FyZCAjPC9sYWJlbD5cbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImNjbnVtXCIgdmFsdWU9e2Zvcm0uY2NudW19IG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlfSBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBwbGFjZWhvbGRlcj1cIjEyMzQtNTY3OC05MTA5LTE2NjZcIiAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJleHBpcnlcIj5FeHBpcmF0aW9uPC9sYWJlbD5cbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImV4cGlyeVwiIHZhbHVlPXtmb3JtLmV4cGlyeX0gb25DaGFuZ2U9e3RoaXMub25DaGFuZ2V9IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHBsYWNlaG9sZGVyPVwiMDAvMDBcIiAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJjY3ZcIj5DQ1Y8L2xhYmVsPlxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiY2N2XCIgdmFsdWU9e2Zvcm0uY2N2fSBvbkNoYW5nZT17dGhpcy5vbkNoYW5nZX0gY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCIxMjNcIiAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJiaWxsaW5nemlwXCI+QmlsbGluZyBaaXA8L2xhYmVsPlxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiYmlsbGluZ3ppcFwiIHZhbHVlPXtmb3JtLmJpbGxpbmd6aXB9IG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlfSBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBwbGFjZWhvbGRlcj1cIkVudGVyIFppcFwiIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiIG9uQ2xpY2s9e3RoaXMucmVuZGVyU3RhZ2VQdXJjaGFzZX0+U3VibWl0PC9idXR0b24+XG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIClcbiAgICB9IGVsc2UgaWYoIXRoaXMuc3RhdGUuZmluYWxTdGFnZUNvbXBsZXRlKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cInN0YWdlLW9uZS1mb3JtXCIgb25TdWJtaXQ9e3RoaXMuaGFuZGxlU3VibWl0fT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICA8cD5OYW1lOiB7Zm9ybS51c2VybmFtZX08L3A+XG4gICAgICAgICAgICAgIDxwPkFkZHJlc3MgTGluZSAxOiB7Zm9ybS5hZGRyZXNzb25lfTwvcD5cbiAgICAgICAgICAgICAgPHA+QWRkcmVzcyBMaW5lIDI6IHtmb3JtLmFkZHJlc3N0d299PC9wPlxuICAgICAgICAgICAgICA8cD5DaXR5OiB7Zm9ybS5jaXR5fTwvcD5cbiAgICAgICAgICAgICAgPHA+U3RhdGU6IHtmb3JtLnN0YXRlfTwvcD5cbiAgICAgICAgICAgICAgPHA+WmlwOiB7Zm9ybS56aXB9PC9wPlxuICAgICAgICAgICAgICA8cD5QaG9uZToge2Zvcm0ucGhvbmV9PC9wPlxuICAgICAgICAgICAgICA8cD5DQyM6IHtmb3JtLmNjbnVtfTwvcD5cbiAgICAgICAgICAgICAgPHA+RXhwaXJhdGlvbjoge2Zvcm0uZXhwaXJ5fTwvcD5cbiAgICAgICAgICAgICAgPHA+Q0NWOiB7Zm9ybS5jY3Z9PC9wPlxuICAgICAgICAgICAgICA8cD5CaWxsaW5nIFppcDoge2Zvcm0uYmlsbGluZ3ppcH08L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiPkNoZWNrb3V0PC9idXR0b24+XG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIClcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuKFxuICAgICAgICA8QXBwIC8+XG4gICAgICApXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZvcm07Il19
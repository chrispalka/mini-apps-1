class Form extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log('Submit from FORM!');
    const data = new FormData(event.target);

    fetch('/submit', {
      method: 'POST',
      body: data
    });
  }

  render() {
    return React.createElement(
      'form',
      { onSubmit: this.handleSubmit, className: 'stage-one-form' },
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
        { type: 'submit', className: 'btn btn-primary' },
        'Submit'
      )
    );
  }
}

export default Form;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0Zvcm0uanN4Il0sIm5hbWVzIjpbIkZvcm0iLCJSZWFjdCIsIkNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwiaGFuZGxlU3VibWl0IiwiYmluZCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsIkZvcm1EYXRhIiwidGFyZ2V0IiwiZmV0Y2giLCJtZXRob2QiLCJib2R5IiwicmVuZGVyIl0sIm1hcHBpbmdzIjoiQUFBQSxNQUFNQSxJQUFOLFNBQW1CQyxNQUFNQyxTQUF6QixDQUFtQztBQUNqQ0MsZ0JBQWM7QUFDWjtBQUNBLFNBQUtDLFlBQUwsR0FBb0IsS0FBS0EsWUFBTCxDQUFrQkMsSUFBbEIsQ0FBdUIsSUFBdkIsQ0FBcEI7QUFDRDs7QUFHREQsZUFBYUUsS0FBYixFQUFvQjtBQUNsQkEsVUFBTUMsY0FBTjtBQUNBQyxZQUFRQyxHQUFSLENBQVksbUJBQVo7QUFDQSxVQUFNQyxPQUFPLElBQUlDLFFBQUosQ0FBYUwsTUFBTU0sTUFBbkIsQ0FBYjs7QUFFQUMsVUFBTSxTQUFOLEVBQWlCO0FBQ2ZDLGNBQVEsTUFETztBQUVmQyxZQUFNTDtBQUZTLEtBQWpCO0FBSUQ7O0FBRURNLFdBQVM7QUFDUCxXQUNFO0FBQUE7QUFBQSxRQUFNLFVBQVUsS0FBS1osWUFBckIsRUFBbUMsV0FBVSxnQkFBN0M7QUFDQTtBQUFBO0FBQUEsVUFBSyxXQUFVLFlBQWY7QUFDRTtBQUFBO0FBQUEsWUFBTyxTQUFRLFVBQWY7QUFBQTtBQUFBLFNBREY7QUFFRSx1Q0FBTyxNQUFLLE1BQVosRUFBbUIsTUFBSyxVQUF4QixFQUFtQyxXQUFVLGNBQTdDLEVBQTRELElBQUcsVUFBL0QsRUFBMEUsYUFBWSxrQkFBdEY7QUFGRixPQURBO0FBS0E7QUFBQTtBQUFBLFVBQUssV0FBVSxZQUFmO0FBQ0U7QUFBQTtBQUFBLFlBQU8sU0FBUSxPQUFmO0FBQUE7QUFBQSxTQURGO0FBRUUsdUNBQU8sTUFBSyxPQUFaLEVBQW9CLE1BQUssT0FBekIsRUFBaUMsV0FBVSxjQUEzQyxFQUEwRCxJQUFHLE9BQTdELEVBQXFFLGFBQVksYUFBakY7QUFGRixPQUxBO0FBU0E7QUFBQTtBQUFBLFVBQUssV0FBVSxZQUFmO0FBQ0U7QUFBQTtBQUFBLFlBQU8sU0FBUSxVQUFmO0FBQUE7QUFBQSxTQURGO0FBRUUsdUNBQU8sTUFBSyxVQUFaLEVBQXVCLE1BQUssVUFBNUIsRUFBdUMsV0FBVSxjQUFqRCxFQUFnRSxJQUFHLFVBQW5FLEVBQThFLGFBQVksVUFBMUY7QUFGRixPQVRBO0FBYUE7QUFBQTtBQUFBLFVBQVEsTUFBSyxRQUFiLEVBQXNCLFdBQVUsaUJBQWhDO0FBQUE7QUFBQTtBQWJBLEtBREY7QUFpQkQ7QUFwQ2dDOztBQXVDbkMsZUFBZUosSUFBZiIsImZpbGUiOiJGb3JtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgRm9ybSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5oYW5kbGVTdWJtaXQgPSB0aGlzLmhhbmRsZVN1Ym1pdC5iaW5kKHRoaXMpO1xuICB9XG5cblxuICBoYW5kbGVTdWJtaXQoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnNvbGUubG9nKCdTdWJtaXQgZnJvbSBGT1JNIScpXG4gICAgY29uc3QgZGF0YSA9IG5ldyBGb3JtRGF0YShldmVudC50YXJnZXQpO1xuXG4gICAgZmV0Y2goJy9zdWJtaXQnLCB7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGJvZHk6IGRhdGFcbiAgICB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4oXG4gICAgICA8Zm9ybSBvblN1Ym1pdD17dGhpcy5oYW5kbGVTdWJtaXR9IGNsYXNzTmFtZT1cInN0YWdlLW9uZS1mb3JtXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ1c2VybmFtZVwiPk5hbWU8L2xhYmVsPlxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwidXNlcm5hbWVcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBpZD1cInVzZXJuYW1lXCIgcGxhY2Vob2xkZXI9XCJFbnRlciBGaXJzdCBOYW1lXCIgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZW1haWxcIj5FbWFpbDwvbGFiZWw+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwiZW1haWxcIiBuYW1lPVwiZW1haWxcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBpZD1cImVtYWlsXCIgcGxhY2Vob2xkZXI9XCJFbnRlciBlbWFpbFwiIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInBhc3N3b3JkXCI+UGFzc3dvcmQ8L2xhYmVsPlxuICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgbmFtZT1cInBhc3N3b3JkXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgaWQ9XCJwYXNzd29yZFwiIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIiAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIj5TdWJtaXQ8L2J1dHRvbj5cbiAgICA8L2Zvcm0+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZvcm07Il19
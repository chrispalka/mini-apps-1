var StageTwo = props => React.createElement(
  "div",
  { className: "container" },
  React.createElement(
    "form",
    { onSubmit: props.onSubmit.handleSubmitStageTwo, className: "stage-one-form" },
    React.createElement(
      "div",
      { className: "form-group" },
      React.createElement(
        "label",
        { htmlFor: "addressone" },
        "Address Line 1"
      ),
      React.createElement("input", { type: "text", name: "addressone", className: "form-control", placeholder: "Enter Address Line 1" })
    ),
    React.createElement(
      "div",
      { className: "form-group" },
      React.createElement(
        "label",
        { htmlFor: "addresstwo" },
        "Address Line 2"
      ),
      React.createElement("input", { type: "text", name: "addresstwo", className: "form-control", placeholder: "Enter Address Line 2" })
    ),
    React.createElement(
      "div",
      { className: "form-group" },
      React.createElement(
        "label",
        { htmlFor: "city" },
        "City"
      ),
      React.createElement("input", { type: "text", name: "city", className: "form-control", placeholder: "Enter City" })
    ),
    React.createElement(
      "div",
      { className: "form-group" },
      React.createElement(
        "label",
        { htmlFor: "username" },
        "State"
      ),
      React.createElement("input", { type: "text", name: "state", className: "form-control", placeholder: "Enter State" })
    ),
    React.createElement(
      "div",
      { className: "form-group" },
      React.createElement(
        "label",
        { htmlFor: "zip" },
        "Zip"
      ),
      React.createElement("input", { type: "text", name: "zip", className: "form-control", placeholder: "Enter Zip" })
    ),
    React.createElement(
      "div",
      { className: "form-group" },
      React.createElement(
        "label",
        { htmlFor: "phone" },
        "Phone"
      ),
      React.createElement("input", { type: "text", name: "phone", className: "form-control", placeholder: "Enter Phone" })
    ),
    React.createElement(
      "button",
      { type: "submit", className: "btn btn-primary", onClick: props.onSubmit.renderStageThree },
      "Submit"
    )
  )
);

export default StageTwo;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1N0YWdlVHdvIGNvcHkuanN4Il0sIm5hbWVzIjpbIlN0YWdlVHdvIiwicHJvcHMiLCJvblN1Ym1pdCIsImhhbmRsZVN1Ym1pdFN0YWdlVHdvIiwicmVuZGVyU3RhZ2VUaHJlZSJdLCJtYXBwaW5ncyI6IkFBQUEsSUFBSUEsV0FBWUMsS0FBRCxJQUNiO0FBQUE7QUFBQSxJQUFLLFdBQVUsV0FBZjtBQUNFO0FBQUE7QUFBQSxNQUFNLFVBQVVBLE1BQU1DLFFBQU4sQ0FBZUMsb0JBQS9CLEVBQXFELFdBQVUsZ0JBQS9EO0FBQ0k7QUFBQTtBQUFBLFFBQUssV0FBVSxZQUFmO0FBQ0U7QUFBQTtBQUFBLFVBQU8sU0FBUSxZQUFmO0FBQUE7QUFBQSxPQURGO0FBRUUscUNBQU8sTUFBSyxNQUFaLEVBQW1CLE1BQUssWUFBeEIsRUFBcUMsV0FBVSxjQUEvQyxFQUErRCxhQUFZLHNCQUEzRTtBQUZGLEtBREo7QUFLSTtBQUFBO0FBQUEsUUFBSyxXQUFVLFlBQWY7QUFDRTtBQUFBO0FBQUEsVUFBTyxTQUFRLFlBQWY7QUFBQTtBQUFBLE9BREY7QUFFRSxxQ0FBTyxNQUFLLE1BQVosRUFBbUIsTUFBSyxZQUF4QixFQUFxQyxXQUFVLGNBQS9DLEVBQThELGFBQVksc0JBQTFFO0FBRkYsS0FMSjtBQVNJO0FBQUE7QUFBQSxRQUFLLFdBQVUsWUFBZjtBQUNFO0FBQUE7QUFBQSxVQUFPLFNBQVEsTUFBZjtBQUFBO0FBQUEsT0FERjtBQUVFLHFDQUFPLE1BQUssTUFBWixFQUFtQixNQUFLLE1BQXhCLEVBQStCLFdBQVUsY0FBekMsRUFBd0QsYUFBWSxZQUFwRTtBQUZGLEtBVEo7QUFhSTtBQUFBO0FBQUEsUUFBSyxXQUFVLFlBQWY7QUFDRTtBQUFBO0FBQUEsVUFBTyxTQUFRLFVBQWY7QUFBQTtBQUFBLE9BREY7QUFFRSxxQ0FBTyxNQUFLLE1BQVosRUFBbUIsTUFBSyxPQUF4QixFQUFnQyxXQUFVLGNBQTFDLEVBQXlELGFBQVksYUFBckU7QUFGRixLQWJKO0FBaUJJO0FBQUE7QUFBQSxRQUFLLFdBQVUsWUFBZjtBQUNFO0FBQUE7QUFBQSxVQUFPLFNBQVEsS0FBZjtBQUFBO0FBQUEsT0FERjtBQUVFLHFDQUFPLE1BQUssTUFBWixFQUFtQixNQUFLLEtBQXhCLEVBQThCLFdBQVUsY0FBeEMsRUFBdUQsYUFBWSxXQUFuRTtBQUZGLEtBakJKO0FBcUJJO0FBQUE7QUFBQSxRQUFLLFdBQVUsWUFBZjtBQUNFO0FBQUE7QUFBQSxVQUFPLFNBQVEsT0FBZjtBQUFBO0FBQUEsT0FERjtBQUVFLHFDQUFPLE1BQUssTUFBWixFQUFtQixNQUFLLE9BQXhCLEVBQWdDLFdBQVUsY0FBMUMsRUFBeUQsYUFBWSxhQUFyRTtBQUZGLEtBckJKO0FBeUJJO0FBQUE7QUFBQSxRQUFRLE1BQUssUUFBYixFQUFzQixXQUFVLGlCQUFoQyxFQUFrRCxTQUFTRixNQUFNQyxRQUFOLENBQWVFLGdCQUExRTtBQUFBO0FBQUE7QUF6Qko7QUFERixDQURGOztBQWdDQSxlQUFlSixRQUFmIiwiZmlsZSI6IlN0YWdlVHdvIGNvcHkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgU3RhZ2VUd28gPSAocHJvcHMpID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICA8Zm9ybSBvblN1Ym1pdD17cHJvcHMub25TdWJtaXQuaGFuZGxlU3VibWl0U3RhZ2VUd299IGNsYXNzTmFtZT1cInN0YWdlLW9uZS1mb3JtXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiYWRkcmVzc29uZVwiPkFkZHJlc3MgTGluZSAxPC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiYWRkcmVzc29uZVwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiICBwbGFjZWhvbGRlcj1cIkVudGVyIEFkZHJlc3MgTGluZSAxXCIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiYWRkcmVzc3R3b1wiPkFkZHJlc3MgTGluZSAyPC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiYWRkcmVzc3R3b1wiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgQWRkcmVzcyBMaW5lIDJcIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJjaXR5XCI+Q2l0eTwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImNpdHlcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBwbGFjZWhvbGRlcj1cIkVudGVyIENpdHlcIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ1c2VybmFtZVwiPlN0YXRlPC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwic3RhdGVcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBwbGFjZWhvbGRlcj1cIkVudGVyIFN0YXRlXCIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiemlwXCI+WmlwPC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiemlwXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCJFbnRlciBaaXBcIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwaG9uZVwiPlBob25lPC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwicGhvbmVcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBwbGFjZWhvbGRlcj1cIkVudGVyIFBob25lXCIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiIG9uQ2xpY2s9e3Byb3BzLm9uU3VibWl0LnJlbmRlclN0YWdlVGhyZWV9PlN1Ym1pdDwvYnV0dG9uPlxuICAgICAgPC9mb3JtPlxuICA8L2Rpdj5cbilcblxuZXhwb3J0IGRlZmF1bHQgU3RhZ2VUd287Il19
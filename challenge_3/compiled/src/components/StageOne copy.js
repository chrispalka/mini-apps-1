var StageOne = props => React.createElement(
  "div",
  { className: "container" },
  React.createElement(
    "form",
    { onSubmit: props.onSubmit.handleSubmitStageOne, className: "stage-one-form" },
    React.createElement(
      "div",
      { className: "form-group" },
      React.createElement(
        "label",
        { htmlFor: "username" },
        "Name"
      ),
      React.createElement("input", { type: "text", name: "username", className: "form-control", id: "username", placeholder: "Enter First Name" })
    ),
    React.createElement(
      "div",
      { className: "form-group" },
      React.createElement(
        "label",
        { htmlFor: "email" },
        "Email"
      ),
      React.createElement("input", { type: "email", name: "email", className: "form-control", id: "email", placeholder: "Enter email" })
    ),
    React.createElement(
      "div",
      { className: "form-group" },
      React.createElement(
        "label",
        { htmlFor: "password" },
        "Password"
      ),
      React.createElement("input", { type: "password", name: "password", className: "form-control", id: "password", placeholder: "Password" })
    ),
    React.createElement(
      "button",
      { type: "submit", className: "btn btn-primary", onClick: props.onClick.renderStageTwo },
      "Submit"
    )
  )
);

export default StageOne;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1N0YWdlT25lIGNvcHkuanN4Il0sIm5hbWVzIjpbIlN0YWdlT25lIiwicHJvcHMiLCJvblN1Ym1pdCIsImhhbmRsZVN1Ym1pdFN0YWdlT25lIiwib25DbGljayIsInJlbmRlclN0YWdlVHdvIl0sIm1hcHBpbmdzIjoiQUFBQSxJQUFJQSxXQUFZQyxLQUFELElBQ2I7QUFBQTtBQUFBLElBQUssV0FBVSxXQUFmO0FBQ0U7QUFBQTtBQUFBLE1BQU0sVUFBVUEsTUFBTUMsUUFBTixDQUFlQyxvQkFBL0IsRUFBcUQsV0FBVSxnQkFBL0Q7QUFDRTtBQUFBO0FBQUEsUUFBSyxXQUFVLFlBQWY7QUFDRTtBQUFBO0FBQUEsVUFBTyxTQUFRLFVBQWY7QUFBQTtBQUFBLE9BREY7QUFFRSxxQ0FBTyxNQUFLLE1BQVosRUFBbUIsTUFBSyxVQUF4QixFQUFtQyxXQUFVLGNBQTdDLEVBQTRELElBQUcsVUFBL0QsRUFBMEUsYUFBWSxrQkFBdEY7QUFGRixLQURGO0FBS0U7QUFBQTtBQUFBLFFBQUssV0FBVSxZQUFmO0FBQ0U7QUFBQTtBQUFBLFVBQU8sU0FBUSxPQUFmO0FBQUE7QUFBQSxPQURGO0FBRUUscUNBQU8sTUFBSyxPQUFaLEVBQW9CLE1BQUssT0FBekIsRUFBaUMsV0FBVSxjQUEzQyxFQUEwRCxJQUFHLE9BQTdELEVBQXFFLGFBQVksYUFBakY7QUFGRixLQUxGO0FBU0U7QUFBQTtBQUFBLFFBQUssV0FBVSxZQUFmO0FBQ0U7QUFBQTtBQUFBLFVBQU8sU0FBUSxVQUFmO0FBQUE7QUFBQSxPQURGO0FBRUUscUNBQU8sTUFBSyxVQUFaLEVBQXVCLE1BQUssVUFBNUIsRUFBdUMsV0FBVSxjQUFqRCxFQUFnRSxJQUFHLFVBQW5FLEVBQThFLGFBQVksVUFBMUY7QUFGRixLQVRGO0FBYUU7QUFBQTtBQUFBLFFBQVEsTUFBSyxRQUFiLEVBQXNCLFdBQVUsaUJBQWhDLEVBQWtELFNBQVNGLE1BQU1HLE9BQU4sQ0FBY0MsY0FBekU7QUFBQTtBQUFBO0FBYkY7QUFERixDQURGOztBQW9CQSxlQUFlTCxRQUFmIiwiZmlsZSI6IlN0YWdlT25lIGNvcHkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgU3RhZ2VPbmUgPSAocHJvcHMpID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICA8Zm9ybSBvblN1Ym1pdD17cHJvcHMub25TdWJtaXQuaGFuZGxlU3VibWl0U3RhZ2VPbmV9IGNsYXNzTmFtZT1cInN0YWdlLW9uZS1mb3JtXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ1c2VybmFtZVwiPk5hbWU8L2xhYmVsPlxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwidXNlcm5hbWVcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBpZD1cInVzZXJuYW1lXCIgcGxhY2Vob2xkZXI9XCJFbnRlciBGaXJzdCBOYW1lXCIgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZW1haWxcIj5FbWFpbDwvbGFiZWw+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwiZW1haWxcIiBuYW1lPVwiZW1haWxcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBpZD1cImVtYWlsXCIgcGxhY2Vob2xkZXI9XCJFbnRlciBlbWFpbFwiIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInBhc3N3b3JkXCI+UGFzc3dvcmQ8L2xhYmVsPlxuICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgbmFtZT1cInBhc3N3b3JkXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgaWQ9XCJwYXNzd29yZFwiIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIiAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIiBvbkNsaWNrPXtwcm9wcy5vbkNsaWNrLnJlbmRlclN0YWdlVHdvfT5TdWJtaXQ8L2J1dHRvbj5cbiAgICA8L2Zvcm0+XG4gIDwvZGl2PlxuKVxuXG5leHBvcnQgZGVmYXVsdCBTdGFnZU9uZTsiXX0=
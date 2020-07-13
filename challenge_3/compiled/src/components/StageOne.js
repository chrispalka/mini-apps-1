var StageOne = props => React.createElement(
  "div",
  { className: "container" },
  React.createElement(
    "form",
    { className: "stage-one-form" },
    React.createElement(
      "div",
      { className: "form-group" },
      React.createElement(
        "label",
        { htmlFor: "username" },
        "Name"
      ),
      React.createElement("input", { type: "text", name: "username", onChange: props.onChange, className: "form-control", id: "username", placeholder: "Enter First Name" })
    ),
    React.createElement(
      "div",
      { className: "form-group" },
      React.createElement(
        "label",
        { htmlFor: "email" },
        "Email"
      ),
      React.createElement("input", { type: "email", name: "email", onChange: props.onChange, className: "form-control", id: "email", placeholder: "Enter email" })
    ),
    React.createElement(
      "div",
      { className: "form-group" },
      React.createElement(
        "label",
        { htmlFor: "password" },
        "Password"
      ),
      React.createElement("input", { type: "password", name: "password", onChange: props.onChange, className: "form-control", id: "password", placeholder: "Password" })
    ),
    React.createElement(
      "button",
      { type: "submit", className: "btn btn-primary", onClick: props.render },
      "Submit"
    )
  )
);

export default StageOne;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1N0YWdlT25lLmpzeCJdLCJuYW1lcyI6WyJTdGFnZU9uZSIsInByb3BzIiwib25DaGFuZ2UiLCJyZW5kZXIiXSwibWFwcGluZ3MiOiJBQUFBLElBQUlBLFdBQVlDLEtBQUQsSUFDYjtBQUFBO0FBQUEsSUFBSyxXQUFVLFdBQWY7QUFDRTtBQUFBO0FBQUEsTUFBTSxXQUFVLGdCQUFoQjtBQUNFO0FBQUE7QUFBQSxRQUFLLFdBQVUsWUFBZjtBQUNFO0FBQUE7QUFBQSxVQUFPLFNBQVEsVUFBZjtBQUFBO0FBQUEsT0FERjtBQUVFLHFDQUFPLE1BQUssTUFBWixFQUFtQixNQUFLLFVBQXhCLEVBQW1DLFVBQVVBLE1BQU1DLFFBQW5ELEVBQTZELFdBQVUsY0FBdkUsRUFBc0YsSUFBRyxVQUF6RixFQUFvRyxhQUFZLGtCQUFoSDtBQUZGLEtBREY7QUFLRTtBQUFBO0FBQUEsUUFBSyxXQUFVLFlBQWY7QUFDRTtBQUFBO0FBQUEsVUFBTyxTQUFRLE9BQWY7QUFBQTtBQUFBLE9BREY7QUFFRSxxQ0FBTyxNQUFLLE9BQVosRUFBb0IsTUFBSyxPQUF6QixFQUFpQyxVQUFVRCxNQUFNQyxRQUFqRCxFQUEyRCxXQUFVLGNBQXJFLEVBQW9GLElBQUcsT0FBdkYsRUFBK0YsYUFBWSxhQUEzRztBQUZGLEtBTEY7QUFTRTtBQUFBO0FBQUEsUUFBSyxXQUFVLFlBQWY7QUFDRTtBQUFBO0FBQUEsVUFBTyxTQUFRLFVBQWY7QUFBQTtBQUFBLE9BREY7QUFFRSxxQ0FBTyxNQUFLLFVBQVosRUFBdUIsTUFBSyxVQUE1QixFQUF1QyxVQUFVRCxNQUFNQyxRQUF2RCxFQUFpRSxXQUFVLGNBQTNFLEVBQTBGLElBQUcsVUFBN0YsRUFBd0csYUFBWSxVQUFwSDtBQUZGLEtBVEY7QUFhRTtBQUFBO0FBQUEsUUFBUSxNQUFLLFFBQWIsRUFBc0IsV0FBVSxpQkFBaEMsRUFBa0QsU0FBU0QsTUFBTUUsTUFBakU7QUFBQTtBQUFBO0FBYkY7QUFERixDQURGOztBQW9CQSxlQUFlSCxRQUFmIiwiZmlsZSI6IlN0YWdlT25lLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIFN0YWdlT25lID0gKHByb3BzKSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgPGZvcm0gY2xhc3NOYW1lPVwic3RhZ2Utb25lLWZvcm1cIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInVzZXJuYW1lXCI+TmFtZTwvbGFiZWw+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJ1c2VybmFtZVwiIG9uQ2hhbmdlPXtwcm9wcy5vbkNoYW5nZX0gY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgaWQ9XCJ1c2VybmFtZVwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgRmlyc3QgTmFtZVwiIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImVtYWlsXCI+RW1haWw8L2xhYmVsPlxuICAgICAgICA8aW5wdXQgdHlwZT1cImVtYWlsXCIgbmFtZT1cImVtYWlsXCIgb25DaGFuZ2U9e3Byb3BzLm9uQ2hhbmdlfSBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBpZD1cImVtYWlsXCIgcGxhY2Vob2xkZXI9XCJFbnRlciBlbWFpbFwiIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInBhc3N3b3JkXCI+UGFzc3dvcmQ8L2xhYmVsPlxuICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgbmFtZT1cInBhc3N3b3JkXCIgb25DaGFuZ2U9e3Byb3BzLm9uQ2hhbmdlfSBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBpZD1cInBhc3N3b3JkXCIgcGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiIG9uQ2xpY2s9e3Byb3BzLnJlbmRlcn0+U3VibWl0PC9idXR0b24+XG4gICAgPC9mb3JtPlxuICA8L2Rpdj5cbilcblxuZXhwb3J0IGRlZmF1bHQgU3RhZ2VPbmU7Il19
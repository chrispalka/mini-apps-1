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
      React.createElement("input", { type: "text", className: "form-control", id: "username", placeholder: "Enter First Name" })
    ),
    React.createElement(
      "div",
      { className: "form-group" },
      React.createElement(
        "label",
        { htmlFor: "email" },
        "Email"
      ),
      React.createElement("input", { type: "email", className: "form-control", id: "email", placeholder: "Enter email" })
    ),
    React.createElement(
      "div",
      { className: "form-group" },
      React.createElement(
        "label",
        { htmlFor: "password" },
        "Password"
      ),
      React.createElement("input", { type: "password", className: "form-control", id: "password", placeholder: "Password" })
    ),
    React.createElement(
      "button",
      { type: "submit", className: "btn btn-primary" },
      "Submit"
    )
  )
);

export default StageOne;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1N0YWdlT25lLmpzeCJdLCJuYW1lcyI6WyJTdGFnZU9uZSIsInByb3BzIl0sIm1hcHBpbmdzIjoiQUFBQSxJQUFJQSxXQUFZQyxLQUFELElBQ2I7QUFBQTtBQUFBLElBQUssV0FBVSxXQUFmO0FBQ0U7QUFBQTtBQUFBLE1BQU0sV0FBVSxnQkFBaEI7QUFDRTtBQUFBO0FBQUEsUUFBSyxXQUFVLFlBQWY7QUFDRTtBQUFBO0FBQUEsVUFBTyxTQUFRLFVBQWY7QUFBQTtBQUFBLE9BREY7QUFFRSxxQ0FBTyxNQUFLLE1BQVosRUFBbUIsV0FBVSxjQUE3QixFQUE0QyxJQUFHLFVBQS9DLEVBQTBELGFBQVksa0JBQXRFO0FBRkYsS0FERjtBQUtFO0FBQUE7QUFBQSxRQUFLLFdBQVUsWUFBZjtBQUNFO0FBQUE7QUFBQSxVQUFPLFNBQVEsT0FBZjtBQUFBO0FBQUEsT0FERjtBQUVFLHFDQUFPLE1BQUssT0FBWixFQUFvQixXQUFVLGNBQTlCLEVBQTZDLElBQUcsT0FBaEQsRUFBd0QsYUFBWSxhQUFwRTtBQUZGLEtBTEY7QUFTRTtBQUFBO0FBQUEsUUFBSyxXQUFVLFlBQWY7QUFDRTtBQUFBO0FBQUEsVUFBTyxTQUFRLFVBQWY7QUFBQTtBQUFBLE9BREY7QUFFRSxxQ0FBTyxNQUFLLFVBQVosRUFBdUIsV0FBVSxjQUFqQyxFQUFnRCxJQUFHLFVBQW5ELEVBQThELGFBQVksVUFBMUU7QUFGRixLQVRGO0FBYUU7QUFBQTtBQUFBLFFBQVEsTUFBSyxRQUFiLEVBQXNCLFdBQVUsaUJBQWhDO0FBQUE7QUFBQTtBQWJGO0FBREYsQ0FERjs7QUFvQkEsZUFBZUQsUUFBZiIsImZpbGUiOiJTdGFnZU9uZS5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBTdGFnZU9uZSA9IChwcm9wcykgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgIDxmb3JtIGNsYXNzTmFtZT1cInN0YWdlLW9uZS1mb3JtXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ1c2VybmFtZVwiPk5hbWU8L2xhYmVsPlxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBpZD1cInVzZXJuYW1lXCIgcGxhY2Vob2xkZXI9XCJFbnRlciBGaXJzdCBOYW1lXCIgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZW1haWxcIj5FbWFpbDwvbGFiZWw+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwiZW1haWxcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBpZD1cImVtYWlsXCIgcGxhY2Vob2xkZXI9XCJFbnRlciBlbWFpbFwiIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInBhc3N3b3JkXCI+UGFzc3dvcmQ8L2xhYmVsPlxuICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgaWQ9XCJwYXNzd29yZFwiIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIiAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIj5TdWJtaXQ8L2J1dHRvbj5cbiAgICA8L2Zvcm0+XG4gIDwvZGl2PlxuKVxuXG5leHBvcnQgZGVmYXVsdCBTdGFnZU9uZTsiXX0=
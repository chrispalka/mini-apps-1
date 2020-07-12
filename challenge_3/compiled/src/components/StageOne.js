var StageOne = props => React.createElement(
  "div",
  { className: "container" },
  React.createElement(
    "form",
    { onSubmit: props.handler, className: "stage-one-form" },
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
      { type: "submit", className: "btn btn-primary", onClick: props.render },
      "Submit"
    )
  )
);

export default StageOne;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1N0YWdlT25lLmpzeCJdLCJuYW1lcyI6WyJTdGFnZU9uZSIsInByb3BzIiwiaGFuZGxlciIsInJlbmRlciJdLCJtYXBwaW5ncyI6IkFBQUEsSUFBSUEsV0FBWUMsS0FBRCxJQUNiO0FBQUE7QUFBQSxJQUFLLFdBQVUsV0FBZjtBQUNFO0FBQUE7QUFBQSxNQUFNLFVBQVVBLE1BQU1DLE9BQXRCLEVBQStCLFdBQVUsZ0JBQXpDO0FBQ0U7QUFBQTtBQUFBLFFBQUssV0FBVSxZQUFmO0FBQ0U7QUFBQTtBQUFBLFVBQU8sU0FBUSxVQUFmO0FBQUE7QUFBQSxPQURGO0FBRUUscUNBQU8sTUFBSyxNQUFaLEVBQW1CLE1BQUssVUFBeEIsRUFBbUMsV0FBVSxjQUE3QyxFQUE0RCxJQUFHLFVBQS9ELEVBQTBFLGFBQVksa0JBQXRGO0FBRkYsS0FERjtBQUtFO0FBQUE7QUFBQSxRQUFLLFdBQVUsWUFBZjtBQUNFO0FBQUE7QUFBQSxVQUFPLFNBQVEsT0FBZjtBQUFBO0FBQUEsT0FERjtBQUVFLHFDQUFPLE1BQUssT0FBWixFQUFvQixNQUFLLE9BQXpCLEVBQWlDLFdBQVUsY0FBM0MsRUFBMEQsSUFBRyxPQUE3RCxFQUFxRSxhQUFZLGFBQWpGO0FBRkYsS0FMRjtBQVNFO0FBQUE7QUFBQSxRQUFLLFdBQVUsWUFBZjtBQUNFO0FBQUE7QUFBQSxVQUFPLFNBQVEsVUFBZjtBQUFBO0FBQUEsT0FERjtBQUVFLHFDQUFPLE1BQUssVUFBWixFQUF1QixNQUFLLFVBQTVCLEVBQXVDLFdBQVUsY0FBakQsRUFBZ0UsSUFBRyxVQUFuRSxFQUE4RSxhQUFZLFVBQTFGO0FBRkYsS0FURjtBQWFFO0FBQUE7QUFBQSxRQUFRLE1BQUssUUFBYixFQUFzQixXQUFVLGlCQUFoQyxFQUFrRCxTQUFTRCxNQUFNRSxNQUFqRTtBQUFBO0FBQUE7QUFiRjtBQURGLENBREY7O0FBb0JBLGVBQWVILFFBQWYiLCJmaWxlIjoiU3RhZ2VPbmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgU3RhZ2VPbmUgPSAocHJvcHMpID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICA8Zm9ybSBvblN1Ym1pdD17cHJvcHMuaGFuZGxlcn0gY2xhc3NOYW1lPVwic3RhZ2Utb25lLWZvcm1cIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInVzZXJuYW1lXCI+TmFtZTwvbGFiZWw+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJ1c2VybmFtZVwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIGlkPVwidXNlcm5hbWVcIiBwbGFjZWhvbGRlcj1cIkVudGVyIEZpcnN0IE5hbWVcIiAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJlbWFpbFwiPkVtYWlsPC9sYWJlbD5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJlbWFpbFwiIG5hbWU9XCJlbWFpbFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIGlkPVwiZW1haWxcIiBwbGFjZWhvbGRlcj1cIkVudGVyIGVtYWlsXCIgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgIDxsYWJlbCBodG1sRm9yPVwicGFzc3dvcmRcIj5QYXNzd29yZDwvbGFiZWw+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBuYW1lPVwicGFzc3dvcmRcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBpZD1cInBhc3N3b3JkXCIgcGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiIG9uQ2xpY2s9e3Byb3BzLnJlbmRlcn0+U3VibWl0PC9idXR0b24+XG4gICAgPC9mb3JtPlxuICA8L2Rpdj5cbilcblxuZXhwb3J0IGRlZmF1bHQgU3RhZ2VPbmU7Il19
var StageThree = props => React.createElement(
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
        { htmlFor: "ccnum" },
        "Credit Card #"
      ),
      React.createElement("input", { type: "text", name: "ccnum", className: "form-control", placeholder: "1234-5678-9109-1666" })
    ),
    React.createElement(
      "div",
      { className: "form-group" },
      React.createElement(
        "label",
        { htmlFor: "expiry" },
        "Expiration"
      ),
      React.createElement("input", { type: "text", name: "expiry", className: "form-control", placeholder: "00/00" })
    ),
    React.createElement(
      "div",
      { className: "form-group" },
      React.createElement(
        "label",
        { htmlFor: "ccv" },
        "CCV"
      ),
      React.createElement("input", { type: "text", name: "ccv", className: "form-control", placeholder: "123" })
    ),
    React.createElement(
      "div",
      { className: "form-group" },
      React.createElement(
        "label",
        { htmlFor: "billingzip" },
        "Billing Zip"
      ),
      React.createElement("input", { type: "text", name: "billingzip", className: "form-control", placeholder: "Enter Zip" })
    ),
    React.createElement(
      "button",
      { type: "submit", className: "btn btn-primary", onClick: props.render },
      "Submit"
    )
  )
);

export default StageThree;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1N0YWdlVGhyZWUuanN4Il0sIm5hbWVzIjpbIlN0YWdlVGhyZWUiLCJwcm9wcyIsImhhbmRsZXIiLCJyZW5kZXIiXSwibWFwcGluZ3MiOiJBQUFBLElBQUlBLGFBQWNDLEtBQUQsSUFDZjtBQUFBO0FBQUEsSUFBSyxXQUFVLFdBQWY7QUFDRTtBQUFBO0FBQUEsTUFBTSxVQUFVQSxNQUFNQyxPQUF0QixFQUErQixXQUFVLGdCQUF6QztBQUNJO0FBQUE7QUFBQSxRQUFLLFdBQVUsWUFBZjtBQUNFO0FBQUE7QUFBQSxVQUFPLFNBQVEsT0FBZjtBQUFBO0FBQUEsT0FERjtBQUVFLHFDQUFPLE1BQUssTUFBWixFQUFtQixNQUFLLE9BQXhCLEVBQWdDLFdBQVUsY0FBMUMsRUFBMEQsYUFBWSxxQkFBdEU7QUFGRixLQURKO0FBS0k7QUFBQTtBQUFBLFFBQUssV0FBVSxZQUFmO0FBQ0U7QUFBQTtBQUFBLFVBQU8sU0FBUSxRQUFmO0FBQUE7QUFBQSxPQURGO0FBRUUscUNBQU8sTUFBSyxNQUFaLEVBQW1CLE1BQUssUUFBeEIsRUFBaUMsV0FBVSxjQUEzQyxFQUEwRCxhQUFZLE9BQXRFO0FBRkYsS0FMSjtBQVNJO0FBQUE7QUFBQSxRQUFLLFdBQVUsWUFBZjtBQUNFO0FBQUE7QUFBQSxVQUFPLFNBQVEsS0FBZjtBQUFBO0FBQUEsT0FERjtBQUVFLHFDQUFPLE1BQUssTUFBWixFQUFtQixNQUFLLEtBQXhCLEVBQThCLFdBQVUsY0FBeEMsRUFBdUQsYUFBWSxLQUFuRTtBQUZGLEtBVEo7QUFhSTtBQUFBO0FBQUEsUUFBSyxXQUFVLFlBQWY7QUFDRTtBQUFBO0FBQUEsVUFBTyxTQUFRLFlBQWY7QUFBQTtBQUFBLE9BREY7QUFFRSxxQ0FBTyxNQUFLLE1BQVosRUFBbUIsTUFBSyxZQUF4QixFQUFxQyxXQUFVLGNBQS9DLEVBQThELGFBQVksV0FBMUU7QUFGRixLQWJKO0FBaUJJO0FBQUE7QUFBQSxRQUFRLE1BQUssUUFBYixFQUFzQixXQUFVLGlCQUFoQyxFQUFrRCxTQUFTRCxNQUFNRSxNQUFqRTtBQUFBO0FBQUE7QUFqQko7QUFERixDQURGOztBQXdCQSxlQUFlSCxVQUFmIiwiZmlsZSI6IlN0YWdlVGhyZWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgU3RhZ2VUaHJlZSA9IChwcm9wcykgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgIDxmb3JtIG9uU3VibWl0PXtwcm9wcy5oYW5kbGVyfSBjbGFzc05hbWU9XCJzdGFnZS1vbmUtZm9ybVwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImNjbnVtXCI+Q3JlZGl0IENhcmQgIzwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImNjbnVtXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgIHBsYWNlaG9sZGVyPVwiMTIzNC01Njc4LTkxMDktMTY2NlwiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImV4cGlyeVwiPkV4cGlyYXRpb248L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJleHBpcnlcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBwbGFjZWhvbGRlcj1cIjAwLzAwXCIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiY2N2XCI+Q0NWPC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiY2N2XCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCIxMjNcIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJiaWxsaW5nemlwXCI+QmlsbGluZyBaaXA8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJiaWxsaW5nemlwXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCJFbnRlciBaaXBcIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCIgb25DbGljaz17cHJvcHMucmVuZGVyfT5TdWJtaXQ8L2J1dHRvbj5cbiAgICAgIDwvZm9ybT5cbiAgPC9kaXY+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IFN0YWdlVGhyZWU7Il19
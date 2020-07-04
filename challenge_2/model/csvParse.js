module.exports = function csvParser(obj) {
  var columns = [];
  var rows = [];
  function filterColumns(obj) {
    var temp = [];
    var children = obj.children
    for (var key in obj) {
      if (columns.indexOf(key) === -1 && key !== 'children') {
        columns.push(key)
        temp.push(`${obj[key]}`)
      } else if (key !== 'children') {
        temp.push(`${obj[key]}`)
      }
    }
    rows.push(temp.join(','))
    for (var child in children) {
      var currentChild = children[child]
      filterColumns(currentChild)
    }
  }
  filterColumns(obj)
  rows.splice(0, 0, columns.join(','))
  return rows.join('<p class="result" style="margin-top: 0px; margin-bottom: 0px">\n</p>')
}
const getFormFields = require('../../../lib/get-form-fields')
//const authApi = require('./api1')

const onClick = function () {
  let symbol = $(this).attr('id')     // Got the ids from the clicked divs
  console.log(symbol)               //( Get ids from class selectors)
}
// https://stackoverflow.com/questions/5470729/jquery-get-id-from-class-selector

module.exports = {
  onClick: onClick
}

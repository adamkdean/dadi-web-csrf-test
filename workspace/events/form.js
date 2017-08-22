//
// This event simply exposes the form data (request body)
// to the page for display purposes.
// 

var Event = function (req, res, data, callback) {
  if (req.method === 'POST') {
    data.form_data = req.body
  }

  callback(null)
}

module.exports = function (req, res, data, callback) {
  return new Event(req, res, data, callback)
}

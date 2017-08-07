// connect to db and then get the
// query handler method
var db = require('./db')

function getIcmps (req, res, next) {
  var allTypesIcmp = db.miniQuery('.sql/allTnCicmps.sql')
  db.foddb.any(allTypesIcmp)
    .then(function (data) {
      res.status(200)
      .json({
        icmps: data,
        meta: {
          total: data.length
        }
      })
    })
    .catch(function (err) {
      return next(err.message)
    })
}

module.exports = {
  getIcmps: getIcmps
}

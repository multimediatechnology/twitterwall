'use strict'

module.exports = function (schedule) {
  var retObj = {}
  schedule.forEach(function (s) {
    var id
    if (s.has_space) {
      id = s.space_name || ''
      retObj[id] = retObj[id] || {}
      retObj[id][s.date] = retObj[id][s.date] || []
      retObj[id][s.date].push(s)
    } else {
      id = 'Venue'
      retObj[id] = {}
      retObj[id][s.date] = retObj[id][s.date] || []
      retObj[id][s.date].push(s)
    }
  })
  return retObj
}

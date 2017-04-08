'use strict'

module.exports = function (schedule) {
  var retObj = {}
  schedule.forEach(function (s) {
    const today = (new Date()).toISOString().substr(0, 10)
    const date = (new Date(s.date)).toISOString().substr(0, 10)
    if (today !== date) {
      return
    }
    let id
    if (s.has_space) {
      id = s.space_name || ''
      retObj[id] = retObj[id] || {}
      retObj[id][s.date] = retObj[id][s.date] || []
      retObj[id][s.date].push(s)
    } else {
      id = 'Venue'
      if (!retObj[id]) {
        console.log('create venue space')
        retObj[id] = {}
      }
      if (!retObj[id][s.date]) {
        console.log('creat talks array')
        retObj[id][s.date] = []
      }
      retObj[id][s.date].push(s)
    }
  })
  console.log(retObj)
  return retObj
}

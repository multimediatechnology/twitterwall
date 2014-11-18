'use strict'

var e = process.env

/*jshint camelcase: false */
module.exports = {
  title: e.TITLE || '.concat() 2015 Twitterwall',
  hashtag: e.HASHTAG || '#concat15',
  port: e.PORT || 8000,
  twitter: {
    throttle: 100,
    tracks: (e.HASHTAGS || '💩,#javascript,#concat,#concat15,#concat2015').split(','),
    users: (e.USERS || 'conc_at').split(','),
    auth: {
      access_token: e.ACCESS_TOKEN,
      access_token_secret: e.ACCESS_TOKEN_SECRET,
      consumer_key: e.CONSUMER_KEY,
      consumer_secret: e.CONSUMER_SECRET
    }
  },
  lanyrd: {
    year: e.LANYRD_YEAR || '2014',
    id: e.LANYRD_ID || 'barcamp-salzburg-october',
    showNext: 5*60*1000
  },
  admin: {
    enableAPI: e.ADMIN_USER && e.ADMIN_PASSWORD,
    username: e.ADMIN_USER,
    password: e.ADMIN_PASSWORD,
    blocked: e.BLOCKED_USERS ? e.BLOCKED_USERS.split(',') : [],
    blockRetweets: true,
    blockPossiblySensitive: true
  },
  sponsors: [{
    name: 'University of Applied Sciences',
    image: '/images/fhs.jpg',
    duration: 10000
  },{
    name: '.concat() 2015',
    image: '/images/concat.svg',
    duration: 30000
  }]
}

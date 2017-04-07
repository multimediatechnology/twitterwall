'use strict'

/*jshint camelcase: false */

var e = process.env

module.exports = {
  title: e.TITLE,
  hashtag: e.HASHTAG,
  port: e.PORT,
  twitter: {
    throttle: 1000,
    tracks: (e.HASHTAGS).split(','),
    users: (e.USERS).split(','),
    tweetHistory: true,
    auth: {
      access_token: e.ACCESS_TOKEN,
      access_token_secret: e.ACCESS_TOKEN_SECRET,
      consumer_key: e.CONSUMER_KEY,
      consumer_secret: e.CONSUMER_SECRET
    }
  },
  lanyrd: {
    overwriteDate: '2015-03-07', // for debugging
    year: e.LANYRD_YEAR || '2015',
    id: e.LANYRD_ID || 'concat',
    showNext: 15000,
    roomColors: {
      'Audimax': '#c30813',
      'Room 110': '#169c19',
      'Lounge': '#c35a18'
    }
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
    image: 'https://conc.at/images/logos/fh@2x.jpg',
    name: 'University of Applied Sciences Salzburg',
    duration: 10000
  }]
}

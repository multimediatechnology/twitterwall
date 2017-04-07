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
    overwriteDate: '2017-04-08', // for debugging
    year: e.LANYRD_YEAR,
    id: e.LANYRD_ID,
    showNext: 15000,
    roomColors: {
      'Venue': '#c30813'
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

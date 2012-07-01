// return a list of all the packages that match a particular keyword

module.exports = news

function news (couch, cb) {
  var data = {};
  data.items = [{
    date: 'March 31, 2012',
    content: 'Contributions welcome! If you are going to take on some huge part of the site, please post an issue first to discuss the direction. Beyond that, just fork and send pull requests, as is the custom of our time. <a href="https://github.com/isaacs/npm-www">More info</a>'
  }, {
    date: 'March 15, 2012',
    content: 'The latest release is now available at <a href="http://nodejs.org/">http://nodejs.org/</a>'
  }];

  cb(null, data)
}

module.exports = about

var config = require('../config.js')
function about (req, res) {
  config.content = 'about.ejs';

  req.model.load("myprofile", req);
  req.model.load('news', req)
  req.model.end(function(er, m) {
    if(er) return res.error(er);
    config.profile = m.myprofile;
    config.news = m.news;
    res.template('layout.ejs', config)
  })
}

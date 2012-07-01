module.exports = indexPage

function indexPage (req, res) {
  var name = req.params.name
  , version = req.params.version || 'latest'

  req.model.load('myprofile', req)
  req.model.load('news', req)
  req.model.end(function (er, m) {
    // errors are fine here.  generally just means login expired.
    var locals = {
      content: "index.ejs",
      index: m.index,
      news: m.news,
      profile: m.myprofile
    }
    res.template("layout.ejs", locals)
  })
}

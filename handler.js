const https = require('https')
let url = process.env.URL

module.exports.crawl = async event => {
  const promise = new Promise(function(resolve, reject) {
    console.log(event)
    https.get(url, (res) => {
        resolve(res.statusCode)
      }).on('error', (e) => {
        reject(Error(e))
      })
    })
  return promise
};

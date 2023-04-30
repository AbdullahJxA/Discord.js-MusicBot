var client = require(`../index.js`)
process.on(`uncaughtException`, err => {
    console.log(err)
})

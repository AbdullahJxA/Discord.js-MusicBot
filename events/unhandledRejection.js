var client = require(`../index.js`)
process.on(`unhandledRejection`, err => {
    console.log(err)

})

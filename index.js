const app = require('./src/app')
const client = require('./src/db')

require('dotenv').config()


const PORT = process.env.PORT || 3000

client.then(() => {
    app.listen(PORT, async () => {
        console.log(`Server running. Use our API on port: ${PORT}`)
    })
}).catch((e) => {
    console.log(`Server not running. Error message ${e.message}`)
})

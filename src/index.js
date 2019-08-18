const server = require('express')()
const main = require('./pages/main.js')

server.get('*', async (req, res) => {
    const html = await main
    console.log("main", html)
    res.end(html)
})

const port = 3000

server.listen(port, "localhost", () => {
    console.log(`localhost:${port} start`)
})

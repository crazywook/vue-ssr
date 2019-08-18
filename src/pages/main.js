const Vue = require('vue')
const app = new Vue({
    template: `<div>Hello World</div>`
})

const renderer = require('vue-server-renderer').createRenderer()

module.exports = renderer.renderToString(app)

const { parse } = require('url')
const indexAction = require('./action/index')
const aboutAction = require('./action/about')
const contactsAction = require('./action/contacts')

// const routes = {
//     '/': 'My Index Page',
//     '/about': 'About Page',
//     '/contacts': 'Contacts Page'
// }

// ver Array, Map, Set - ja agora ver Class e Object - ver new e constructor

const routes = new Map()
routes.set('/', indexAction)
routes.set('/about', aboutAction)
routes.set('/contacts', contactsAction)

const router = async (request, response) => {
    const parsedUrl = parse(request.url, true)
    const route = parsedUrl.pathname

    if (!routes.has(route)) {
        throw new Error('404 Not Found')
    }

    console.log('[info]', route)

    const action = routes.get(route)
    return await action(request, response, parsedUrl.query)
}

module.exports = router
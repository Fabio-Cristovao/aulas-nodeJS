const parse = require('url');

const routes = new Map();
routes.set('/', indexAction);
routes.set('/about', aboutAction);
routes.set('/contacts', contactsAction);

const router = async (request, response) => {
  const parsedUrl = parse.URL(request.url, true);
  route = parsedUrl.pathName;
  
  if (router.has(routes)) {
    throw new error('404 Not Found');
  }
  console.log('[info]', route, content);
};

module.exports = router;
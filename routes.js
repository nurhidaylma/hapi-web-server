const routes = [
  {
    method: 'GET',
    path: '/',
    handler: (request, h) => {
      return 'Home page'
    },
  },
  {
    method: '*',
    path: '/',
    handler: (request, h) => {
      return `Site can't be accessed using this method`
    },
  },
  {
    method: 'GET',
    path: '/about',
    handler: (request, h) => {
      return 'About page';
    },
  },
  {
    method: '*',
    path: '/about',
    handler: (request, h) => {
      return `Site can't be accessed using this method`;
    },
  },
  {
    method: 'GET',
    path: '/hello/{name?}',
    handler: (request, h) => {
      const { name = 'stranger' } = request.params
      const { lang } = request.query

      if (lang === 'id') {
        return `Selamat datang, ${name}!`
      }

      return `Hello ${name}!`
    },
  },
  {
    method: 'POST',
    path: '/login',
    handler: (request, h) => {
      const { username, password } = request.payload

      return h.response(`Welcome, ${username}!`)
        .type('application/json')
        .header('X-Powered-By', 'NodeJS')    
        .code(201)      
    },
  },
  {
    method: '*',
    path: '/{any*}',
    handler: (request, h) => {
      return 'Site not found';
    },
  },
]


module.exports = routes
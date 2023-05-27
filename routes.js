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
    method: '*',
    path: '/{any*}',
    handler: (request, h) => {
      return 'Site not found';
    },
  },
]


module.exports = routes
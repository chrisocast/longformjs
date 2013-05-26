require.config({

  deps: ['main'],

  shim: {
    'jquery': {
      exports: '$'
    },
    'underscore': {
      exports: '_'
    },
    'handlebars': {
      exports: 'Handlebars'
    }
  },

  paths: {
    jquery: '../../components/jquery/jquery',
    underscore: '../../components/underscore/underscore',
    html5shiv: '../../components/html5shiv/dist/html5shiv',
    handlebars: '../../components/handlebars.js/dist/handlebars.runtime',
    templates: 'templates/templates',
    helpers: 'helpers'
  }

});
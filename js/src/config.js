require.config({

  deps: ['main'],

  shim: {
    'jquery': {
      exports: '$'
    },
    'underscore': {
      exports: '_'
    }
  },

  paths: {
    jquery: '../../components/jquery/jquery',
    underscore: '../../components/underscore/underscore',
    html5shiv: '../../components/html5shiv/dist/html5shiv'
  }

});
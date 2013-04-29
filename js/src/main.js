require(['jquery', 'html5shiv'], function($, html5shiv){
  $(function(){
    
    var mainEls = $('header');

    for (var i = mainEls.length - 1; i >= 0; i--) {
      console.log("mainEls[i]: ", mainEls[i]);
    }

  });
});
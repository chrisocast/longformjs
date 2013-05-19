require(['jquery', 'html5shiv', 'handlebars', 'templates'], function($, html5shiv, Handlebars, templates){
  $(function(){

    var sections = document.getElementsByTagName('section');
    var sectionsTotal = sections.length;

    for (var i = sectionsTotal - 1; i >= 0; i--) {
      if (sections[i].dataset.type === 'poster'){
        sections[i].innerHTML = templates['poster'](sections[i].dataset);
      }
    }
  });
});
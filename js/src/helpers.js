  /* Components */
  
  Handlebars.registerHelper('component-poster', function(display, src, altText, options) {
    if (display === 'fixed'){
      return "<div class=\"component-poster-image fixed\" style=\"background-image: url('" + src + "');\"></div>";
    } else {
      return "<div class=\"component-poster-image\"><img src=\"" + src + "\" alt=\"" + altText + "\"></div>";
    }
  }); 
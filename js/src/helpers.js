  /* Components */
  
  Handlebars.registerHelper('component-image', function(position, src, altText, options) {
    if (position === 'fixed'){
      return "<div class=\"component-image-image fixed\" style=\"background-image: url('" + src + "');\"></div>";
    } else {
      return "<div class=\"component-image-image\"><img src=\"" + src + "\" alt=\"" + altText + "\"></div>";
    }
  }); 
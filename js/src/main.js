require(['jquery', 'html5shiv', 'handlebars', 'templates', 'helpers'], 
  function($, html5shiv, Handlebars, templates, helpers){
  
  $(function(){
    var sections = document.getElementsByTagName('div'); // todo: filter by 'longformjs' article el
    var sectionsTotal = sections.length;

    // Looks for template with name identical to 'type' property, adds html
    function insertTemplatedContent(el, templateName){
      el.innerHTML = templates[templateName](el.dataset);
    } 

    for (var i = sectionsTotal - 1; i >= 0; i--) {
      if (sections[i].dataset.componentType !== undefined){
        //console.log("type: ", sections[i].dataset.display);

        if (sections[i].dataset.display !== 'linked'){
          // Insert 'inline' components
          insertTemplatedContent(sections[i], sections[i].dataset.componentType);
        } else {
          // prepare 'linked' components
        }
      }
    }
  });
});
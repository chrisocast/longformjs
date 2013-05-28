define(['handlebars'], function(Handlebars) {

this["JST"] = this["JST"] || {};

this["JST"]["image"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, stack2, options, self=this, helperMissing=helpers.helperMissing, functionType="function", escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = "";
  return buffer;
  }

  buffer += "<div class=\"component component-image\">\n  ";
  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data};
  stack2 = ((stack1 = helpers['component-image']),stack1 ? stack1.call(depth0, depth0.position, depth0.src, depth0.altText, options) : helperMissing.call(depth0, "component-image", depth0.position, depth0.src, depth0.altText, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n  <div class=\"component-image-info\">\n    <div class=\"credit\"><p>";
  if (stack2 = helpers.credit) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.credit; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</p></div>\n    <div class=\"caption\"><p>";
  if (stack2 = helpers.caption) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.caption; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</p></div>\n  </div>\n</div>";
  return buffer;
  });

this["JST"]["masthead"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<header class=\"component component-masthead ";
  if (stack1 = helpers.fontStyle) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.fontStyle; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\n  <h1>";
  if (stack1 = helpers.headline) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.headline; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</h1>\n  <h2>";
  if (stack1 = helpers.subhead) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.subhead; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</h2>\n  <p class=\"byline\">by <span class=\"author\">";
  if (stack1 = helpers.author) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.author; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span></p>\n</header>";
  return buffer;
  });

return this["JST"];

});
define(['handlebars'], function(Handlebars) {

this["JST"] = this["JST"] || {};

this["JST"]["poster"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, stack2, options, self=this, helperMissing=helpers.helperMissing, functionType="function", escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = "";
  return buffer;
  }

  buffer += "<div class=\"component component-poster\">\n\n  ";
  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data};
  stack2 = ((stack1 = helpers['component-poster']),stack1 ? stack1.call(depth0, depth0.display, depth0.src, depth0.altText, options) : helperMissing.call(depth0, "component-poster", depth0.display, depth0.src, depth0.altText, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n  \n  <div class=\"component-poster-info\">\n    <div class=\"credit\"><p>";
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

return this["JST"];

});
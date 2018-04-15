(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['events.hbs'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"event-module\">\n  <div class=\"event-image\" style=\"background-image: url("
    + alias4(((helper = (helper = helpers.image || (depth0 != null ? depth0.image : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"image","hash":{},"data":data}) : helper)))
    + ")\"></div>\n  <h4 class=\"text event-date\">"
    + alias4(((helper = (helper = helpers.start || (depth0 != null ? depth0.start : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"start","hash":{},"data":data}) : helper)))
    + "<br>"
    + alias4(((helper = (helper = helpers.promoter || (depth0 != null ? depth0.promoter : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"promoter","hash":{},"data":data}) : helper)))
    + "</h4>\n  <h2 class=\"text event-artist\">"
    + alias4(((helper = (helper = helpers.artists || (depth0 != null ? depth0.artists : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"artists","hash":{},"data":data}) : helper)))
    + "</h2>\n  <h4 class=\"text event-room\">"
    + alias4(((helper = (helper = helpers.room || (depth0 != null ? depth0.room : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"room","hash":{},"data":data}) : helper)))
    + "<h4>\n  <h4 class=\"text event-price\">"
    + alias4(((helper = (helper = helpers.price || (depth0 != null ? depth0.price : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"price","hash":{},"data":data}) : helper)))
    + "</h4>\n  <img class=\"barcode\" src=\"../images/barcode.png\" alt=\"barcode.png\">\n  <button class=\"button\" id="
    + alias4(((helper = (helper = helpers.eventbriteID || (depth0 != null ? depth0.eventbriteID : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"eventbriteID","hash":{},"data":data}) : helper)))
    + " type=\"button\">Get Tickets</button>\n</div>\n";
},"useData":true});
})();
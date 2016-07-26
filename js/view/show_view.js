app.module('PersonApp.Show', function(Show, app, Backbone, Marionette, $, _) {
	Show.Person = Marionette.ItemView.extend({
		template: "#person-view"
	});
});
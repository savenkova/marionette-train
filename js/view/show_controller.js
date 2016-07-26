app.module('PersonApp.Show', function(Show, app, Backbone, Marionette, $, _) {
	Show.Controller = {
		showPerson: function(id) {
			var dudes = app.request('person:entities');
			var model = dudes.get(id);
			var personView = new Show.Person({
				model: model
			});

			app.mainRegion.show(personView);
		}
	}
});
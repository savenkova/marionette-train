app.module('PersonApp', function(PersonApp, app, Backbone, Marionette, $, _) {
	PersonApp.Router = Marionette.AppRouter.extend({
		appRoutes: {
			"people": "listPerson",
			"people/:id": "showPerson"
		}
	});

	var API = {
		listPerson: function() {
			app.PersonApp.List.Controller.listPerson();
		},
		showPerson: function(id) {
			PersonApp.Show.Controller.showPerson(id);
		}
	};

	app.on('person:list', function() {
		app.navigate('dudes');
		API.listPerson();
	});

	app.on('person:show', function(id) {
		app.navigate('people/' + id);
		API.showPerson(id);
	})

	app.on("before:start", function() {
		new PersonApp.Router({
			controller: API
		})
	});
})
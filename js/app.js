var app = new Marionette.Application();

app.addRegions({ // добавляем регион
    mainRegion: '#main-region'
});


app.navigate = function(route, options) {
	options || (options = {});
	Backbone.history.navigate(route, options)
};

app.getCurrentRoute = function() {
	return Backbone.history.fragment;
};

app.on('start', function () { // на старте показываем список
    if (Backbone.history) {
    	Backbone.history.start();

    	if(this.getCurrentRoute() === '') {
    		app.trigger('person:list');
    	}
    }
});
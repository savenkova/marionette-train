app.module('PersonApp.List', function(List, app, Backbone, Marionette, $, _ ) {
    List.Controller = {
        listPerson: function() {
            var dudes = app.request('person:entities'); // получаем коллекцию dudes

            var dudesListingView = new List.PersonListing({ // создаем новый экземпляр класса PersonListing(вьюшку) и передаем туда коллекцию dudes
                collection: dudes
            });

            dudesListingView.on('childview:person:delete', function(childView, model) {
                dudes.remove(model);
            });

            dudesListingView.on('childview:person:show', function(childView, model) {
                app.trigger('person:show', model.get('id'));
            });

            app.mainRegion.show(dudesListingView); // вызываем метод show - показываем нашу вьюшку в mainRegion
        }
    }
});

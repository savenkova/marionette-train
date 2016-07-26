app.module('PersonApp.List', function(List, app, Backbone, Marionette, $, _ ) {
    List.Person = Marionette.ItemView.extend({
        tagName: 'tr',
        template: '#person-list-item',
        events: {
        	"click": "highlightName",
        	"click button.js-delete": "deleteClicked",
        	"click td a.js-show": "showClicked"
    	},

    	highlightName: function(e) {
    		this.$el.toggleClass('warning')
    	},

    	deleteClicked: function(e) {
    		this.trigger('person:delete', this.model);
    		e.stopPropagation();
    	},

    	remove: function() {
    		var self = this;
      		this.$el.fadeOut(function() {
        		Marionette.ItemView.prototype.remove.call(self);
      		});
    	},

    	showClicked: function(e) {
    		e.preventDefault();
    		e.stopPropagation();
    		this.trigger("person:show", this.model);
    	}
    });

    List.PersonListing = Marionette.CompositeView.extend({
        tagName: 'table',
        className: 'table table-hover',
        template: '#person-list',
        childView: List.Person,
        childViewContainer: 'tbody'
    });

});
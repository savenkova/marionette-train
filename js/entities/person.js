app.module('Entities', function(Entities, app, Backbone, Marionette, $, _ ) {
    Entities.Person = Backbone.Model.extend({ // создаем модель 
        defaults: {
            firstName: '',
            lastName: '',
            age: '',
            alias: 'dude'
        }
    });

    Entities.PersonCollection = Backbone.Collection.extend({ // создаем коллекцию
        model: Entities.Person,                              // указываем из каких моделей она состоит
        comparator: function(person) {
            return person.get('firstName') + " " + person.get('lastName'); // сортируем модели в коллекции
        }
    });

    var dudes; // сюда положим экземпляр класса PersonCollection

    var initializePerson = function() { // функция для наполнения коллекции
        dudes = new Entities.PersonCollection([
            {id: 1, firstName: 'Vasya', lastName: 'Kolbaskin', age: '21'},
            {id: 2, firstName: 'Kolia', lastName: 'Korovin', age: '23', alias: 'mumu'},
            {id: 3, firstName: 'Serega', lastName: 'Porogin', age: '18', alias: 'porog'}
        ]);
    };

    var API = {
        getPersonEntities: function() { // функция возращающая коллекцию dudes, она у нас приватная для app
            if(dudes === undefined) {
                initializePerson();
            };

            return dudes;
        }
    };

    app.reqres.setHandler('person:entities', function() { // регистрируем обработчик на нашем объекте приложения 
        return API.getPersonEntities() // теперь мы можем принимать коллекцию при помощи request
    })
});
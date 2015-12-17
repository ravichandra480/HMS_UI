'use strict';
define(['app'], function(app){
    app.factory('rooms', ['$resource',
        function($resource){
            return $resource('https://github.com/Fyrd/caniuse/blob/master/data.json', {}, {
            get: {method:'GET', params:{}, isArray:true}
        });
    }]);
});

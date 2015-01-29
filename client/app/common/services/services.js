'use strict';

angular.module('services', [])

.factory('sessionService', function() {
    return {
        get: function(key) {
            return sessionStorage.getItem(key);
        },
        set: function(key, value) {
            return sessionStorage.setItem(key, value);
        },
        unset: function(key) {
            return sessionStorage.removeItem(key);
        }
    };
})

.factory('tokenInterceptor', ['$q', '$window', '$location', 'sessionService',
    function($q, $window, $location, sessionService) {
        'use strict';
        return {
            request: function(config) {
                config.headers = config.headers || {};
                var token = sessionService.get('token');
                if (token) {
                    config.headers.Authorization = 'Bearer' + token;
                }
                return config;
            }
        };
    }
]);
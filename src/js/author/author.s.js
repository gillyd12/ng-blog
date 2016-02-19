/**
 * Created by bryangill on 2/8/16.
 */

var http;
var q;
var config;

class AuthorService {

    constructor($http, $q, configuration) {

        http = $http;
        q = $q;
        config = configuration;

    }

    getAuthor(id) {
        var request = {
            method: 'get',
            url: config.api_url + ':' + config.api_port + '/user' + '/' + id
        };

        return http(request).then(function (response) {
            if (response) {
                return response;
            } else {
                return q.reject(response);
            }
        }, function (response) {
            return q.reject(response);
        });
    }


}

AuthorService.$inject = ['$http', '$q', 'configuration'];

export default AuthorService;

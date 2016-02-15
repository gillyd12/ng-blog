/**
 * Created by bryangill on 2/14/16.
 */
var http;
var q;
var config;

class TagService {

    constructor($http, $q, configuration) {

        http = $http;
        q = $q;
        config = configuration;

    }

    getTag(id) {
        var request = {
            method: 'get',
            url: config.api_url + ':' + config.api_port + '/tags' + '/' + id
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

TagService.$inject = ['$http', '$q', 'configuration'];

export default TagService;
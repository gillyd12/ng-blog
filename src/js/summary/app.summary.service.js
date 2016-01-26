/**
 * Created by bryangill on 10/24/15.
 */

var request;
var http;
var q;
var config;

class SummaryService {

    constructor($http, $q, configuration) {

        http = $http;
        q = $q;
        config = configuration;

        request = {
            method: 'get',
            url: config.api_url + ':' + config.api_port + '/posts'
        };

    }

    getPosts() {
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

SummaryService.$inject = ['$http', '$q', 'configuration'];

export default SummaryService;

/**
 * Created by bryangill on 4/9/16.
 */
var http;
var q;
var config;

class MediaService {

    constructor($http, $q, configuration) {

        http = $http;
        q = $q;
        config = configuration;

    }

    getMedia(id) {
        var request = {
            method: 'get',
            url: config.api_url + ':' + config.api_port + '/media' + '/' + id
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

MediaService.$inject = ['$http', '$q', 'configuration'];

export default MediaService;
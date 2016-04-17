/**
 * Created by bryangill on 10/24/15.
 */

var http;
var q;
var config;

class SummaryService {

    constructor($http, $q, siwBlogConfig) {

        http = $http;
        q = $q;
        config = siwBlogConfig;

    }

    getPosts(params) {
        var request = {
            method: 'get',
            url: config.api_url + ':' + config.api_port + '/post',
            params: params
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

    getPost(id, params) {
        var request = {
            method: 'get',
            url: config.api_url + ':' + config.api_port + '/post' + '/' + id,
            params: params
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

SummaryService.$inject = ['$http', '$q', 'siwBlog.config'];

export default SummaryService;

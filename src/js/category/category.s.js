/**
 * Created by bryangill on 2/14/16.
 */
var http;
var q;
var config;

class CategoryService {

    constructor($http, $q, siwBlogConfig) {

        http = $http;
        q = $q;
        config = siwBlogConfig;

    }

    getCategory(id) {
        var request = {
            method: 'get',
            url: config.api_url + ':' + config.api_port + '/category' + '/' + id
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

CategoryService.$inject = ['$http', '$q', 'siwBlog.config'];

export default CategoryService;
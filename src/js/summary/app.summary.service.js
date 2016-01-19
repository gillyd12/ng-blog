/**
 * Created by bryangill on 10/24/15.
 */

var request;
var http;
var q;

class SummaryService {

    constructor($http, $q) {
        request = {
            method: 'get',
            url: 'http://localhost:1337/posts'
            //params: {}
        };
        http = $http;
        q = $q;
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

SummaryService.$inject = ['$http', '$q'];

export default SummaryService;

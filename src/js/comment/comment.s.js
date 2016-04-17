/**
 * Created by bryangill on 2/14/16.
 */
var http;
var q;
var config;

class CommentService {

    constructor($http, $q, siwBlogConfig) {

        http = $http;
        q = $q;
        config = siwBlogConfig;

    }

    getComment(postid) {
        var request = {
            method: 'get',
            url: config.api_url + ':' + config.api_port + '/comment' + '?where={"post_id":' + postid + '}'
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

CommentService.$inject = ['$http', '$q', 'siwBlog.config'];

export default CommentService;
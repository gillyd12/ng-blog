/**
 * Created by bryangill on 10/24/15.
 */

var service;
var view;

class SummaryController {

    constructor($scope, summaryService, siwBlogConfig) {
        this.init($scope, summaryService, siwBlogConfig);
    }

    init($scope, summaryService, siwBlogConfig) {
        view = $scope;
        service = summaryService;
        if ($scope.api_port) {
            siwBlogConfig.api_port = $scope.api_port;
        }
        if ($scope.api_url) {
            siwBlogConfig.api_url = $scope.api_url;
        }

        this.retrievePosts('published_date', 'desc', 4);
    }

    retrievePosts() {
        var params = {};

        service.getPosts(params)
            .then(function (response) {
                view.collection = response.data;
            }, function (response) {
                view.error = response.statusText;
            });
    }

    retrievePosts(orderByField, orderBy, limit) {

        var params = {
            sort: orderByField + ' ' + orderBy,
            limit: limit
        };

        service.getPosts(params)
            .then(function (response) {
                view.collection = response.data;
            }, function (response) {
                view.error = response.statusText;
            });
    }

}
    
SummaryController.$inject = ['$scope', 'summaryService', 'siwBlog.config'];

export default SummaryController;
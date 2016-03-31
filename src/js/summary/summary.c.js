/**
 * Created by bryangill on 10/24/15.
 */

var service;
var view;

class SummaryController {

    constructor($scope, summaryService, configuration) {
        this.init($scope, summaryService, configuration);
    }

    init($scope, summaryService, configuration) {
        view = $scope;
        service = summaryService;
        if ($scope.api_port) {
            configuration.api_port = $scope.api_port;
        }
        if ($scope.api_url) {
            configuration.api_url = $scope.api_url;
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
    
SummaryController.$inject = ['$scope', 'summaryService', 'configuration'];

export default SummaryController;
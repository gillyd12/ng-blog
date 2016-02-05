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
        view = this;
        //view = $scope;
        service = summaryService;
        if ($scope.api_port) {
            configuration.api_port = $scope.api_port;
        }
        if ($scope.api_url) {
            configuration.api_url = $scope.api_url;
        }

        this.retrievePosts();
    }

    retrievePosts() {
        service.getPosts()
            .then(function (response) {
                view.collection = response.data;
            }, function (response) {
                view.error = response.statusText;
            });
    }
}

SummaryController.$inject = ['$scope', 'summaryService', 'configuration'];

export default SummaryController;
/**
 * Created by bryangill on 10/24/15.
 */

var summaryService;
var view;

class SummaryController {

    constructor($scope, SummaryService, configuration) {
        this.init($scope, SummaryService, configuration);
    }

    init($scope, SummaryService, configuration) {
        view = this;
        //view = $scope;
        summaryService = SummaryService;
        configuration.api_port = $scope.api_port;
        configuration.api_url = $scope.api_url;

        this.retrievePosts();
    }

    retrievePosts() {
        summaryService.getPosts()
            .then(function (response) {
                view.collection = response.data;
            }, function (response) {
                view.error = response.statusText;
            });
    }
}

SummaryController.$inject = ['$scope', 'SummaryService', 'configuration'];

export default SummaryController;
/**
 * Created by bryangill on 10/24/15.
 */

var summaryService;
var view;

class SummaryController {

    constructor($scope, SummaryService) {
        this.init($scope, SummaryService);
    }

    init($scope, SummaryService) {
        view = $scope;
        summaryService = SummaryService;
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

SummaryController.$inject = ['$scope', 'SummaryService'];

export default SummaryController;
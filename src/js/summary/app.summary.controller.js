/**
 * Created by bryangill on 10/24/15.
 */

var summaryService;
var view;
var http;

class SummaryController {

    constructor($scope, $http, SummaryService) {
        this.init($scope, $http, SummaryService);

    }

    init($scope, $http, SummaryService) {
        view = $scope;
        http = $http;
        summaryService = SummaryService;
        //this.retrieveBlogContent()
        //    .then(function (data) {
        //        view.data = data.data;
        //    }, function (response) {
        //        view.error = response.statusText;
        //    });
        this.retrievePosts()
            .then(function (data) {
                view.posts = data.data;
            }, function (response) {
                view.error = response.statusText;
            });


    }

    retrieveBlogContent() {
        // this method will be refactored into a service.  Temporarily in the constructor right now.
        return http.get('http://localhost:1337/blogs');
    }

    retrievePosts() {
        // this method will be refactored into a service.  Temporarily in the constructor right now.
        return http.get('http://localhost:1337/posts');
    }


}

SummaryController.$inject = ['$scope', '$http', 'SummaryService'];

export default SummaryController;
/**
 * Created by bryangill on 2/8/16.
 */
var service;
var view;

class AuthorController {

    constructor($scope, authorService, configuration) {
        this.init($scope, authorService, configuration);
    }

    init($scope, authorService, configuration) {
        view = $scope;
        console.log('instantiated');
        service = authorService;
        if ($scope.api_port) {
            configuration.api_port = $scope.api_port;
        }
        if ($scope.api_url) {
            configuration.api_url = $scope.api_url;
        }
    }

    retrieveAuthor(id) {
        return service.getAuthor(id);
    }
}

AuthorController.$inject = ['$scope', 'authorService', 'configuration'];

export default AuthorController;
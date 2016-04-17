/**
 * Created by bryangill on 2/8/16.
 */
var service;
var view;

class AuthorController {

    constructor($scope, authorService) {
        this.init($scope, authorService);
    }

    init($scope, authorService) {
        view = $scope;
        service = authorService;
    }

    retrieveAuthor(id) {
        return service.getAuthor(id);
    }
}

AuthorController.$inject = ['$scope', 'authorService'];

export default AuthorController;
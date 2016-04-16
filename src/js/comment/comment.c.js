/**
 * Created by bryangill on 2/14/16.
 */
var service;
var view;

class CommentController {

    constructor($scope, commentService, configuration) {
        this.init($scope, commentService, configuration);
    }

    init($scope, commentService, configuration) {
        view = $scope;
        service = commentService;
    }

    retrieveComment(id) {
        return service.getComment(id);
    }
}

CommentController.$inject = ['$scope', 'commentService', 'configuration'];

export default CommentController;
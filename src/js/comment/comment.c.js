/**
 * Created by bryangill on 2/14/16.
 */
var service;
var view;

class CommentController {

    constructor($scope, commentService) {
        this.init($scope, commentService);
    }

    init($scope, commentService) {
        view = $scope;
        service = commentService;
    }

    retrieveComment(id) {
        return service.getComment(id);
    }
}

CommentController.$inject = ['$scope', 'commentService'];

export default CommentController;
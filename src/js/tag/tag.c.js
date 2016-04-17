/**
 * Created by bryangill on 2/14/16.
 */
var service;
var view;

class TagController {

    constructor($scope, tagService) {
        this.init($scope, tagService);
    }

    init($scope, tagService) {
        view = $scope;
        service = tagService;
    }

    retrieveTag(id) {
        return service.getTag(id);
    }
}

TagController.$inject = ['$scope', 'tagService'];

export default TagController;
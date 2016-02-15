/**
 * Created by bryangill on 2/14/16.
 */
var service;
var view;

class TagController {

    constructor($scope, tagService, configuration) {
        this.init($scope, tagService, configuration);
    }

    init($scope, tagService, configuration) {
        view = $scope;
        service = tagService;
        if ($scope.api_port) {
            configuration.api_port = $scope.api_port;
        }
        if ($scope.api_url) {
            configuration.api_url = $scope.api_url;
        }
    }

    retrieveTag(id) {
        return service.getTag(id);
    }
}

TagController.$inject = ['$scope', 'tagService', 'configuration'];

export default TagController;
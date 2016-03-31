/**
 * Created by bryangill on 2/14/16.
 */
var service;
var view;

class CategoryController {

    constructor($scope, categoryService, configuration) {
        this.init($scope, categoryService, configuration);
    }

    init($scope, categoryService, configuration) {
        view = $scope;
        service = categoryService;
        if ($scope.api_port) {
            configuration.api_port = $scope.api_port;
        }
        if ($scope.api_url) {
            configuration.api_url = $scope.api_url;
        }
    }

    retrieveCategory(id) {
        return service.getCategory(id);
    }
}

CategoryController.$inject = ['$scope', 'categoryService', 'configuration'];

export default CategoryController;
/**
 * Created by bryangill on 2/14/16.
 */
var service;
var view;

class CategoryController {

    constructor($scope, categoryService) {
        this.init($scope, categoryService);
    }

    init($scope, categoryService) {
        view = $scope;
        service = categoryService;
    }

    retrieveCategory(id) {
        return service.getCategory(id);
    }
}

CategoryController.$inject = ['$scope', 'categoryService'];

export default CategoryController;
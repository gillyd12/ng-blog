/**
 * Created by bryangill on 3/31/16.
 */
import CategoryController from './category.c.js';

function category() {
    return {
        scope: {
            category: '@'
        },
        controllerAs: "categoryCtrl",
        controller: CategoryController,
        link: function (scope, element, attrs, categoryCtrl) {
            categoryCtrl.retrieveCategory(attrs.category).then(function (response) {
                element.append(response.data.name);
            })
        }
    };
}

export default category;
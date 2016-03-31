/**
 * Created by bryangill on 2/14/16.
 */
import directive from './category.d.js';
import CategoryController from './category.c.js';
import categoryService from './category.s.js';

export default angular.module('siwBlog.category', ['ngSanitize'])
    .directive('siwCategory', directive)
    .controller('CategoryController', CategoryController)
    .service('categoryService', categoryService);


/**
 * Created by bryangill on 2/8/16.
 */
import directive from './author.d.js';
import AuthorController from './author.c.js';
import authorService from './author.s.js';

export default angular.module('siwBlog.author', ['ngSanitize'])
    .directive('siwAuthor', directive)
    .controller('AuthorController', AuthorController)
    .service('authorService', authorService);





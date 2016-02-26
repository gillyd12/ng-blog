/**
 * Created by bryangill on 2/14/16.
 */
import directive from './tag.d.js';
import TagController from './tag.c.js';
import tagService from './tag.s.js';

export default angular.module('ngBlog.tag', ['ngSanitize'])
    .directive('ngbTag', directive)
    .controller('TagController', TagController)
    .service('tagService', tagService);


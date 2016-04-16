/**
 * Created by bryangill on 4/9/16.
 */
import directive from './media.d.js';
import controller from './media.c.js';
import service from './media.s.js';

export default angular.module('siwBlog.media', ['ngSanitize'])
    .directive('siwMedia', directive)
    .controller('MediaController', controller)
    .service('mediaService', service);
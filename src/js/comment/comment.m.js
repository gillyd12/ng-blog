/**
 * Created by bryangill on 2/14/16.
 */
import directive from './comment.d.js';
import CommentController from './comment.c.js';
import commentService from './comment.s.js';

export default angular.module('siwBlog.comment', ['ngSanitize'])
    .directive('siwComment', directive)
    .controller('CommentController', CommentController)
    .service('commentService', commentService);


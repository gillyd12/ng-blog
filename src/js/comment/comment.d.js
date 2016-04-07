/**
 * Created by bryangill on 3/31/16.
 */
import template from './comment.html!text';
import CommentController from './comment.c.js';

function comment() {
    return {
        scope: {
            postid: '@'
        },
        template: template,
        controllerAs: "commentCtrl",
        controller: CommentController,
        link: function (scope, element, attrs, commentCtrl) {
            commentCtrl.retrieveComment(attrs.postid).then(function (response) {
                scope.collection = response.data;
            })
        }
    };
}

export default comment;
/**
 * Created by bryangill on 2/8/16.
 */

import template from './author.html!text';
import AuthorController from './author.c.js';

function author() {
    return {
        template: template,
        scope: {
            author: '='
        },
        controllerAs: "authorCtrl",
        controller: AuthorController
        //link: function (scope, element, attrs, authorCtrl) {
        //    scope.retrieve = function () {
        //        authorCtrl.retrieveAuthor(attrs.author);
        //    };
        //    console.log('calling link function');
        //    //authorCtrl.retrieveAuthor(attrs.author);
        //    //console.log(scope);
        //    //console.log(element);
        //    //console.log(attrs);
        //    //console.log(authorCtrl);
        //}
    };
}

export default author;
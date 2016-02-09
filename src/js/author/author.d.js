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
        controller: AuthorController,
        link: function (scope, element, attrs, authorCtrl) {
            authorCtrl.retrieveAuthor(attrs.author);
        }
    };
}

export default author;
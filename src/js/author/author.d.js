/**
 * Created by bryangill on 2/8/16.
 */

import template from './author.html!text';
import AuthorController from './author.c.js';

function author() {
    return {
        scope: {},
        controllerAs: "authorCtrl",
        controller: AuthorController,
        link: function (scope, element, attrs, authorCtrl) {
            attrs.$observe('author', function (value) {
                if (value) {
                    authorCtrl.retrieveAuthor(attrs.author).then(function (response) {
                        element.append(response.data.name);
                    });
                }
            });
        }
    };
}

export default author;
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
    };
}

export default author;
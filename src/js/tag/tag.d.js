/**
 * Created by bryangill on 2/14/16.
 */
import TagController from './tag.c.js';

function tag() {
    return {
        scope: {
            tags: '@'
        },
        controllerAs: "tagCtrl",
        controller: TagController,
        link: function (scope, element, attrs, tagCtrl) {
            tagCtrl.retrieveTag(attrs.tag).then(function (response) {
                element.append(response.data.name);
            })
        }
    };
}

export default tag;
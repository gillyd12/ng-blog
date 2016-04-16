/**
 * Created by bryangill on 4/9/16.
 */
import MediaController from './media.c.js';

function media() {
    return {
        scope: {
            mediaId: '@'
        },
        controllerAs: "mediaCtrl",
        controller: MediaController,
        link: function (scope, element, attrs, mediaCtrl) {
            if (attrs.mediaId != '0') {
                mediaCtrl.retrieveMedia(attrs.mediaId).then(function (response) {
                    element.css({
                        'background-image': 'url(data:image/*;base64,' + response.data.guid + ')'
                    });
                })
            }
        }
    };
}

export default media;
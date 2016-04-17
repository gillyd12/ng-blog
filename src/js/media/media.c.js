/**
 * Created by bryangill on 4/9/16.
 */
var service;
var view;

class MediaController {

    constructor($scope, mediaService) {
        this.init($scope, mediaService);
    }

    init($scope, mediaService) {
        view = $scope;
        service = mediaService;
    }

    retrieveMedia(id) {
        return service.getMedia(id);
    }
}

MediaController.$inject = ['$scope', 'mediaService'];

export default MediaController;
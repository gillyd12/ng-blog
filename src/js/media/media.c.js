/**
 * Created by bryangill on 4/9/16.
 */
var service;
var view;

class MediaController {

    constructor($scope, mediaService, configuration) {
        this.init($scope, mediaService, configuration);
    }

    init($scope, mediaService, configuration) {
        view = $scope;
        service = mediaService;
    }

    retrieveMedia(id) {
        return service.getMedia(id);
    }
}

MediaController.$inject = ['$scope', 'mediaService', 'configuration'];

export default MediaController;
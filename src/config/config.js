/**
 * Created by bryangill on 1/24/16.
 */
'use strict';

export default angular.module('services.config', [])
    .constant('configuration', {
        environment: '@@environment',
        api_port: '@@api.port',
        api_url: '@@api.url'
    })

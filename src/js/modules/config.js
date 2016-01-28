/**
 * Created by bryangill on 1/24/16.
 */
'use strict';

export default angular.module('services.config', [])
    .constant('configuration', {
        environment: 'development',
        api_port: '1337',
        api_url: 'http://localhost'
    })

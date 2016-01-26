/**
 * Created by bryangill on 10/24/15.
 */
import SummaryModule from '../summary/app.summary.module'
import ConfigurationModule from './config'

export default angular.module('Application', [
    SummaryModule.name,
    ConfigurationModule.name
]);
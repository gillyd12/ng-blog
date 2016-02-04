/**
 * Created by bryangill on 10/24/15.
 */
import SummaryModule from '../summary/summary.m.js'
import ConfigurationModule from './config'

export default angular.module('ngBlog.module.application', [
    SummaryModule.name,
    ConfigurationModule.name
]);
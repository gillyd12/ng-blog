/**
 * Created by Gillyd on 10/22/2015.
 */
import summary from './summary/summary.m';
import author from './author/author.m';
import tag from './tag/tag.m';

export default angular.module('ngBlog', [
    'ngBlog.summary',
    'ngBlog.author',
    'ngBlog.tag'
]);

define('modules/bzMenu/directives/bzMenu', [
    'modules/bzMenu/app',

    'modules/bzMenu/directives/bzMenuDropdown'
], function(app) {
    'use strict';

    app.directive('bzMenu', function() {
        return {
            restrict: 'A',
            replace: true,
            scope: {
                active: '@',
                menus: '=bzMenu'
            },
            controller: function() {
            },
            link: function($scope, $element) {
            },
            template: '<ul class="nav">' +
                '<li ng-repeat="item in menus" ng-class="{\'dropdown-list\': item.items.length}">' +
                '<a bz-menu-dropdown ng-class="{\'dropdown-toggle\': item.items.length}" ng-href="{{item.link}}" data-toggle="dropdown-list">{{item.text}}</a>' +
                '<ul class="dropdown-menu" ng-if="item.items.length">' +
                '<li ng-repeat="subitem in item.items">' +
                '<a ng-href="{{subitem.link}}">{{ subitem.text }}</a>' +
                '</li>' +
                '</ul>' +
                '</li>' +
                '</ul>'
        };
    });

});
'use strict';

// Require external libraries
window.angular = require('angular');
require('../js/angular-animate.min.js');
require('../js/ui-bootstrap-tpls-0.11.2.min.js');
window._ = require('underscore');

require('./component/form');
require('./component/article');

require('./service');

var angularApp = angular.module('myApp', [
    'ngComponentRouter',
    'ui.bootstrap',
    'formComponent',
    'articleModule',
    'articleServiceModule'
]);

angularApp.component('voteApp', {
    controller: voteAppController,
    template:`
        <div class='container'>
            <div class='row'>
                <h1>Angular Unit testing</h1>
                <vote-form>
                </vote-form>
                <div data-ng-repeat='article in $ctrl.articles'>
                    <article title='article.title' vote='article.vote'></article>
                </div>
            </div>
        </div>`
})

function voteAppController(){
    var _this = this;

    this.articles = [
        {'title': 'facebook', 'vote': 2},
        {'title': 'linkedin', 'vote': 3},
    ]
}
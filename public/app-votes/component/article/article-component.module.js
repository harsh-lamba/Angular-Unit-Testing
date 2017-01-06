'use strict';

(function(angular){
    angular.module('articleModule', ['articleServiceModule'])
        .component('article', {
            controller:articleController,
            bindings:{
                vote:'<',
                title:'<'
            },
            template:`<div class='jumbotron'>
                        <div class='row'>
                            <div class='col-sm-6'>
                                <h1 class='no-padding-top'>{{$ctrl.title}}</h1>
                                <h3>Points: {{$ctrl.vote}}</h3>
                            </div>
                            <div class='col-sm-6'>
                                <a
                                    href='javascript:void(0)'
                                    class='big-fonts margin-right-big'
                                    data-ng-click='$ctrl.voteUp()'>
                                    <i class="fa fa-thumbs-up" aria-hidden="true"></i>
                                </a>
                                <a
                                    href='javascript:void(0)'
                                    class='big-fonts'
                                    data-ng-click='$ctrl.voteDown()'>
                                    <i class="fa fa-thumbs-down" aria-hidden="true"></i>
                                </a>
                            </div>
                        </div>
                    </div>`
        })

    articleController.$inject = ['articleComponentService'];
    function articleController(articleComponentService){
        var _this = this;

        _this.voteUp = function voteUp(){
            _this.point = articleComponentService.voteUp(_this.point);
        }

        _this.voteDown = function voteDown(){
            _this.point = articleComponentService.voteDown(_this.point);
        }
    }
})(window.angular)
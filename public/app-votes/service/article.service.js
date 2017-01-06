'use strict';

(function(angular){
    angular.module('articleServiceModule', [])
        .factory('articleComponentService', articleComponentService);

    articleComponentService.$inject = [];

    function articleComponentService(){
        return {
            voteUp: voteUp,
            voteDown: voteDown
        }

        function voteUp(vote){
            vote = vote || 0;
            return vote+=1;
        }

        function voteDown(vote){
            vote = vote || 0;
            return vote-=1;
        }
    }
})(window.angular);
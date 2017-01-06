'use strict';
(function(angular){
    angular.module('formComponent', [])
        .component('voteForm', {
            template: `<form>
                            <div class='form-group'>
                                <label for='title'>Title</label>
                                <input name='title' placeholder='title' type='text' class='form-control'/>
                            </div>
                            <div class='form-group'>
                                <label for='link'>Link</label>
                                <input name='link' placeholder='link' type='text' class='form-control'/>
                            </div>
                            <div class='form-group'>
                                <button class='btn btn-primary'>Submit</button>
                            </div>
                        </form>`
        })
})(window.angular)
const app = angular.module('pictureApp', []);

const mainController = app.controller('MainController', ['$http', function($http){
 let self = this;

self.picArray[];

self.getPictures = function(){
    $http({
        method:'GET',
        url:'/pictures',
    })
    .then(function(response){
        console.log('Getting Pictures', response.data);
        self.picArray = response.data;
    })
    .catch(function(error){
        console.log('Error getting Pictures', error);
    })
}

}])
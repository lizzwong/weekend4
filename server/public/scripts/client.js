const app = angular.module('pictureApp', []);

const mainController = app.controller('MainController', ['$http', function($http){
 let self = this;

    self.picArray = [ ];

    self.commentArray = 
self.getPictures = function () {
     $http({
        method: 'GET',
        url: '/pictures',
    })
        .then(function (response) {
            console.log('Getting Pictures', response.data);
             self.picArray = response.data;
     })
        .catch(function (error) {
            console.log('Error getting Pictures', error);
    })
}

self.addHeart = function(picture){
    console.log('in addHeart');
    
    $http({
        method:'PUT',
        url:`/pictures/${picture.id}`,
    })
    .then(function(response){
        console.log('Heart added', response);
        self.getPictures();
    })
    .catch(function(error){
        console.log('Error adding heart', error);
    })
}

    self.showStory = function (picture) {

        picture.story = true;
    }

    self.hideStory = function (picture) {

        picture.story = false;
    }

    self.showComment = function (picture) {

        picture.comment = true;
    }

   

self.getPictures();

}])
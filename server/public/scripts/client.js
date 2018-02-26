const app = angular.module('pictureApp', []);

const mainController = app.controller('MainController', ['$http', function($http){
 let self = this;

    self.picArray = [ ];

    self.commentArray = [ ];


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

self.addComment = function(picture){
    console.log('in comment', picture.id, self.picture.commentBody);
   let objectToSend = {
       picture_id: picture.id,
       comment: self.picture.commentBody,
   };
   $http({
       method: 'POST',
       url: '/pictures',
       data: objectToSend,
   })
   .then(function(response){
       console.log('Comment Added');
       self.hideComment();
       self.picture.commentBody = {};
   })
   .catch(function(error){
       console.log('Could not add comment.', error);
   })

}

self.getComments = function(picture){
    $http({
        method: 'GET',
        url: `/pictures/comment/${picture.id}`,
    })
    .then(function (response) {
        console.log('Getting comments', response.data);
        self.commentArray = response.data;
        self.allComments(picture);
    })
    .catch(function (error) {
        console.log('Error getting comments', error);
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

    self.hideComment = function (picture) {
       
        picture.comment = false;
    }
   
    self.allComments = function (picture) {

        picture.allComments = true;
    }

self.getPictures();

}])
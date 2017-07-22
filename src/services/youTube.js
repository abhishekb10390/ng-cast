angular.module('video-player')
.service('youTube', function($http) {
  // TODO
  this.search = (query, callback) => {
    $http({
      method: 'GET',
      url: 'https://www.googleapis.com/youtube/v3/search',
    }).then(function successCallback(data) {
        // this callback will be called asynchronously
        // when the response is available
      console.log('success');
      callback(data.items);
    }, function errorCallback(data) {
      console.log('error');
        // called asynchronously if an error occurs
        // or server returns response with an error status.
    });
  };
});

// $http({
//     method: 'GET',
//     url: '/someUrl'
//   }).then(function successCallback(data) {
//       // this callback will be called asynchronously
//       // when the response is available
//     callback(data.items);
//   }, function errorCallback(response) {
//       // called asynchronously if an error occurs
//       // or server returns response with an error status.
//   });
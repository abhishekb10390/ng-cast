angular.module('video-player')
.service('youTube', function(callback) {
  // TODO
  $http({
    method: 'GET',
    url: '/someUrl'
  }).then(function successCallback(data) {
      // this callback will be called asynchronously
      // when the response is available
    callback(data.items);
  }, function errorCallback(response) {
      // called asynchronously if an error occurs
      // or server returns response with an error status.
  });
});

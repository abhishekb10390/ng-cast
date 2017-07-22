angular.module('video-player')
.service('youTube', function($http) {
  this.search = (options, callback) => {
    $http({
      method: 'GET',
      url: 'https://www.googleapis.com/youtube/v3/search',
      params: {
        q: options.query,
        key: options.key,
        maxResult: 5,
        part: 'snippet',
        type: 'video',
        videoEmbeddable: 'true'
      }, 
      datatype: 'json',
    }).then(function successCallback(data) {
      console.log('success');
      callback(data.data.items);
    }, function errorCallback(data) {
      console.log('error');
    });
  };
});

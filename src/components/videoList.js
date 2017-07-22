angular.module('video-player')
.component('videoList', {
  bindings: {
    videos: '<',
    selectvideo: '<'
  },

  controller: function() {
  },

  

  templateUrl: 'src/templates/videoList.html'
});

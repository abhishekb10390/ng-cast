angular.module('video-player')
.component('videoList', {
  bindings: {
    videos: '<',
    selectvideo: '<'
  },

  controller: function() {
    this.onClick = () => {
    };
  },

  

  templateUrl: 'src/templates/videoList.html'
});

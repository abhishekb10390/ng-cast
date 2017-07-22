angular.module('video-player')
.component('videoListEntry', {
  bindings: {
    video: '<',
    selectvideo: '<'
  }, 
  controller: function() {
  },


  templateUrl: 'src/templates/videoListEntry.html'
});

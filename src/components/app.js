angular.module('video-player')

.component('app', {

  bindings: {
    
  },
  
  controller: function(youTube) {
    this.videos = null;
    this.currentVideo = null;
    this.selectVideo = (video) => {
      this.currentVideo = video;
    };
    
    this.searchResults = (query) => {
      var options = {};
      options.query = query;
      options.max = 5;
      options.key = window.YOUTUBE_API_KEY;
      youTube.search(options, (data) => {
        this.videos = data;
        this.currentVideo = data[0];
      });   
    };  
    this.searchResults('react is better');
  },
  templateUrl: 'src/templates/app.html'
});



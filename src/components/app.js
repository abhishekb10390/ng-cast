angular.module('video-player')

.component('app', {
  
  controller: function(youTube) {
    this.search = youTube.search;
    this.videos = window.exampleVideoData;
    this.currentVideo = this.videos[0];
    this.selectVideo = (video) => {
      console.log('clicked');
      this.currentVideo = video;
    };
    this.searchResults = (data) => {
      this.videos = data.items;
      this.currentVideo = data.items[0];
    };
    this.handleUserInput = function(value) {
      console.log('hi');
      var query = value;
      var options = {};
      options.query = query;
      options.max = 5;
      options.key = window.YOUTUBE_API_KEY; 
      this.search(options, this.searchResults);  
    };
    
  },
  templateUrl: 'src/templates/app.html'
});



'use strict';

var learnjs = {};

learnjs.showView = function(hash) {
  var problemView = $('<div class="problem-view">').text('Coming Soon!');
  $('.view-container').empty().append(problemView);
};

import {publish} from 'app/pub-sub';

var $ = jQuery;
var _comments = [];

var TOPIC = 'stores/comment';
var URL = 'comments.json';

var CommentStore = {
  get: function() {
    var $xhr = $.getJSON(URL);

    $xhr.then(function(response) {
      _comments = response.comments;
      publish(TOPIC, _comments);
      return response;
    }.bind(this));

    $xhr.fail(function(xhr, status, err) {
      console.error(URL, status, err.toString());
    }.bind(this));

    publish(TOPIC, _comments);
  },

  put: function(comment) {
    var $xhr;

    _comments.push(comment);

    publish(TOPIC, _comments);

    $xhr = $.ajax({
      url: URL,
      dataType: 'json',
      type: 'PUT',
      data: comment
    });

    $xhr.then(function(response) {
      _comments = response.comments;
      publish(TOPIC, _comments);
      return response;
    });
    
    $xhr.fail(function(xhr, status, err) {
      console.log(URL, status, err.toString());
    }.bind(this));

    return _comments;
  }
};

export default CommentStore;

import {publish} from 'app/pub-sub';
import Ajax from 'app/ajax';

var _comments = [];

var TOPIC = 'stores/comment';
var URL = 'comments.json';

var CommentStore = {
  get: function() {
    publish(TOPIC, _comments);

    Ajax.get(URL).then(function(response) {
      _comments = response.comments;
      publish(TOPIC, _comments);
      return _comments;
    }, function(error) {
      console.log(error);
    });
  },

  put: function(comment) {
    _comments.push(comment);
    publish(TOPIC, _comments);

    Ajax.put(URL, comment).then(function(response) {
      _comments = response.comments;
      publish(TOPIC, _comments);
      return _comments;
    }, function(error) {
      console.log(error);
    });
  }
};

export default CommentStore;

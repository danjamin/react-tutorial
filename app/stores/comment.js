import {publish} from 'app/pub-sub';
import Ajax from 'app/ajax';

var _comments = [];
var URL = 'comments.json';
var _alreadyLoaded = false;

var CommentStore = {
  getComments: function() {
    if (!_alreadyLoaded) {
      _alreadyLoaded = true;

      Ajax.get(URL).then(function(response) {
        _comments = response.comments;
        publish('comment');
        return _comments;
      }, function(error) {
        console.log(error);
      });
    }

    return _comments;
  },

  addComment: function(comment) {
    _comments.push(comment);
    publish('comment');

    Ajax.put(URL, comment).catch(function(error) {
      console.log(error);
    });
  }
};

export default CommentStore;

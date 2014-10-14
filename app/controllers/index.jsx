import CommentBox from 'app/components/comment-box';
import {subscribe, unsubscribe} from 'app/pub-sub';
import CommentStore from 'app/stores/comment';

var fnSubscription; // fn defined below

var getState = function () {
  return {
    'comments': CommentStore.getComments()
  };
};

// Controller provides props
// downward to components.  Component actions can then
// Invoke callbacks exposed by the controller
var IndexController = React.createClass({
  getInitialState: function() {
    return getState();
  },

  componentDidMount: function() {
    subscribe('comment', fnSubscription, this);
  },

  componentWillUnmount: function() {
    unsubscribe('comment', fnSubscription);
  },

  render: function() {
    /* jshint trailing:false, quotmark:false, newcap:false */
    return (
      <CommentBox comments={this.state.comments} handleCommentSubmit={CommentStore.addComment} />
    );
  }
});

fnSubscription = function() {
  this.setState(getState());
};

export default IndexController;

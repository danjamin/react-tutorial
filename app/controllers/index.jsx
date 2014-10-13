import CommentBox from 'app/components/comment-box';
import {subscribe, unsubscribe} from 'app/pub-sub';
import CommentStore from 'app/stores/comment';

var fnSubscription; // fn defined below

// Controller keeps state and provides props
// downward to components.  Component actions can then
// Invoke callbacks exposed by the controller
var IndexController = React.createClass({
  getInitialState: function() {
    return {comments: []};
  },

  componentDidMount: function() {
    subscribe('stores/comment', fnSubscription, this);
    CommentStore.get();
  },

  componentWillUnmount: function() {
    unsubscribe('stores/comment', fnSubscription);
  },

  render: function() {
    /* jshint trailing:false, quotmark:false, newcap:false */
    return (
      <CommentBox comments={this.state.comments} handleCommentSubmit={CommentStore.put} />
    );
  }
});

fnSubscription = function(comments) {
  this.setState({comments: comments});
};

export default IndexController;

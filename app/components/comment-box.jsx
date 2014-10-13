import CommentList from 'app/components/comment-list';
import CommentForm from 'app/components/comment-form';

var CommentBox = React.createClass({
  propTypes: {
    comments: React.PropTypes.array.isRequired,
    handleCommentSubmit: React.PropTypes.func.isRequired
  },

  render: function() {
    /* jshint trailing:false, quotmark:false, newcap:false */
    return (
      <div className="commentBox">
        <h1>Comments</h1>
        <CommentList comments={this.props.comments} />
        <CommentForm onCommentSubmit={this.props.handleCommentSubmit} />
      </div>
    );
  }
});

export default CommentBox;

import Comment from 'app/components/comment';

var CommentList = React.createClass({
  propTypes: {
    comments: React.PropTypes.array.isRequired
  },

  render: function() {
    /* jshint trailing:false, quotmark:false, newcap:false */
    var commentNodes = this.props.comments.map(function (comment) {
      return (
        <Comment author={comment.author}>
          {comment.text}
        </Comment>
      );
    });

    return (
      <div className="commentList">
        {commentNodes}
      </div>
    );
  }
});

export default CommentList;

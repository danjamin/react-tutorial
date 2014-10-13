var CommentForm = React.createClass({
  propTypes: {
    onCommentSubmit: React.PropTypes.func.isRequired
  },

  render: function() {
    /* jshint trailing:false, quotmark:false, newcap:false */
    return (
      <form className="commentForm" onSubmit={this.handleSubmit}>
        <input type="text" placeholder="Your name" ref="author" />
        <input type="text" placeholder="Say something ..." ref="text" />
        <input type="submit" value="Post" />
      </form>
    );
  },

  handleSubmit: function(e) {
    e.preventDefault();

    var author = this.refs.author.getDOMNode().value.trim();
    var text = this.refs.text.getDOMNode().value.trim();

    if (!text || !author) {
      return;
    }

    this.props.onCommentSubmit({author: author, text: text});
    this.refs.author.getDOMNode().value = '';
    this.refs.text.getDOMNode().value = '';
  }
});

export default CommentForm;
var converter = new Showdown.converter();

var Comment = React.createClass({
  propTypes: {
    author: React.PropTypes.string.isRequired
  },

  render: function() {
    /* jshint trailing:false, quotmark:false, newcap:false */
    var rawMarkup = converter.makeHtml(this.props.children.toString());
    return (
      <div className="comment">
        <h2 className="commentAuthor">
          {this.props.author}
        </h2>
        <span dangerouslySetInnerHTML={{__html: rawMarkup}} />
      </div>
    );
  }
});

export default Comment;


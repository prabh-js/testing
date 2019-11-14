import React from 'react';
import { connect } from 'react-redux';
import { saveComments, fetchComments } from 'actions';

class CommentBox extends React.Component {
    state = { comment: '' };
    handleChange = (event) => {
        this.setState({
            comment: event.target.value,
        })
    }
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.saveComments(this.state.comment);

        this.setState({
            comment: ''
        })
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h4>Add a comment!</h4>
                    <textarea value={this.state.comment} onChange={this.handleChange} />
                    <div>
                        <button>
                            Submit comment
                        </button>
                    </div>
                </form>
                <button onClick={this.props.fetchComments}>Fetch comments</button>
            </div>
        )
    }
}
export default connect(null, { saveComments, fetchComments })(CommentBox);
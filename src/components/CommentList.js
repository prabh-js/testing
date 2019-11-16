import React from 'react';
import { connect } from 'react-redux';

class CommentList extends React.Component {
    renderList = () => {
      return  this.props.comments.map((comment, index) => {
            return <li key={index}>{comment}</li>
        })
    }
    render() {
        return (
            <div>
                <h4>Comment List!</h4>
                <ul>
                    {this.renderList()}
                </ul>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        comments: state.comments
    }
}
export default connect(mapStateToProps)(CommentList);
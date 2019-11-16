import React from 'react';
import { Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { changeAuth } from 'actions';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';

class App extends React.Component {
    renderButton = () => {
        if (this.props.auth) {
            return (
                <button onClick={()=>this.props.changeAuth(false)}>SignOut</button>
            )
        } else {
           return (
            <button onClick={()=>this.props.changeAuth(true)}>SignIn</button>
           ) 
        }
    }
    renderHeader = () => {
        return (
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/post">Post a comment</Link>
                </li>
                <li>{this.renderButton()}</li>
            </ul>
        )
    }
    render() {
        return (
            <div>
                {this.renderHeader()}
                <Route path="/" exact component={CommentList} />
                <Route path="/post" component={CommentBox} />
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        auth: state.auth,
    }
}
export default connect(mapStateToProps, { changeAuth })(App);
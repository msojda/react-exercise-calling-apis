import React from 'react'
import { connect } from 'react-redux';

class Blog extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props;

    dispatch({ type: 'POSTS_FETCH_REQUESTED' });
  }

  render() {
    const posts = this.props.posts;

    return (
      <div>
        <h2>Blog</h2>

        {posts.map((post) =>
          <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        )}
      </div>
    )
  }
}

export default connect(
  state => ({ posts: state.posts })
)(Blog);

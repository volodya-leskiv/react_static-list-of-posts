import React from 'react';

import './App.scss';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';
import { PostList } from './components/PostList/PostList';
import {
  FullPost, Post, User, Comment,
} from './react-app-env';

const preparingPosts = (
  postsList: Post[],
  usersList: User[],
  commentsList: Comment[],
) => {
  return postsList.map(post => ({
    ...post,
    user: usersList.find(user => user.id === post.userId),
    comments: commentsList.filter(comment => comment.postId === post.id),
  }));
};

const preparedPosts: FullPost[] = preparingPosts(posts, users, comments);

const App: React.FC = () => (
  <div className="App">
    <h1>Static list of posts</h1>
    <PostList preparedPosts={preparedPosts} />
  </div>
);

export default App;

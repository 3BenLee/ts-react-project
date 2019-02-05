import * as React from 'react';
import { Link } from 'react-router-dom';

interface IPost {
  title: string;
  id: number;
}

interface IState {
  blogPosts: IPost[];
}

class MyBlogs extends React.Component<{}, IState> {
  
  state = {
    blogPosts: []
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts')
  .then((response) => {
    return response.json();
  })
  .then((posts) => {
    this.setState({blogPosts: posts})
  })}

  render() {

    const titles = this.state.blogPosts.map((post: IPost) => (
      <Link to={'/blogread/' + post.id} key={post.id}><li key={post.id}>{post.title}</li></Link>))

    return (
      <div>
        <h1>Ben's Recent Blogs</h1>
        <ul>
          {titles}
        </ul>
      </div> 
    )
  };
};

export default MyBlogs;
import * as React from 'react';
import { Link } from 'react-router-dom';
import Post from './Post';

interface IPost {
  title: string;
  id: number;
}

interface IState {
  blogPosts: IPost[];
}

class MyBlogs extends React.Component<IPost, IState> {
  
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
    })
  }

  // postSelectedHandler = (id: any) => {
  //   this.setState({blogPosts: id})
  // }

  render() {

    const titles = this.state.blogPosts.map((post: IPost) => (
      <Link to={'/fullpost/' + post.id} key={post.id}>
        <Post title={post.title} />
        {/* <Post title={post.title} clicked={() => this.postSelectedHandler(post.id)} /> */}
      </Link>
    ))

    return (
      <div>
        <h1>Ben's Recent Blogs</h1>
        <div>
          {titles}
        </div>
      </div> 
    )
  };
};

export default MyBlogs;
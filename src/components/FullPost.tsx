import * as React from 'react';
///// This import makes the props accessible as on line 16
import { RouteComponentProps } from 'react-router-dom';

interface IPost {
  title: string;
  id: number;
  body: string;
}

interface IState {
  loadedPost: IPost | null;
}

/// If using react router and you want to pass props(params., etc...)
class FullPost extends React.Component<RouteComponentProps<{id: string}>, IState> {

  state: Readonly<IState> = {
    loadedPost: null
  }
   componentDidMount() {
      console.log('fullpost', this.props)
      fetch('https://jsonplaceholder.typicode.com/posts/' + this.props.match.params.id)
      .then((response) => {
        return response.json()
      })
      .then((post) => {
        this.setState({loadedPost: post})
        console.log(this.state.loadedPost)
      })
    }
  render() {

    const post = this.state.loadedPost
      if (!post) {
        return null
      }

    return (
      <div>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
      </div>
    )
  }
}

export default FullPost;